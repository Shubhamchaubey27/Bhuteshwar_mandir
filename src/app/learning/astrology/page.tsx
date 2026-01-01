'use client';

import { pandits } from '@/data/pandits';
import Link from 'next/link';
import '@/styles/ProgramDetail.css';

export default function AstrologyProgram() {
    const guru = pandits.find(p => p.expertise.includes('Jyotish (Astrology)')) || pandits[0];

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Namaste! I am interested in learning ज्योतिष शास्त्र (Vedic Astrology). Please provide more details.`);
        window.open(`https://wa.me/${guru.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <div className="program-detail-page">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <Link href="/learning">← पाठ्यक्रम पर वापस जाएं</Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="program-detail-hero">
                <div className="container">
                    <div className="program-detail-hero-content">
                        <div className="program-detail-image">
                            <img src="/images/astro.jpeg" alt="ज्योतिष शास्त्र" />
                        </div>
                        <div className="program-detail-intro">
                            <h1 className="program-detail-title">॥ ज्योतिष शास्त्र ॥</h1>
                            <p className="program-detail-subtitle">Vedic Astrology</p>
                            <div className="program-detail-sloka">
                                <p className="sloka-line">ज्योतिषां चक्षुराख्यातं यत्र दृश्यं प्रकाशते।</p>
                                <p className="sloka-line">वेदस्य नेत्रं ज्योतिषं तस्मात्तद्वेदितव्यम्॥</p>
                            </div>
                            <p className="program-detail-description">
                                प्राचीन भारतीय ज्योतिष विज्ञान की गहन शिक्षा। जन्म कुंडली, ग्रह स्थिति और नक्षत्रों का विश्लेषण सीखें।
                                ज्योतिष वेदों का नेत्र है, जो जीवन के रहस्यों को प्रकाशित करता है।
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="program-detail-content">
                <div className="container">
                    <div className="detail-grid">
                        {/* Curriculum */}
                        <div className="detail-section">
                            <h2 className="detail-section-title">पाठ्यक्रम विवरण</h2>
                            <div className="curriculum-list">
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">📚</div>
                                    <div className="curriculum-content">
                                        <h3>वैदिक ज्योतिष के मूल सिद्धांत</h3>
                                        <p>ज्योतिष शास्त्र की बुनियादी अवधारणाएं। राशि, ग्रह, भाव और नक्षत्रों का परिचय।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">📊</div>
                                    <div className="curriculum-content">
                                        <h3>कुंडली निर्माण और विश्लेषण</h3>
                                        <p>जन्म कुंडली बनाने की विधि। कुंडली का सही विश्लेषण और फलादेश।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🌟</div>
                                    <div className="curriculum-content">
                                        <h3>ग्रह, भाव और नक्षत्र ज्ञान</h3>
                                        <p>नौ ग्रहों का स्वभाव और प्रभाव। बारह भावों का महत्व। 27 नक्षत्रों की विशेषताएं।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">⏰</div>
                                    <div className="curriculum-content">
                                        <h3>दशा प्रणाली और ग्रह काल</h3>
                                        <p>विम्शोत्तरी दशा प्रणाली। महादशा, अंतर्दशा और प्रत्यंतर दशा का ज्ञान।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">💎</div>
                                    <div className="curriculum-content">
                                        <h3>उपाय और रत्न विधान</h3>
                                        <p>ज्योतिषीय उपाय। रत्न, मंत्र, यंत्र और दान का विधान।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">📅</div>
                                    <div className="curriculum-content">
                                        <h3>मुहूर्त शास्त्र</h3>
                                        <p>शुभ मुहूर्त का चयन। विवाह, गृह प्रवेश और अन्य संस्कारों के लिए उत्तम समय।</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Program Info Sidebar */}
                        <div className="detail-sidebar">
                            <div className="info-card">
                                <h3 className="info-card-title">पाठ्यक्रम जानकारी</h3>
                                <div className="info-item">
                                    <span className="info-label">अवधि</span>
                                    <span className="info-value">6-12 माह</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">समय</span>
                                    <span className="info-value">लचीला समय</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">स्तर</span>
                                    <span className="info-value">प्रारंभिक से मध्यम</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">भाषा</span>
                                    <span className="info-value">हिंदी / संस्कृत</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">प्रमाणपत्र</span>
                                    <span className="info-value">उपलब्ध</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <h3 className="info-card-title">आप क्या सीखेंगे</h3>
                                <ul className="benefits-list">
                                    <li>कुंडली निर्माण</li>
                                    <li>ग्रह विश्लेषण</li>
                                    <li>भविष्यफल</li>
                                    <li>दशा गणना</li>
                                    <li>उपाय विधान</li>
                                    <li>मुहूर्त चयन</li>
                                </ul>
                            </div>

                            <button onClick={handleWhatsApp} className="btn-enroll">
                                अभी पंजीकरण करें
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
