import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function AppHelmet({ title }) {
    const location = useLocation();
    const canonicalUrl = encodeURI(`${window.location.origin}${location.pathname}`);

    return (
        <Helmet>
            <meta charSet="UTF-8" />
            <title>{title} | Instant M-Pesa Loans - Fast Approval, No Paperwork</title>

            {/* Favicon & Icons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="shortcut icon" type="image/x-icon" href="/logo512.png" />
            <link rel="manifest" href="/manifest.json" crossOrigin="anonymous" />

            {/* Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <meta name="theme-color" content="#00BFFF" />
            <meta name="author" content="Your Loan App Name" />
            <meta
                name="description"
                content="Get instant online loans to M-Pesa in minutes. No paperwork, no guarantors required. Enjoy fast approval, low interest rates (5% p.a.), and flexible repayment options."
            />
            <meta
                name="keywords"
                content="instant loans, M-Pesa loans, online loans Kenya, quick loans, no paperwork loans, low interest loans, payday loans, fast loan approval, emergency loans"
            />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph (Social Media) Tags */}
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content="Apply for an instant M-Pesa loan today! Get quick online loans with fast approval and no paperwork. Enjoy low interest rates and flexible repayment terms."
            />
            <meta property="og:image" content={`${window.location.origin}/logo512.png`} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content="Need cash fast? Apply for an instant online loan to M-Pesa. No paperwork, no waiting—just quick and easy financial support!"
            />
            <meta name="twitter:image" content={`${window.location.origin}/logo512.png`} />
        </Helmet>
    );
}
