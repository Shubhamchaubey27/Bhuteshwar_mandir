import { getAllSlokas } from '../data/slokas';
import './Kirtan.css';

const Kirtan = () => {
    const slokas = getAllSlokas();

    return (
        <div className="kirtan-page">
            {/* Hero Section */}
            <section className="kirtan-hero">
                <div className="kirtan-hero-overlay"></div>
                <div className="container kirtan-hero-content">
                    <h1 className="sanskrit-text glow">राधा नाम कीर्तन</h1>
                    <h2>Daily Radha Naam Kirtan</h2>
                    <div className="kirtan-timing-hero">
                        <p className="timing-text">Every Evening</p>
                        <p className="timing-main">6:25 PM</p>
                        <p className="timing-sub">(After Evening Aarti)</p>
                    </div>
                    <p className="kirtan-invite">All devotees are cordially invited to join us in this divine celebration!</p>
                </div>
            </section>

            {/* Rotating Kirtan Images Section */}
            <section className="section rotating-kirtan-section">
                <div className="container">
                    <h2 className="section-title divine-title">
                        <span className="title-decoration">✦</span>
                        Divine Kirtan Celebration
                        <span className="title-decoration">✦</span>
                    </h2>
                    <div className="rotating-container">
                        <div className="rotating-circle">
                            <div className="rotating-image img-1">
                                <img src="/images/kirtan_devotees.png" alt="Kirtan Devotees" />
                            </div>
                            <div className="rotating-image img-2">
                                <img src="/images/kirtan_instruments.png" alt="Kirtan Instruments" />
                            </div>
                            <div className="rotating-image img-3">
                                <img src="/images/bhajan_celebration.png" alt="Bhajan Celebration" />
                            </div>
                            <div className="rotating-image img-4">
                                <img src="/images/harmonium_kirtan.png" alt="Harmonium Kirtan" />
                            </div>
                            <div className="rotating-image img-5">
                                <img src="/images/group_kirtan.png" alt="Group Kirtan" />
                            </div>
                            <div className="rotating-image img-6">
                                <img src="/images/kirtan_celebration_1765693534114.png" alt="Kirtan" />
                            </div>
                        </div>
                        <div className="center-image">
                            <div className="center-glow"></div>
                            <img src="/images/radha-krishna.png" alt="Radha Krishna" />
                            <div className="center-text sanskrit-text">॥ राधे कृष्णा ॥</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Kirtan */}
            <section className="section about-kirtan-section">
                <div className="container">
                    <h2 className="section-title divine-title">
                        <span className="title-decoration">✦</span>
                        About Radha Naam Kirtan
                        <span className="title-decoration">✦</span>
                    </h2>
                    <div className="kirtan-about">
                        <div className="kirtan-image-container">
                            <div className="image-frame">
                                <img src="/images/kirtan_celebration_1765693534114.png" alt="Kirtan Celebration" className="kirtan-image" />
                                <div className="image-glow"></div>
                            </div>
                        </div>
                        <div className="about-content">
                            <div className="content-wrapper">
                                <div className="divine-quote sanskrit-text">
                                    "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे"
                                </div>
                                <p className="intro-text">
                                    Radha Naam Kirtan is a <span className="highlight">divine practice</span> of chanting and singing the holy names of Radha and Krishna.
                                    It is a powerful spiritual practice that purifies the mind, brings peace to the heart, and connects
                                    us with the divine consciousness.
                                </p>
                                <div className="timing-info">
                                    <div className="timing-badge">
                                        <span className="badge-icon">🕐</span>
                                        <div className="badge-content">
                                            <span className="badge-label">Daily Kirtan</span>
                                            <span className="badge-time">6:25 PM</span>
                                            <span className="badge-note">After Evening Aarti</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="description-text">
                                    At Bhuteshwar Mandir, this sacred gathering brings together devotees in a joyful celebration of divine love
                                    through music, chanting, and devotion. Experience the transformative power of collective chanting as voices unite
                                    in harmony, creating an atmosphere of pure spiritual bliss.
                                </p>
                                <div className="divine-benefits">
                                    <div className="benefit-item">
                                        <span className="benefit-icon">✨</span>
                                        <span>Purifies the Mind</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="benefit-icon">🙏</span>
                                        <span>Brings Inner Peace</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="benefit-icon">💫</span>
                                        <span>Divine Connection</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elegant Benefits Section - Redesigned */}
            <section className="section elegant-benefits-section">
                <div className="container">
                    <h2 className="section-title divine-title">
                        <span className="title-decoration">✦</span>
                        Benefits of Naam Kirtan
                        <span className="title-decoration">✦</span>
                    </h2>
                    <p className="benefits-intro">
                        Ancient Vedic scriptures describe the immense spiritual benefits of chanting the holy names
                    </p>

                    <div className="elegant-benefits-grid">
                        {slokas.map((sloka, index) => (
                            <div key={sloka.id} className={`elegant-benefit-card benefit-card-${index + 1}`}>
                                <div className="benefit-card-header">
                                    <div className="benefit-number">{index + 1}</div>
                                    <div className="benefit-icon-large">🕉️</div>
                                </div>
                                <div className="benefit-card-content">
                                    <div className="sloka-sanskrit-elegant sanskrit-text">
                                        {sloka.sanskrit}
                                    </div>
                                    <div className="sloka-transliteration-elegant">
                                        {sloka.transliteration}
                                    </div>
                                    <div className="sloka-translation-elegant">
                                        <span className="quote-mark">"</span>
                                        {sloka.translation}
                                        <span className="quote-mark">"</span>
                                    </div>
                                    <div className="sloka-benefit-elegant">
                                        <div className="benefit-label">Divine Benefit</div>
                                        <div className="benefit-text">{sloka.benefit}</div>
                                    </div>
                                </div>
                                <div className="benefit-card-decoration"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divine Radha Krishna Section */}
            <section className="section radha-krishna-section">
                <div className="container">
                    <div className="radha-krishna-content">
                        <div className="rk-image-container">
                            <div className="rk-glow-effect"></div>
                            <img src="/images/radha-krishna.png" alt="Radha Krishna" className="rk-main-image" />
                        </div>
                        <div className="rk-text-content">
                            <h2 className="sanskrit-text rk-title">॥ राधे कृष्णा ॥</h2>
                            <div className="rk-mantra">
                                <p className="sanskrit-text">हरे कृष्ण हरे कृष्ण</p>
                                <p className="sanskrit-text">कृष्ण कृष्ण हरे हरे</p>
                                <p className="sanskrit-text">हरे राम हरे राम</p>
                                <p className="sanskrit-text">राम राम हरे हरे</p>
                            </div>
                            <div className="rk-description">
                                <p>The divine love of Radha and Krishna represents the eternal bond between the soul and the Supreme. Through kirtan, we celebrate this sacred relationship and invite divine grace into our lives.</p>
                                <p>Join us in chanting the holy names and experience the transformative power of devotional music.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Participate */}
            <section className="section participation-section">
                <div className="container">
                    <h2 className="section-title divine-title">
                        <span className="title-decoration">✦</span>
                        How to Participate
                        <span className="title-decoration">✦</span>
                    </h2>
                    <div className="participation-grid">
                        <div className="participation-card card">
                            <div className="participation-icon">🕐</div>
                            <h3>Arrive on Time</h3>
                            <p>Come to the temple by 6:25 PM. The kirtan starts immediately after evening aarti.</p>
                        </div>

                        <div className="participation-card card">
                            <div className="participation-icon">🙏</div>
                            <h3>Join the Chanting</h3>
                            <p>Participate in the collective chanting of holy names. No prior experience needed!</p>
                        </div>

                        <div className="participation-card card">
                            <div className="participation-icon">🎵</div>
                            <h3>Feel the Divine Energy</h3>
                            <p>Immerse yourself in the devotional atmosphere and experience spiritual bliss.</p>
                        </div>

                        <div className="participation-card card">
                            <div className="participation-icon">🍬</div>
                            <h3>Receive Prasad</h3>
                            <p>After kirtan, receive blessed prasad as a divine gift.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divine Deities Section - Alternating Layout */}
            <section className="section divine-alternating-section">
                <div className="container">
                    <h2 className="section-title divine-title">
                        <span className="title-decoration">✦</span>
                        दिव्य दर्शन
                        <span className="title-decoration">✦</span>
                    </h2>

                    {/* Radha Krishna - Image Left */}
                    <div className="deity-row">
                        <div className="deity-image-col">
                            <div className="deity-img-wrapper">
                                <img src="/images/radha_krishna_divine.png" alt="Radha Krishna" />
                                <div className="img-glow"></div>
                            </div>
                        </div>
                        <div className="deity-sloka-col">
                            <h3 className="deity-heading">॥ श्री राधा कृष्ण ॥</h3>
                            <div className="sloka-box">
                                <p className="sloka-sanskrit">वसुदेवसुतं देवं कंसचाणूरमर्दनम्।</p>
                                <p className="sloka-sanskrit">देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्॥</p>
                            </div>
                            <p className="sloka-meaning">
                                वसुदेव के पुत्र, कंस और चाणूर के संहारक, देवकी के परम आनंद,
                                जगद्गुरु श्री कृष्ण को मैं प्रणाम करता हूँ।
                            </p>
                            <div className="divine-symbols-row">
                                <span className="symbol-icon">🦚</span>
                                <span className="symbol-icon">🪷</span>
                                <span className="symbol-icon">🪈</span>
                            </div>
                        </div>
                    </div>

                    {/* Radha Krishna Hero - Image Right */}
                    <div className="deity-row reverse">
                        <div className="deity-sloka-col">
                            <h3 className="deity-heading">॥ राधे कृष्णा ॥</h3>
                            <div className="sloka-box">
                                <p className="sloka-sanskrit">हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।</p>
                                <p className="sloka-sanskrit">हरे राम हरे राम राम राम हरे हरे॥</p>
                            </div>
                            <p className="sloka-meaning">
                                यह महामंत्र कलियुग में मोक्ष का सबसे सरल और प्रभावशाली मार्ग है।
                                इसके जाप से हृदय शुद्ध होता है और भगवान की कृपा प्राप्त होती है।
                            </p>
                            <div className="divine-symbols-row">
                                <span className="symbol-icon">🌟</span>
                                <span className="symbol-icon">💫</span>
                                <span className="symbol-icon">✨</span>
                            </div>
                        </div>
                        <div className="deity-image-col">
                            <div className="deity-img-wrapper">
                                <img src="/images/radha_krishna_hero_1765693499197.png" alt="Radha Krishna" />
                                <div className="img-glow"></div>
                            </div>
                        </div>
                    </div>

                    {/* Sita Ram Hanuman - Image Left */}
                    <div className="deity-row">
                        <div className="deity-image-col">
                            <div className="deity-img-wrapper">
                                <img src="/images/sita_ram_hanuman.png" alt="Sita Ram Hanuman" />
                                <div className="img-glow"></div>
                            </div>
                        </div>
                        <div className="deity-sloka-col">
                            <h3 className="deity-heading">॥ श्री सीता राम हनुमान ॥</h3>
                            <div className="sloka-box">
                                <p className="sloka-sanskrit">मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।</p>
                                <p className="sloka-sanskrit">वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥</p>
                            </div>
                            <p className="sloka-meaning">
                                मन के समान वेगवान, पवन के समान तीव्र, जितेन्द्रिय, बुद्धिमानों में श्रेष्ठ,
                                पवनपुत्र, वानरों के मुख्य, श्री राम के दूत हनुमान जी की शरण लेता हूँ।
                            </p>
                            <div className="divine-symbols-row">
                                <span className="symbol-icon">🏹</span>
                                <span className="symbol-icon">💪</span>
                                <span className="symbol-icon">🙏</span>
                            </div>
                        </div>
                    </div>

                    {/* Sita Ram - Image Right */}
                    <div className="deity-row reverse">
                        <div className="deity-sloka-col">
                            <h3 className="deity-heading">॥ जय सीता राम ॥</h3>
                            <div className="sloka-box">
                                <p className="sloka-sanskrit">श्री राम जय राम जय जय राम।</p>
                                <p className="sloka-sanskrit">श्री राम जय राम जय जय राम॥</p>
                            </div>
                            <p className="sloka-meaning">
                                मर्यादा पुरुषोत्तम श्री राम धर्म, सत्य और न्याय के प्रतीक हैं।
                                माता सीता के साथ उनका दिव्य जीवन आदर्श पारिवारिक जीवन का उदाहरण है।
                            </p>
                            <div className="divine-symbols-row">
                                <span className="symbol-icon">👑</span>
                                <span className="symbol-icon">🪷</span>
                                <span className="symbol-icon">🌺</span>
                            </div>
                        </div>
                        <div className="deity-image-col">
                            <div className="deity-img-wrapper">
                                <img src="/images/sita_ram_image_1765693517296.png" alt="Sita Ram" />
                                <div className="img-glow"></div>
                            </div>
                        </div>
                    </div>

                    {/* Gauri Shankar Ganesh - Image Left */}
                    <div className="deity-row">
                        <div className="deity-image-col">
                            <div className="deity-img-wrapper">
                                <img src="/images/gauri_shankar_ganesh.png" alt="Gauri Shankar Ganesh" />
                                <div className="img-glow"></div>
                            </div>
                        </div>
                        <div className="deity-sloka-col">
                            <h3 className="deity-heading">॥ श्री गौरी शंकर गणेश ॥</h3>
                            <div className="sloka-box">
                                <p className="sloka-sanskrit">ॐ नमः शिवाय शान्ताय कारणत्रयहेतवे।</p>
                                <p className="sloka-sanskrit">निवेदयामि चात्मानं त्वं गतिः परमेश्वर॥</p>
                            </div>
                            <p className="sloka-meaning">
                                शांत स्वरूप, सृष्टि-स्थिति-प्रलय के कारण भगवान शिव को नमन।
                                माता पार्वती और गणेश जी के साथ यह दिव्य परिवार सम्पूर्ण जगत का कल्याण करता है।
                            </p>
                            <div className="divine-symbols-row">
                                <span className="symbol-icon">🔱</span>
                                <span className="symbol-icon">🌙</span>
                                <span className="symbol-icon">🐘</span>
                            </div>
                        </div>
                    </div>

                    {/* Radha Krishna Closeup - Image Right */}
                    <div className="deity-row reverse">
                        <div className="deity-sloka-col">
                            <h3 className="deity-heading">॥ दिव्य प्रेम ॥</h3>
                            <div className="sloka-box">
                                <p className="sloka-sanskrit">राधे राधे राधे राधे राधे राधे राधे राधे।</p>
                                <p className="sloka-sanskrit">कृष्ण कृष्ण कृष्ण कृष्ण कृष्ण कृष्ण कृष्ण कृष्ण॥</p>
                            </div>
                            <p className="sloka-meaning">
                                राधा और कृष्ण का प्रेम दिव्य भक्ति का सर्वोच्च रूप है।
                                यह प्रेम भौतिक नहीं, बल्कि आत्मा और परमात्मा का मिलन है।
                            </p>
                            <div className="divine-symbols-row">
                                <span className="symbol-icon">💖</span>
                                <span className="symbol-icon">🌹</span>
                                <span className="symbol-icon">✨</span>
                            </div>
                        </div>
                        <div className="deity-image-col">
                            <div className="deity-img-wrapper">
                                <img src="/images/radha_krishna_closeup.png" alt="Divine Love" />
                                <div className="img-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section kirtan-cta">
                <div className="container">
                    <div className="cta-box glow">
                        <h2>Join Us for Kirtan!</h2>
                        <p className="sanskrit-text">॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥</p>
                        <p>Experience the divine joy of Radha Naam Kirtan</p>
                        <div className="cta-details">
                            <p><strong>When:</strong> Every Evening at 6:25 PM</p>
                            <p><strong>Where:</strong> Bhuteshwar Mandir Main Hall</p>
                            <p><strong>Duration:</strong> 45-60 minutes</p>
                        </div>
                        <p className="cta-note">Everyone is welcome! No registration required.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kirtan;
