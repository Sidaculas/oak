'use client';

import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaSpinner, FaTimes } from 'react-icons/fa';

interface CompanyResult {
    title: string;
    company_number: string;
    company_status: string;
    company_type?: string;
    date_of_creation?: string;
}

export default function CompanyChecker() {
    const [companyName, setCompanyName] = useState('');
    const [result, setResult] = useState<{
        type: 'success' | 'error' | 'warning' | 'info' | null;
        message: string;
        companies?: CompanyResult[];
        totalResults?: number;
    }>({ type: null, message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [suffix, setSuffix] = useState('LTD');

    // Enhanced normalization - removes all legal entity indicators
    function normalizeCompanyName(name: string): string {
        return name
            .toLowerCase()
            .trim()
            // Remove all common UK legal suffixes
            .replace(/\b(ltd|limited|plc|p\.l\.c\.?|llp|limited liability partnership|public limited company|cic|community interest company)\b/gi, '')
            // Handle special characters consistently
            .replace(/[.,\-–—]/g, ' ')
            .replace(/&/g, 'and')
            // Normalize whitespace
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Calculate Levenshtein distance for precise similarity measurement
    function levenshteinDistance(str1: string, str2: string): number {
        const matrix: number[][] = [];

        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }

        return matrix[str2.length][str1.length];
    }

    // Calculate similarity score (0-1 range)
    function calculateSimilarity(str1: string, str2: string): number {
        const s1 = normalizeCompanyName(str1);
        const s2 = normalizeCompanyName(str2);

        const longer = s1.length > s2.length ? s1 : s2;
        const shorter = s1.length > s2.length ? s2 : s1;

        if (longer.length === 0) return 1.0;

        const editDistance = levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }

    // Generate name variations for comprehensive matching
    function generateNameVariations(name: string): string[] {
        const normalized = normalizeCompanyName(name);
        const variations = new Set<string>([normalized]);

        // Add spaceless version to catch acronyms (e.g., "wpp" matches "w p p")
        const spaceless = normalized.replace(/\s+/g, '');
        if (spaceless !== normalized) {
            variations.add(spaceless);
        }

        // & vs "and" variations
        variations.add(normalized.replace(/\band\b/g, '&'));
        variations.add(normalized.replace(/&/g, 'and'));

        // Number to word conversions
        const numberMap: { [key: string]: string } = {
            '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
            '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
        };

        Object.entries(numberMap).forEach(([num, word]) => {
            if (normalized.includes(num)) {
                variations.add(normalized.replace(new RegExp(num, 'g'), word));
            }
            if (normalized.includes(word)) {
                variations.add(normalized.replace(new RegExp(`\\b${word}\\b`, 'g'), num));
            }
        });

        // "2" vs "to" vs "too"
        if (normalized.includes('2')) {
            variations.add(normalized.replace(/2/g, 'to'));
            variations.add(normalized.replace(/2/g, 'too'));
        }
        if (normalized.includes('to')) {
            variations.add(normalized.replace(/\bto\b/g, '2'));
        }

        // "4" vs "for"
        if (normalized.includes('4')) {
            variations.add(normalized.replace(/4/g, 'for'));
        }
        if (normalized.includes('for')) {
            variations.add(normalized.replace(/\bfor\b/g, '4'));
        }

        // Generate spaceless versions of all variations created so far
        // This ensures "wpp" matches "w & p p", "w and p p", etc.
        const currentVariations = Array.from(variations);
        currentVariations.forEach(v => {
            const spacelessVariation = v.replace(/\s+/g, '');
            if (spacelessVariation !== v) {
                variations.add(spacelessVariation);
            }
        });

        return Array.from(variations);
    }

    // Check if names are legally equivalent
    function areLegallyEquivalent(name1: string, name2: string): boolean {
        const variations1 = generateNameVariations(name1);
        const variations2 = generateNameVariations(name2);

        // Check for exact match in any variation
        for (const v1 of variations1) {
            for (const v2 of variations2) {
                if (v1 === v2) return true;

                // Very high similarity threshold
                const similarity = calculateSimilarity(v1, v2);
                if (similarity >= 0.95) return true;
            }
        }

        return false;
    }

    // Helper function to detect if a string looks like an acronym
    function isLikelyAcronym(str: string): boolean {
        // Check if it's a short string (2-5 chars) with mostly letters and no spaces
        const trimmed = str.trim();
        return trimmed.length >= 2 && trimmed.length <= 5 &&
            /^[a-zA-Z0-9]+$/.test(trimmed) &&
            !/\s/.test(trimmed);
    }

    // Helper function to add spaces between each character
    function spaceOutAcronym(str: string): string {
        return str.split('').join(' ').toUpperCase();
    }

    // Perform multi-strategy search for comprehensive availability check
    async function performComprehensiveSearch(searchName: string): Promise<{
        standardResults: any[];
        restrictedResults: any[];
        alphabeticalResults: any[];
    }> {
        const fullName = `${searchName} ${suffix}`;
        const results = {
            standardResults: [] as any[],
            restrictedResults: [] as any[],
            alphabeticalResults: [] as any[]
        };

        // Determine if we should also search for a spaced-out version
        const searchVariations = [fullName];
        if (isLikelyAcronym(searchName)) {
            const spacedOut = `${spaceOutAcronym(searchName)} ${suffix}`;
            searchVariations.push(spacedOut);
            console.log(`Detected potential acronym. Searching for both: "${fullName}" and "${spacedOut}"`);
        }

        try {
            // Search for all variations
            for (const searchVariation of searchVariations) {
                // Strategy 1: Standard search with active companies restriction
                const standardUrl = `/api/check-company?name=${encodeURIComponent(searchVariation)}&restrictions=active-companies`;
                const standardResponse = await fetch(standardUrl);
                if (standardResponse.ok) {
                    const data = await standardResponse.json();
                    if (data.items) {
                        results.standardResults.push(...data.items);
                    }
                }

                // Strategy 2: Search with legally-equivalent-company-name restriction
                // This is the official Companies House method for name availability checks
                const restrictedUrl = `/api/check-company?name=${encodeURIComponent(searchVariation)}&restrictions=active-companies legally-equivalent-company-name`;
                const restrictedResponse = await fetch(restrictedUrl);
                if (restrictedResponse.ok) {
                    const data = await restrictedResponse.json();
                    if (data.items) {
                        results.restrictedResults.push(...data.items);
                    }
                }

                // Strategy 3: Alphabetical search for exact matches
                // This helps catch companies that might be missed by fuzzy search
                const searchBase = searchVariation.replace(` ${suffix}`, '');
                const alphabeticalUrl = `/api/check-company?name=${encodeURIComponent(searchBase)}&search_type=alphabetical`;
                const alphabeticalResponse = await fetch(alphabeticalUrl);
                if (alphabeticalResponse.ok) {
                    const data = await alphabeticalResponse.json();
                    if (data.items) {
                        results.alphabeticalResults.push(...data.items);
                    }
                }
            }

        } catch (error) {
            console.error('Search strategy error:', error);
        }

        return results;
    }

    // Analyze search results with multi-tier matching
    function analyzeAvailability(
        searchName: string,
        standardResults: any[],
        restrictedResults: any[],
        alphabeticalResults: any[]
    ): {
        available: boolean;
        matchType: 'exact' | 'legal-equivalent' | 'highly-similar' | 'similar' | 'available';
        matchedCompany: any | null;
        similarCompanies: any[];
    } {
        const fullName = `${searchName} ${suffix}`;
        const normalizedSearch = normalizeCompanyName(fullName);

        // Combine and deduplicate all results
        const allCompanies = new Map<string, any>();
        [...restrictedResults, ...standardResults, ...alphabeticalResults].forEach(company => {
            if (company.company_status?.toLowerCase() === 'active') {
                allCompanies.set(company.company_number, company);
            }
        });

        const activeCompanies = Array.from(allCompanies.values());

        if (activeCompanies.length === 0) {
            return {
                available: true,
                matchType: 'available',
                matchedCompany: null,
                similarCompanies: []
            };
        }

        // Tier 1: Exact match (100% after normalization)
        for (const company of activeCompanies) {
            const normalizedCompany = normalizeCompanyName(company.title);
            if (normalizedSearch === normalizedCompany) {
                return {
                    available: false,
                    matchType: 'exact',
                    matchedCompany: company,
                    similarCompanies: []
                };
            }
        }

        // Tier 2: Legally equivalent (95-99% similarity or variation match)
        for (const company of activeCompanies) {
            if (areLegallyEquivalent(fullName, company.title)) {
                return {
                    available: false,
                    matchType: 'legal-equivalent',
                    matchedCompany: company,
                    similarCompanies: []
                };
            }
        }

        // Tier 3: Highly similar (90-94% similarity)
        const highlySimilar = activeCompanies
            .map(company => ({
                company,
                similarity: calculateSimilarity(fullName, company.title)
            }))
            .filter(item => item.similarity >= 0.90 && item.similarity < 0.95)
            .sort((a, b) => b.similarity - a.similarity);

        if (highlySimilar.length > 0) {
            return {
                available: false,
                matchType: 'highly-similar',
                matchedCompany: highlySimilar[0].company,
                similarCompanies: highlySimilar.slice(1, 3).map(item => item.company)
            };
        }

        // Tier 4: Similar (70-89% similarity) - Warning but potentially available
        const similar = activeCompanies
            .map(company => ({
                company,
                similarity: calculateSimilarity(fullName, company.title)
            }))
            .filter(item => item.similarity >= 0.70 && item.similarity < 0.90)
            .sort((a, b) => b.similarity - a.similarity);

        if (similar.length > 0) {
            return {
                available: true,
                matchType: 'similar',
                matchedCompany: null,
                similarCompanies: similar.slice(0, 3).map(item => item.company)
            };
        }

        return {
            available: true,
            matchType: 'available',
            matchedCompany: null,
            similarCompanies: []
        };
    }

    const handleCheckAvailability = async () => {
        if (!companyName.trim()) {
            setResult({
                type: 'error',
                message: 'Please enter a company name.',
            });
            return;
        }

        setIsLoading(true);
        setResult({ type: null, message: '' });

        try {
            // Perform comprehensive multi-strategy search
            const { standardResults, restrictedResults, alphabeticalResults } =
                await performComprehensiveSearch(companyName);

            // Analyze all results
            const analysis = analyzeAvailability(
                companyName,
                standardResults,
                restrictedResults,
                alphabeticalResults
            );

            // Generate user-friendly messages
            switch (analysis.matchType) {
                case 'exact':
                    setResult({
                        type: 'error',
                        message: `This company name is already registered. Please choose another name.`,
                        companies: [analysis.matchedCompany],
                    });
                    break;

                case 'legal-equivalent':
                    setResult({
                        type: 'error',
                        message: `This company name is already registered. Please choose another name.`,
                        companies: [analysis.matchedCompany],
                    });
                    break;

                case 'highly-similar':
                    setResult({
                        type: 'error',
                        message: `A very similar company name exists: "${analysis.matchedCompany.title}" (${Math.round(calculateSimilarity(companyName + ' ' + suffix, analysis.matchedCompany.title) * 100)}% match)`,
                        companies: [analysis.matchedCompany, ...analysis.similarCompanies],
                    });
                    break;

                case 'similar':
                    setResult({
                        type: 'warning',
                        message: `Name appears available, but ${analysis.similarCompanies.length} similar company name(s) exist. Consider a more distinctive name.`,
                        companies: analysis.similarCompanies,
                    });
                    break;

                case 'available':
                default:
                    setResult({
                        type: 'success',
                        message: 'Company name is available. You can register it now.',
                    });
                    break;
            }

        } catch (error) {
            setResult({
                type: 'error',
                message: 'Error while checking. Please try again.',
            });
            console.error('Availability check error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="checker" className="checker-section">
            <div className="checker-container">
                <h2 className="checker-heading">Check Your Company Name Availability</h2>
                <p className="checker-subtitle">Instant check with the UK database</p>

                <div className="mx-auto max-w-2xl bg-black/5 dark:bg-white/5 p-6 rounded-xl border border-black/10 dark:border-white/10 backdrop-blur-md transition-colors">
                    <label className="mb-2 block text-left text-md font-semibold text-foreground/80">
                        Company name
                    </label>

                    {/* Input Group */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className={`relative flex flex-1 items-center rounded-lg border bg-background/50 dark:bg-background/20 backdrop-blur-sm transition-all focus-within:ring-2 focus-within:ring-[#d4af37]/50 ${result.type === 'error' ? 'border-red-500/50' :
                            result.type === 'success' ? 'border-green-500/50' :
                                result.type === 'warning' ? 'border-orange-500/50' : 'border-border/60'
                            }`}>
                            <input
                                type="text"
                                className="flex-1 min-w-0 bg-transparent px-4 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground"
                                placeholder="Enter company name"
                                value={companyName}
                                onChange={(e) => {
                                    setCompanyName(e.target.value);
                                    if (result.type) setResult({ type: null, message: '' });
                                }}
                                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleCheckAvailability()}
                                disabled={isLoading}
                            />
                            {/* Vertical Divider */}
                            <div className="h-6 w-[1px] dark:bg-white/40 bg-black/40 flex-shrink-0"></div>

                            {/* Suffix Select Custom Wrapper */}
                            <div className="relative flex-shrink-0 w-[85px] max-w-[85px]">
                                <select
                                    value={suffix}
                                    onChange={(e) => setSuffix(e.target.value)}
                                    className="appearance-none bg-transparent pl-2 pr-6 py-3 text-sm font-medium text-foreground outline-none cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-r-lg w-full"
                                    disabled={isLoading}
                                >
                                    <option value="LTD" className="text-foreground bg-background">LTD</option>
                                    <option value="Limited" className="text-foreground bg-background">Limited</option>
                                    <option value="PLC" className="text-foreground bg-background">PLC</option>
                                </select>
                                {/* Custom Chevron */}
                                <div className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckAvailability}
                            disabled={isLoading}
                            className={`min-w-[170px] rounded-lg px-6 py-3 font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed ${result.type === 'success'
                                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green-500/20 hover:shadow-green-500/30'
                                : 'bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-[#d4af37]/20 hover:shadow-[#d4af37]/30'
                                }`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <FaSpinner className="animate-spin" />
                                    Checking...
                                </span>
                            ) : result.type === 'success' ? (
                                'Register Now'
                            ) : (
                                'Check Availability'
                            )}
                        </button>
                    </div>

                    {/* Inline Result Message */}
                    {result.type && (
                        <div className={`mt-3 flex items-center gap-2 text-sm font-medium animate-in fade-in slide-in-from-top-1 ${result.type === 'success' ? 'text-green-600 dark:text-green-400' :
                            result.type === 'error' ? 'text-red-600 dark:text-red-400' :
                                'text-orange-500'
                            }`}>
                            {result.type === 'success' && <FaCheckCircle className="h-4 w-4" />}
                            {result.type === 'error' && <FaTimesCircle className="h-4 w-4" />}
                            {result.type === 'warning' && <FaExclamationTriangle className="h-4 w-4" />}
                            <span>{result.message}</span>
                        </div>
                    )}
                </div>

                {/* Legacy card removed, using inline validation above */}
            </div>
        </section>
    );
}