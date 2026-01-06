'use client';

import { useState } from 'react';
import { pandits } from '@/data/pandits';
import { pujas, pujaCategories } from '@/data/pujas';
import PanditCard from '@/components/PanditCard';
import BookingForm from '@/components/BookingForm';
import { PujaCategoryKey } from '@/types';
import '@/styles/BookPandit.css';

export default function BookPandit() {
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
        // Scroll to pandit selection
        setTimeout(() => {
            document.getElementById('pandit-selection-modal')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    const handleSelectPandit = (pandit: any) => {
        setSelectedPandit(pandit);
        // Scroll to booking form
        setTimeout(() => {
            document.getElementById('booking-form-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const closeModal = () => {
        setShowPanditSelection(false);
        setSelectedPuja(null);
        setSelectedPandit(null);
    };

    return (
        <div className="book-pandit-page">
            {/* Divine Hero Section */}
            <section className="pandit-hero">
                <div className="pandit-hero-overlay"></div>
                <div className="floating-om-particles">
                    <span className="om-particle om-1">ॐ</span>
                    <span className="om-particle om-2">🕉️</span>
                    <span className="om-particle om-3">ॐ</span>
                    <span className="om-particle om-4">🕉️</span>
                </div>
                <div className="container pandit-hero-content">
                    <h1 className="pandit-hero-title">
                        <span className="title-ornament">✦</span>
                        पंडित जी की व्यवस्था
                        <span className="title-ornament">✦</span>
                    </h1>
                    <p className="pandit-hero-subtitle">Book Experienced Pandits for All Ceremonies</p>
                    <p className="pandit-hero-description">
                        हमारे अनुभवी एवं विद्वान ब्राह्मणों से अपनी पूजा, संस्कार एवं अनुष्ठान की व्यवस्था करें
                    </p>
                    <div className="hero-stats">

                        <div className="stat-item">
                            <div className="stat-number">36+</div>
                            <div className="stat-label">पूजा विधियां</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">संतुष्टि</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pandits Section - Enhanced */}
            <section className="pandits-section section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title pandits-title">
                            <span className="title-decoration">✦</span>
                            हमारे विद्वान पंडित जी
                            <span className="title-decoration">✦</span>
                        </h2>
                        <p className="section-subtitle">
                            विभिन्न पूजा विधियों, संस्कारों एवं अनुष्ठानों में निपुण एवं अनुभवी पंडित जी
                        </p>
                        <div className="section-description">
                            <p>
                                हमारे सभी पंडित जी वैदिक शास्त्रों में पारंगत हैं और विभिन्न प्रकार की पूजा विधियों का
                                गहन ज्ञान रखते हैं। वे आपके घर या मंदिर में आकर पूरी श्रद्धा और विधि-विधान से पूजा संपन्न करते हैं।
                            </p>
                        </div>
                    </div>
                    <div className="pandits-grid-enhanced">
                        {pandits.map((pandit) => (
                            <PanditCard key={pandit.id} pandit={pandit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section section">
                <div className="container">
                    <h2 className="section-title">
                        <span className="title-decoration">✦</span>
                        हमें क्यों चुनें
                        <span className="title-decoration">✦</span>
                    </h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🎓</div>
                            <h3>वैदिक विद्वान</h3>
                            <p>सभी पंडित जी वैदिक शास्त्रों में पारंगत एवं अनुभवी हैं</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⏰</div>
                            <h3>समय की पाबंदी</h3>
                            <p>निर्धारित समय पर पहुंचना और पूजा संपन्न करना हमारी प्राथमिकता है</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💰</div>
                            <h3>उचित दक्षिणा</h3>
                            <p>सभी सेवाओं के लिए पारदर्शी और उचित मूल्य निर्धारण</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📞</div>
                            <h3>आसान बुकिंग</h3>
                            <p>WhatsApp या फॉर्म के माध्यम से सरल और त्वरित बुकिंग प्रक्रिया</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🏠</div>
                            <h3>घर पर सेवा</h3>
                            <p>आपके घर या इच्छित स्थान पर पूजा की व्यवस्था</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🙏</div>
                            <h3>पूर्ण विधि-विधान</h3>
                            <p>सभी आवश्यक सामग्री और विधि-विधान के साथ पूजा संपन्न</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pujas Section - Enhanced */}
            <section className="pujas-section section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title pujas-title">
                            <span className="title-decoration">✦</span>
                            उपलब्ध पूजा विधियां
                            <span className="title-decoration">✦</span>
                        </h2>
                        <p className="section-subtitle">
                            सभी अवसरों, त्योहारों एवं संस्कारों के लिए संपूर्ण पूजा विधियां
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="puja-filters">
                        <div className="search-wrapper">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="🔍 पूजा खोजें... (उदाहरण: गृह प्रवेश, विवाह)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="category-filters">
                            <button
                                className={`filter-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('ALL')}
                            >
                                <span className="filter-icon">🕉️</span>
                                सभी पूजाएं
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
                                    <div className="puja-duration">
                                        <span className="meta-icon">⏱️</span>
                                        <span>{puja.duration}</span>
                                    </div>
                                    <div className="puja-price">
                                        <span className="price-label">दक्षिणा:</span>
                                        <span className="price-value">{puja.price}</span>
                                    </div>
                                </div>
                                <div className="puja-card-footer">
                                    <button
                                        className="book-puja-btn"
                                        onClick={() => handleBookPuja(puja)}
                                    >
                                        अभी बुक करें
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPujas.length === 0 && (
                        <div className="no-results">
                            <div className="no-results-icon">🔍</div>
                            <p>कोई पूजा नहीं मिली। कृपया अन्य खोज शब्द या श्रेणी चुनें।</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Pandit Selection Modal */}
            {showPanditSelection && selectedPuja && (
                <div className="pandit-selection-modal-overlay" onClick={closeModal}>
                    <div className="pandit-selection-modal" id="pandit-selection-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>✕</button>
                        <div className="modal-header">
                            <h2 className="modal-title">
                                <span className="title-decoration">✦</span>
                                पंडित जी का चयन करें
                                <span className="title-decoration">✦</span>
                            </h2>
                            <p className="modal-subtitle">
                                {selectedPuja.name} के लिए अपने पसंदीदा पंडित जी चुनें
                            </p>
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
                                        <p className="pandit-specialization">{pandit.specialization}</p>
                                        <p className="pandit-experience">
                                            <span className="icon">📚</span>
                                            {pandit.experience} अनुभव
                                        </p>
                                        <div className="pandit-languages">
                                            {pandit.languages.map((lang, i) => (
                                                <span key={i} className="language-tag">{lang}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        className={`select-pandit-btn ${selectedPandit?.id === pandit.id ? 'selected' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSelectPandit(pandit);
                                        }}
                                    >
                                        {selectedPandit?.id === pandit.id ? '✓ चयनित' : 'चुनें'}
                                    </button>
                                </div>
                            ))}
                        </div>
                        {selectedPandit && (
                            <div className="modal-footer">
                                <button className="proceed-to-booking-btn" onClick={() => {
                                    closeModal();
                                    setTimeout(() => {
                                        document.getElementById('booking-form-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }}>
                                    आगे बढ़ें और बुकिंग पूर्ण करें
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Booking Form Section */}
            <section className="booking-section section" id="booking-form-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title booking-title">
                            <span className="title-decoration">✦</span>
                            अपनी पूजा बुक करें
                            <span className="title-decoration">✦</span>
                        </h2>
                        <p className="section-subtitle">
                            पूजा की व्यवस्था के लिए नीचे दिया गया फॉर्म भरें या WhatsApp पर संपर्क करें
                        </p>
                    </div>
                    <div className="booking-container">
                        <BookingForm
                            selectedPuja={selectedPuja?.id.toString()}
                            selectedPandit={selectedPandit?.id}
                        />
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="contact-cta-section section">
                <div className="container">
                    <div className="cta-box-pandit">
                        <div className="cta-icon">📞</div>
                        <h2>तुरंत सहायता चाहिए?</h2>
                        <p>हमसे WhatsApp पर संपर्क करें और तुरंत पंडित जी बुक करें</p>
                        <a
                            href="https://wa.me/918750929004?text=नमस्ते! मुझे पंडित जी बुक करना है।"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-cta-btn"
                        >
                            <span className="whatsapp-icon">📱</span>
                            WhatsApp पर संपर्क करें
                        </a>
                        <p className="contact-number">+91 8750929004</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
