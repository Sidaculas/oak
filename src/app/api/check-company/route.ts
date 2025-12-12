import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const companyName = searchParams.get('name');

        if (!companyName) {
            return NextResponse.json(
                { error: 'Company name is required' },
                { status: 400 }
            );
        }

        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.error('❌ API_KEY not found in environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const url = `https://api.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(companyName)}`;

        console.log('🔍 Checking company:', companyName);

        // Companies House requires: Base64(API_KEY:)
        const authToken = Buffer.from(`${apiKey}:`).toString('base64');

        const response = await fetch(url, {
            headers: {
                Authorization: `Basic ${authToken}`,
                Accept: 'application/json',
            },
        });

        console.log('📡 API Response Status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Companies House API Error:', {
                status: response.status,
                statusText: response.statusText,
                body: errorText,
            });
            return NextResponse.json(
                {
                    error: 'Companies House API error',
                    details: `Status ${response.status}: ${response.statusText}`,
                },
                { status: 500 }
            );
        }

        const data = await response.json();
        console.log('✅ Found', data.items?.length || 0, 'companies');

        return NextResponse.json(data);
    } catch (error) {
        console.error('💥 Server Error:', error);
        return NextResponse.json(
            { error: 'Failed to check company name' },
            { status: 500 }
        );
    }
}
