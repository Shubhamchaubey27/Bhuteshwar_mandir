'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import '@/styles/OptionsPage.css'; // Reusing options styles

const ProductChoiceContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const samagriId = searchParams.get('samagriId');
    const samagriName = searchParams.get('samagriName');
    const samagriPrice = searchParams.get('samagriPrice');

    const handleChoice = (addPuja: boolean) => {
        const params = new URLSearchParams();
        if (samagriId) params.append('samagriId', samagriId);
        if (samagriName) params.append('samagriName', samagriName);
        if (samagriPrice) params.append('samagriPrice', samagriPrice);

        if (addPuja) {
            // Redirect to Poojas page to select a service, carrying the kit context
            router.push(`/poojas?${params.toString()}`);
        } else {
            // Redirect directly to booking (Just Kit + Pandit)
            // Implicitly generic puja or just delivery
            router.push(`/booking?${params.toString()}`);
        }
    };

    return (
        <div className="options-page">
            <div className="options-container">
                <div className="options-header">
                    <h1>Booking: {samagriName}</h1>
                    <p>Would you like to add a specific Puja Service with this kit?</p>
                </div>

                <div className="options-grid">
                    {/* Option 1: Add Puja */}
                    <div className="option-card" onClick={() => handleChoice(true)}>
                        <div className="recommended-badge">Recommended</div>
                        <div className="option-icon">🕉️</div>
                        <h3>Add Puja Service</h3>
                        <p>
                            Select a specific puja (e.g. Satyanarayan, Griha Pravesh) to be performed with this kit.
                            Pandit Ji will perform the full vidhi.
                        </p>
                        <span className="option-price">Select Puja + Pandit</span>
                        <button className="select-btn">Browse Pujas</button>
                    </div>

                    {/* Option 2: Just Kit */}
                    <div className="option-card" onClick={() => handleChoice(false)}>
                        <div className="option-icon">📦</div>
                        <h3>Just Book Kit</h3>
                        <p>
                            Book Pandit Ji simply to bring this material or perform a basic ritual.
                            No specific service selection required.
                        </p>
                        <span className="option-price">Quick Checkout</span>
                        <button className="select-btn">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProductChoicePage() {
    return (
        <Suspense fallback={<div>Loading choices...</div>}>
            <ProductChoiceContent />
        </Suspense>
    );
}
