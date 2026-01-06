'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { pujas } from '@/data/pujas';
import '@/styles/PoojasPage.css';

const PoojasContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');

    // Preserve existing params (like samagriId)
    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        return params.toString();
    };

    const filteredPujas = pujas.filter(puja =>
        puja.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        puja.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBookPuja = (pujaId: number) => {
        const samagriId = searchParams.get('samagriId');
        const panditId = searchParams.get('panditId');

        if (samagriId) {
            // Unconditional "Yes" to samagri if kit was pre-selected
            const params = new URLSearchParams(searchParams.toString());
            params.set('pujaType', pujaId.toString());
            params.set('includeSamagri', 'true');
            if (panditId) params.set('panditId', panditId);
            router.push(`/booking?${params.toString()}`);
        } else {
            // Standard flow: Ask user if they want samagri
            const params = new URLSearchParams();
            params.set('pujaId', pujaId.toString());
            if (panditId) params.set('panditId', panditId);
            router.push(`/book-pandit/options?${params.toString()}`);
        }
    };

    return (
        <div className="poojas-page">
            <div className="poojas-header">
                <h1>Our Divine Services</h1>
                <p>Select a specialized puja for peace, prosperity, and well-being.</p>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for a Puja (e.g. Satyanarayana, Griha Pravesh)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <span className="search-icon">🔍</span>
                </div>
            </div>

            <div className="poojas-grid-container">
                {filteredPujas.length > 0 ? (
                    <div className="pujas-grid-enhanced">
                        {filteredPujas.map((puja) => (
                            <div key={puja.id} className="puja-card-enhanced">
                                <div className="puja-card-header">
                                    <div className="puja-icon">🕉️</div>
                                    <span className="puja-category-badge">
                                        {/* Simple badging - could import category map if needed, 
                                            but hardcoding or getting from data is fine. 
                                            For now reusing data/pujas logic or just displaying category key formatted */}
                                        {puja.category.toUpperCase()}
                                    </span>
                                </div>
                                <h3 className="puja-name">{puja.name}</h3>
                                <p className="puja-description">{puja.description}</p>
                                <div className="puja-meta">
                                    <div className="puja-duration">
                                        <span className="meta-icon">⏱️</span>
                                        <span>{puja.duration}</span>
                                    </div>
                                    <div className="puja-price">
                                        <span className="price-label">Dakshina:</span>
                                        <span className="price-value">{puja.price}</span>
                                    </div>
                                </div>
                                <div className="puja-card-footer">
                                    <button
                                        className="book-puja-btn"
                                        onClick={() => handleBookPuja(puja.id)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <p>No pujas found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function PoojasPage() {
    return (
        <Suspense fallback={<div>Loading services...</div>}>
            <PoojasContent />
        </Suspense>
    );
}
