import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUpcomingEvents } from '../data/events';
import { getAllSlokas } from '../data/slokas';
import './Home.css';

const Home = () => {
    const [currentSlokaSet, setCurrentSlokaSet] = useState(0);
    const upcomingEvents = getUpcomingEvents().slice(0, 3);
    const slokas = getAllSlokas();
    const featuredSloka = slokas[0];

    // Beautiful Sanskrit Slokas
    const heroSlokas = [
        // Set 1
        [
            "वसुदेवसुतं देवं कंसचाणूरमर्दनम्",
            "देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्",
            "॥ श्री कृष्णाय नमः ॥"
        ],
        // Set 2
        [
            "कृष्णाय वासुदेवाय हरये परमात्मने",
            "प्रणत क्लेश नाशाय गोविन्दाय नमो नमः",
            "॥ ॐ नमो भगवते वासुदेवाय ॥"
        ],
        // Set 3
        [
            "राधा कृष्ण राधा कृष्ण कृष्ण कृष्ण राधा राधा",
            "राधा कृष्ण राधा कृष्ण कृष्ण कृष्ण राधा राधा",
            "॥ राधे राधे ॥"
        ],
        // Set 4
        [
            "हरे राम हरे राम राम राम हरे हरे",
            "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
            "॥ जय श्री राधे कृष्णा ॥"
        ]
    ];

    // Rotate sloka sets smoothly
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlokaSet((prev) => (prev + 1) % heroSlokas.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroSlokas.length]);

    return (
        <div className="home-page">
            {/* Hero Section - Divine & Elegant */}
            <section className="hero-section">
                <div className="hero-overlay"></div>

                {/* Floating Divine Elements - Unicode Symbols */}
                <div className="divine-particles">
                    <span className="particle particle-om">ॐ</span>
                    <span className="particle particle-lotus">🪷</span>
                    <span className="particle particle-om">ॐ</span>
                    <span className="particle particle-lotus">🪷</span>
                </div>

                <div className="hero-content container">
                    <h1 className="hero-title">भूतेश्वर मंदिर में आपका स्वागत है</h1>

                    {/* 3 Slokas with Smooth Transitions */}
                    <div className="hero-slokas-grid">
                        {heroSlokas[currentSlokaSet].map((sloka, index) => (
                            <p
                                key={`${currentSlokaSet}-${index}`}
                                className="hero-sloka"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {sloka}
                            </p>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <Link to="/book-pandit" className="btn btn-primary btn-large">
                            पंडित बुक करें
                        </Link>
                        <Link to="/daan" className="btn btn-secondary btn-large">
                            🙏 दान करें
                        </Link>
                    </div>
                </div>
            </section>

            {/* Radha Naam Kirtan Highlight */}
            <section className="kirtan-highlight section">
                <div className="container">
                    <h2 className="section-title kirtan-section-title">
                        <span className="title-ornament">✦</span>
                        Daily Radha Naam Kirtan
                        <span className="title-ornament">✦</span>
                    </h2>
                    <div className="kirtan-banner">
                        <div className="kirtan-banner-content">
                            <div className="kirtan-images">
                                <div className="kirtan-image-frame">
                                    <img src="/images/radha_krishna_hero_1765693499197.png" alt="Radha Krishna" className="kirtan-img" />
                                    <div className="kirtan-image-glow"></div>
                                </div>
                            </div>
                            <div className="kirtan-info">
                                <div className="kirtan-header">
                                    <h2 className="kirtan-title sanskrit-text">🎵 राधा नाम कीर्तन 🎵</h2>
                                    <div className="kirtan-subtitle-badge">
                                        <span className="badge-dot"></span>
                                        <span>Daily Evening Celebration</span>
                                    </div>
                                </div>

                                <div className="kirtan-timing-card">
                                    <div className="timing-icon">🕐</div>
                                    <div className="timing-content">
                                        <p className="timing-label">Every Evening</p>
                                        <p className="timing-main">6:25 PM</p>
                                        <p className="timing-sub">After Evening Aarti</p>
                                    </div>
                                </div>

                                <div className="kirtan-mantra">
                                    <div className="mantra-text sanskrit-text">
                                        {featuredSloka.sanskrit}
                                    </div>
                                    <div className="mantra-transliteration">
                                        {featuredSloka.transliteration}
                                    </div>
                                    <div className="mantra-translation">
                                        "{featuredSloka.translation}"
                                    </div>
                                </div>

                                <div className="kirtan-benefits">
                                    <div className="benefit-tag">
                                        <span className="benefit-icon">✨</span>
                                        <span>Divine Bliss</span>
                                    </div>
                                    <div className="benefit-tag">
                                        <span className="benefit-icon">🙏</span>
                                        <span>Inner Peace</span>
                                    </div>
                                    <div className="benefit-tag">
                                        <span className="benefit-icon">💫</span>
                                        <span>Spiritual Growth</span>
                                    </div>
                                </div>

                                <Link to="/kirtan" className="btn btn-primary kirtan-cta-btn">
                                    Learn More About Kirtan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - हमारी सेवाएं */}
            <section className="services-section section">
                <div className="container">
                    <h2 className="section-title services-title">
                        <span className="title-ornament">✦</span>
                        हमारी सेवाएं
                        <span className="title-ornament">✦</span>
                    </h2>
                    <p className="section-subtitle">मंदिर की विशेष सुविधाएं एवं सेवाएं</p>

                    <div className="services-grid">
                        <Link to="/book-pandit" className="service-card">
                            <div className="service-card-inner">
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">🙏</div>
                                    <div className="icon-glow"></div>
                                </div>
                                <h3 className="service-title">पंडित जी की व्यवस्था</h3>
                                <p className="service-description">सभी प्रकार की पूजा एवं संस्कार के लिए अनुभवी पंडित जी की व्यवस्था</p>
                                <div className="service-arrow">→</div>
                            </div>
                        </Link>

                        <Link to="/events" className="service-card">
                            <div className="service-card-inner">
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">📅</div>
                                    <div className="icon-glow"></div>
                                </div>
                                <h3 className="service-title">आगामी कार्यक्रम</h3>
                                <p className="service-description">मंदिर के आगामी पर्व एवं कार्यक्रमों की जानकारी</p>
                                <div className="service-arrow">→</div>
                            </div>
                        </Link>

                        <Link to="/daan" className="service-card">
                            <div className="service-card-inner">
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">💰</div>
                                    <div className="icon-glow"></div>
                                </div>
                                <h3 className="service-title">दान एवं सेवा</h3>
                                <p className="service-description">मंदिर के रखरखाव एवं सेवा कार्यों में योगदान दें</p>
                                <div className="service-arrow">→</div>
                            </div>
                        </Link>

                        <Link to="/learning" className="service-card">
                            <div className="service-card-inner">
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">📚</div>
                                    <div className="icon-glow"></div>
                                </div>
                                <h3 className="service-title">विद्या केंद्र</h3>
                                <p className="service-description">वैदिक संगीत एवं ज्योतिष की शिक्षा विशेषज्ञों से प्राप्त करें</p>
                                <div className="service-arrow">→</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section - आगामी आयोजन */}
            <section className="events-section section">
                <div className="container">
                    <h2 className="section-title events-title">
                        <span className="title-ornament">✦</span>
                        आगामी आयोजन
                        <span className="title-ornament">✦</span>
                    </h2>
                    <p className="section-subtitle">मंदिर के आगामी पर्व एवं विशेष कार्यक्रम</p>

                    <div className="events-grid">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="event-card">
                                <div className="event-card-inner">
                                    <div className="event-date-badge">
                                        <div className="date-icon">📅</div>
                                        <div className="date-text">{event.date}</div>
                                    </div>
                                    <div className="event-content">
                                        <h3 className="event-title">{event.title}</h3>
                                        <div className="event-time">
                                            <span className="time-icon">🕐</span>
                                            <span>{event.time}</span>
                                        </div>
                                        <p className="event-description">{event.description.substring(0, 100)}...</p>
                                    </div>
                                    <div className="event-divider"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="events-cta">
                        <Link to="/events" className="btn btn-primary events-btn">
                            सभी आयोजन देखें
                        </Link>
                    </div>
                </div>
            </section>

            {/* Temple Highlights Section - मंदिर की विशेषताएं */}
            <section className="highlights-section section">
                <div className="container">
                    <h2 className="section-title highlights-title">
                        <span className="title-ornament">✦</span>
                        मंदिर की विशेषताएं
                        <span className="title-ornament">✦</span>
                    </h2>
                    <p className="section-subtitle">हमारे मंदिर की प्रमुख सुविधाएं एवं सेवाएं</p>

                    <div className="highlights-grid">
                        <div className="highlight-card">
                            <div className="highlight-card-inner">
                                <div className="highlight-icon-wrapper">
                                    <div className="highlight-icon">🕉️</div>
                                    <div className="highlight-icon-bg"></div>
                                </div>
                                <h3 className="highlight-title">3 अनुभवी पंडित जी</h3>
                                <p className="highlight-description">विभिन्न संस्कार एवं पूजा विधियों में निपुण अनुभवी पंडित जी</p>
                                <div className="highlight-number">03</div>
                            </div>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-card-inner">
                                <div className="highlight-icon-wrapper">
                                    <div className="highlight-icon">📿</div>
                                    <div className="highlight-icon-bg"></div>
                                </div>
                                <h3 className="highlight-title">36+ पूजा विधियां</h3>
                                <p className="highlight-description">सभी अवसरों एवं आवश्यकताओं के लिए संपूर्ण पूजा विधियां</p>
                                <div className="highlight-number">36+</div>
                            </div>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-card-inner">
                                <div className="highlight-icon-wrapper">
                                    <div className="highlight-icon">🎓</div>
                                    <div className="highlight-icon-bg"></div>
                                </div>
                                <h3 className="highlight-title">शिक्षा कार्यक्रम</h3>
                                <p className="highlight-description">योग्य शिक्षकों द्वारा वैदिक संगीत एवं ज्योतिष की कक्षाएं</p>
                                <div className="highlight-number">∞</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divine Images Section */}
            <section className="divine-images section">
                <div className="container">
                    <div className="images-grid">
                        <div className="divine-image-card slide-in-left">
                            <img src="/images/radha-krishna-hero.png" alt="Radha Krishna" />
                            <p className="image-caption sanskrit-text">॥ राधे कृष्णा ॥</p>
                        </div>
                        <div className="divine-image-card slide-in-right">
                            <img src="/images/sita_ram_image_1765693517296.png" alt="Sita Ram" />
                            <p className="image-caption sanskrit-text">॥ सीता राम ॥</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
