export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Seven Oak Prestige",
        "image": "https://www.sevenoakprestige.com/assets/logo/seven_oak_prestige_dark_mode.png",
        "@id": "https://www.sevenoakprestige.com",
        "url": "https://www.sevenoakprestige.com",
        "telephone": "+447447488755",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "124 City Road",
            "addressLocality": "London",
            "postalCode": "EC1V 2NX",
            "addressCountry": "UK"
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.sevenoakprestige.com"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
