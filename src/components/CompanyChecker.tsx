'use client';

import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaSpinner, FaTimes } from 'react-icons/fa';

interface CompanyResult {
    title: string;
    company_number: string;
    company_status: string;
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

    // Helper function to normalize company names for better matching
    function normalizeCompanyName(name: string): string {
        return name
            .toLowerCase()
            .trim()
            // Expand common abbreviations
            .replace(/\bplc\b/g, 'public limited company')
            .replace(/\bp\.l\.c\.?\b/g, 'public limited company')
            .replace(/\bltd\b/g, 'limited')
            .replace(/\bco\b/g, 'company')
            // Remove extra spaces and punctuation
            .replace(/[.,\-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
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
            const url = `/api/check-company?name=${encodeURIComponent(companyName)}`;
            const response = await fetch(url);

            if (!response.ok) throw new Error('API error');

            const data = await response.json();

            // If Companies House returned results
            if (data.items && data.items.length > 0) {
                const normalizedSearchName = normalizeCompanyName(companyName);

                // Check for exact match (case-insensitive)
                const exactMatch = data.items.find(
                    (item: any) => item.title.toLowerCase() === companyName.toLowerCase()
                );

                // Check for normalized match (handles PLC/LTD variations)
                const normalizedMatch = data.items.find(
                    (item: any) => normalizeCompanyName(item.title) === normalizedSearchName
                );

                // Get top 3 similar results to show user
                const topMatches = data.items.slice(0, 3);

                if (exactMatch || normalizedMatch) {
                    const matchedCompany = exactMatch || normalizedMatch;
                    setResult({
                        type: 'error',
                        message: 'Name already taken',
                        companies: [matchedCompany],
                    });
                } else {
                    // No exact match, but show similar results as warning
                    setResult({
                        type: 'warning',
                        message: 'No exact match found',
                        companies: topMatches,
                        totalResults: data.total_results,
                    });
                }
            } else {
                // No companies found
                setResult({
                    type: 'success',
                    message: 'Available! No company found with this name.',
                });
            }
        } catch (error) {
            setResult({
                type: 'error',
                message: 'Error while checking. Please try again.',
            });
            console.error('Checker Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearResult = () => {
        setResult({ type: null, message: '' });
    };

    return (
        <section id="checker" className="checker-section">
            <div className="checker-container">
                <h2 className="checker-heading">Check Your Company Name Availability</h2>
                <p className="checker-subtitle">Instant check with the UK database</p>

                <div className="checker-input-wrapper">
                    <input
                        type="text"
                        className="checker-input"
                        placeholder="Enter company name"
                        value={companyName}
                        onChange={(e) => {
                            setCompanyName(e.target.value);
                            if (e.target.value.trim() === '') {
                                handleClearResult();
                            }
                        }}
                        onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleCheckAvailability()}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleCheckAvailability}
                        disabled={isLoading}
                        className="checker-button"
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="checker-spinner" />
                                Checking...
                            </>
                        ) : (
                            'Check Availability'
                        )}
                    </button>
                </div>

                {/* Results */}
                {result.type && (
                    <div className={`checker-result checker-result-${result.type}`}>
                        <div className="checker-result-header">
                            <div className="checker-result-header-content">
                                {result.type === 'success' && <FaCheckCircle className="checker-result-icon" />}
                                {result.type === 'error' && <FaTimesCircle className="checker-result-icon" />}
                                {result.type === 'warning' && <FaExclamationTriangle className="checker-result-icon" />}
                                <h3 className="checker-result-title">{result.message}</h3>
                            </div>
                            <button
                                onClick={handleClearResult}
                                className="checker-result-close"
                                aria-label="Close result"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {result.companies && result.companies.length > 0 && (
                            <div className="checker-companies">
                                {result.type === 'error' && (
                                    <p className="checker-result-description">
                                        This name is already registered:
                                    </p>
                                )}
                                {result.type === 'warning' && (
                                    <p className="checker-result-description">
                                        However, {result.totalResults} similar name(s) exist. Review carefully:
                                    </p>
                                )}

                                {result.companies.map((company, index) => (
                                    <div key={index} className="checker-company-card">
                                        <div className="checker-company-name">{company.title}</div>
                                        <div className="checker-company-details">
                                            {/* <span>No: {company.company_number}</span> */}
                                            <span className="checker-company-separator">•</span>
                                            <span>Status: {company.company_status}</span>
                                        </div>
                                    </div>
                                ))}

                                {result.type === 'warning' && (
                                    <p className="checker-result-note">
                                        If these are too similar, Companies House may reject your application.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
