'use client';

import { useState } from 'react';

export default function CompanyChecker() {
    const [companyName, setCompanyName] = useState('');
    const [resultHtml, setResultHtml] = useState('');
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
            setResultHtml("<span style='color:#ff5555;'>❌ Please enter a company name.</span>");
            return;
        }

        setIsLoading(true);
        setResultHtml('⏳ Checking availability...');

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
                    setResultHtml(`
            <div style="color:#ff3b3b;">
              <strong>❌ Name already taken</strong><br/>
              Registered as: <strong>${matchedCompany.title}</strong><br/>
              <small>Company No: ${matchedCompany.company_number} | Status: ${matchedCompany.company_status}</small>
            </div>
          `);
                } else {
                    // No exact match, but show similar results as warning
                    const similarHtml = topMatches
                        .map(
                            (item: any) =>
                                `<div style="padding:8px; margin:5px 0; background:#2a2a2a; border-radius:4px;">
                  <strong>${item.title}</strong><br/>
                  <small>No: ${item.company_number} | ${item.company_status}</small>
                </div>`
                        )
                        .join('');

                    setResultHtml(`
            <div style="color:#ffa500;">
              <strong>⚠️ No exact match found</strong><br/>
              <small>However, ${data.total_results} similar name(s) exist. Review carefully:</small>
              ${similarHtml}
              <small style="color:#888; display:block; margin-top:10px;">
                ℹ️ If these are too similar, Companies House may reject your application.
              </small>
            </div>
          `);
                }
            } else {
                // No companies found
                setResultHtml(
                    `<span style="color:#37d45f;">✅ Available! No company found with this name.</span>`
                );
            }
        } catch (error) {
            setResultHtml(
                "<span style='color:#ff5555;'>❌ Error while checking. Please try again.</span>"
            );
            console.error('Checker Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="checker" className="checker">
            <h2>Check Your Company Name Availability</h2>

            <div className="checker-box">
                <input
                    type="text"
                    id="companyName"
                    placeholder="Enter company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCheckAvailability()}
                />
                <button onClick={handleCheckAvailability} disabled={isLoading} id="checkButton">
                    {isLoading ? 'Checking...' : 'Check Availability'}
                </button>
            </div>

            <div id="checkerResult" dangerouslySetInnerHTML={{ __html: resultHtml }} />
        </section>
    );
}
