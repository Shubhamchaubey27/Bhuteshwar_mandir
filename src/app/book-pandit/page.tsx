'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { pandits } from '@/data/pandits';
import { pujas, pujaCategories } from '@/data/pujas';
import PanditCard from '@/components/PanditCard';
import { PujaCategoryKey } from '@/types';
import '@/styles/BookPandit.css';

export default function BookPandit() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPuja, setSelectedPuja] = useState<any>(null);
    const [showPanditSelection, setShowPanditSelection] = useState(false);
    const [selectedPandit, setSelectedPandit] = useState<any>(null);

    const filteredPujas = pujas.filter(puja => {
        const matchesCategory = selectedCategory === 'ALL' || puja.category === selectedCategory;
        const matchesSearch = puja.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleBookPuja = (puja: any) => {
        setSelectedPuja(puja);
        setShowPanditSelection(true);
        setSelectedPandit(null);
        setTimeout(() => {
            document.getElementById('pandit-selection-modal')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    const handleSelectPandit = (pandit: any) => {
        setSelectedPandit(pandit);
    };

    const proceedToBooking = () => {
        if (selectedPuja && selectedPandit) {
            // Navigate to Samagri Options Page
            router.push(`/book-pandit/options?pujaId=${selectedPuja.id}&panditId=${selectedPandit.id}`);
        }
    };

    const closeModal = () => {
        setShowPanditSelection(false);
        setSelectedPuja(null);
        setSelectedPandit(null);
    };

    return (
        <div className="book-pandit-page">
            {/* Divine Hero Section (Same as before) */}
            <section className="pandit-hero">
                <div className="pandit-hero-overlay"></div>
                {/* Floating Om Particles Removed */}
                <div className="container pandit-hero-content">
                    <h1 className="pandit-hero-title">
                        <span className="title-ornament">✦</span>
                        पंडित जी की व्यवस्था
                        <span className="title-ornament">✦</span>
                    </h1>
                    <p className="pandit-hero-subtitle">Book Experienced Pandits for All Ceremonies</p>
                    <p className="pandit-hero-description">
                        Our experienced Brahmins will perform your puja, sanskar, and rituals with full devotion.
                    </p>

                    {/* Hero Stats */}
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">36+</div>
                            <div className="stat-label">Puja Services</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Shuddhata</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">5k+</div>
                            <div className="stat-label">Happy Devotees</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pandits Section */}
            <section className="pandits-section section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title pandits-title">
                            <span className="title-decoration">✦</span>
                            Our Learned Pandits
                            <span className="title-decoration">✦</span>
                        </h2>
                    </div>
                    <div className="pandits-grid-enhanced">
                        {pandits.map((pandit) => (
                            <PanditCard key={pandit.id} pandit={pandit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pujas Section */}
            <section className="pujas-section section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title pujas-title">
                            <span className="title-decoration">✦</span>
                            Available Puja Services
                            <span className="title-decoration">✦</span>
                        </h2>
                        <p className="section-subtitle">Select a puja to proceed with booking</p>
                    </div>

                    {/* Search and Filter */}
                    <div className="puja-filters">
                        <div className="search-wrapper">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="🔍 Search Puja (e.g. Griha Pravesh)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="category-filters">
                            <button
                                className={`filter-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('ALL')}
                            >
                                All Pujas
                            </button>
                            {Object.entries(pujaCategories).map(([key, label]) => (
                                <button
                                    key={key}
                                    className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(key)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pujas Grid */}
                    <div className="pujas-grid-enhanced">
                        {filteredPujas.map((puja) => (
                            <div key={puja.id} className="puja-card-enhanced">
                                <div className="puja-card-header">
                                    <div className="puja-icon">🕉️</div>
                                    <span className="puja-category-badge">
                                        {pujaCategories[puja.category]}
                                    </span>
                                </div>
                                <h3 className="puja-name">{puja.name}</h3>
                                <p className="puja-description">{puja.description}</p>
                                <div className="puja-meta">
                                    <div className="puja-duration">⏱️ {puja.duration}</div>
                                    <div className="puja-price">Dakshina: {puja.price}</div>
                                </div>
                                <div className="puja-card-footer">
                                    <button
                                        className="book-puja-btn"
                                        onClick={() => handleBookPuja(puja)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pandit Selection Modal */}
            {showPanditSelection && selectedPuja && (
                <div className="pandit-selection-modal-overlay" onClick={closeModal}>
                    <div className="pandit-selection-modal" id="pandit-selection-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>✕</button>
                        <div className="modal-header">
                            <h2 className="modal-title">Select Pandit Ji</h2>
                            <p className="modal-subtitle">For {selectedPuja.name}</p>
                        </div>
                        <div className="pandits-selection-grid">
                            {pandits.map((pandit) => (
                                <div
                                    key={pandit.id}
                                    className={`pandit-selection-card ${selectedPandit?.id === pandit.id ? 'selected' : ''}`}
                                    onClick={() => handleSelectPandit(pandit)}
                                >
                                    <div className="pandit-selection-photo">
                                        <img src={pandit.photo} alt={pandit.name} />
                                        {selectedPandit?.id === pandit.id && (
                                            <div className="selected-checkmark">✓</div>
                                        )}
                                    </div>
                                    <div className="pandit-selection-info">
                                        <h3>{pandit.name}</h3>
                                        <p className="pandit-experience">📚 {pandit.experience} Exp</p>
                                    </div>
                                    <button
                                        className={`select-pandit-btn ${selectedPandit?.id === pandit.id ? 'selected' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSelectPandit(pandit);
                                        }}
                                    >
                                        {selectedPandit?.id === pandit.id ? 'Selected' : 'Select'}
                                    </button>
                                </div>
                            ))}
                        </div>
                        {selectedPandit && (
                            <div className="modal-footer">
                                <button className="proceed-to-booking-btn" onClick={proceedToBooking}>
                                    Proceed to Options →
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Note: Internal Booking Form Section Removed */}

            {/* Contact CTA */}
            <section className="contact-cta-section section">
                {/* ... (Kept simple) */}
            </section>
        </div>
    );
}
