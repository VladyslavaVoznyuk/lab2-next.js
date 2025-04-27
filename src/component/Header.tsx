import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        console.log('NEXT_PUBLIC_SITE_NAME (Browser):', process.env.NEXT_PUBLIC_SITE_NAME);
        console.log('PUBLIC_API_URL (Browser):', process.env.NEXT_PUBLIC_PUBLIC_API_URL); // ця змінна також доступна
    }, []);

    return (
        <div>
            <h1>Environment Variables</h1>
            <p>Site Name: {process.env.NEXT_PUBLIC_SITE_NAME}</p>
        </div>
    );
}
