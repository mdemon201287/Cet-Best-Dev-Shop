// frontend/src/app/listing/page.tsx

'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const ListingPage = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const locationQuery = searchParams.get('location') || '';

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold mb-6">
                Search Results for &quot;{searchQuery}&quot; in &quot;{locationQuery}&quot;
            </h1>
            {/* Your content here */}
        </div>
    );
};

export default function ListingPageWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ListingPage />
        </Suspense>
    );
}
