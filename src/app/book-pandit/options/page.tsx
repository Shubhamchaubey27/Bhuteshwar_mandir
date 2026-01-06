'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { pujas } from '@/data/pujas';
import '@/styles/OptionsPage.css';

const OptionsContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pujaId = searchParams.get('pujaId');

    // Find selected puja to show relevant prices/info if needed
    const puja = pujas.find(p => p.id === parseInt(pujaId || '0'));
    const pujaName = puja ? puja.name : 'Pooja';

    // Preserve Samagri Context
    const samagriId = searchParams.get('samagriId');
    const samagriName = searchParams.get('samagriName');
    const samagriPrice = searchParams.get('samagriPrice');
    const panditId = searchParams.get('panditId');

    const handleSelect = (withSamagri: boolean) => {
        const params = new URLSearchParams();
        if (pujaId) params.append('pujaType', pujaId);
        if (panditId) params.append('panditId', panditId);

        // Pass generic "includeSamagri" flag
        if (withSamagri) {
            params.append('includeSamagri', 'true');
            // Check if we have specific samagri context from previous steps
            if (samagriId && samagriName && samagriPrice) {
                params.append('samagriId', samagriId);
                params.append('samagriName', samagriName);
                params.append('samagriPrice', samagriPrice);
            }
        } else {
            params.append('includeSamagri', 'false');
            // If they explicitly say NO to samagri even if they started with a kit, 
            // we should arguably drop the kit context.
        }

        router.push(`/booking?${params.toString()}`);
    };

    return (
        <div className="options-page">
            <div className="options-container">
                <div className="options-header">
                    <h1>{pujaName} Options</h1>
                    <p>Choose how you would like to proceed with your booking</p>
                </div>

                <div className="options-grid">
                    {/* Option 1: With Samagri */}
                    <div className="option-card" onClick={() => handleSelect(true)}>
                        <div className="recommended-badge">Recommended</div>
                        <div className="option-icon">🛍️</div>
                        <h3>With Pooja Samagri</h3>
                        <p>
                            We will bring all the authentic and high-quality samagri required for the {pujaName}.
                            Hassle-free experience for you.
                        </p>
                        <span className="option-price">Pandit Ji + Samagri Kit</span>
                        <button className="select-btn">Select this Option</button>
                    </div>

                    {/* Option 2: Without Samagri */}
                    <div className="option-card" onClick={() => handleSelect(false)}>
                        <div className="option-icon">🙏</div>
                        <h3>Without Samagri</h3>
                        <p>
                            You will arrange the samagri yourself. Pandit Ji will only perform the pooja
                            with the items you provide.
                        </p>
                        <span className="option-price">Pandit Ji Only</span>
                        <button className="select-btn">Select this Option</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function OptionsPage() {
    return (
        <Suspense fallback={<div>Loading options...</div>}>
            <OptionsContent />
        </Suspense>
    );
}
