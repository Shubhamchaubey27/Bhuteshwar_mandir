'use client';

import { pandits } from '@/data/pandits';
import Link from 'next/link';
import '@/styles/ProgramDetail.css';

export default function MusicProgram() {
    const guru = pandits.find(p => p.expertise.includes('Sangeet (Music)')) || pandits[0];

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Namaste! I am interested in learning संगीत शिक्षा (Music Education). Please provide more details.`);
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
                            <img src="/images/pandit_ji/singing.jpeg" alt="संगीत शिक्षा" />
                        </div>
                        <div className="program-detail-intro">
                            <h1 className="program-detail-title">॥ संगीत शिक्षा ॥</h1>
                            <p className="program-detail-subtitle">Vedic Music Education</p>
                            <div className="program-detail-sloka">
                                <p className="sloka-line">संगीतं सर्वविद्यानां मुख्यं तत्त्वं प्रकीर्तितम्।</p>
                                <p className="sloka-line">नादब्रह्म परं तत्त्वं संगीते परमं पदम्॥</p>
                            </div>
                            <p className="program-detail-description">
                                वैदिक संगीत और भजन गायन की पारंपरिक शिक्षा। हारमोनियम, ढोलक और तबला जैसे वाद्य यंत्रों में प्रशिक्षण।
                                संगीत केवल कला नहीं, बल्कि आध्यात्मिक साधना का एक माध्यम है।
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
                                    <div className="curriculum-icon">🎵</div>
                                    <div className="curriculum-content">
                                        <h3>भजन गायन और भक्ति संगीत</h3>
                                        <p>पारंपरिक भजनों और भक्ति गीतों की गायन कला सीखें। स्वर, लय और भाव का सही संयोजन।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🎹</div>
                                    <div className="curriculum-content">
                                        <h3>हारमोनियम वादन तकनीक</h3>
                                        <p>हारमोनियम बजाने की बुनियादी से उन्नत तकनीकें। राग, स्वर और तालों का व्यावहारिक ज्ञान।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🥁</div>
                                    <div className="curriculum-content">
                                        <h3>ढोलक और तबला लय</h3>
                                        <p>ताल वाद्यों में प्रशिक्षण। विभिन्न तालों की पहचान और वादन कला।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🎼</div>
                                    <div className="curriculum-content">
                                        <h3>राग और ताल का ज्ञान</h3>
                                        <p>भारतीय शास्त्रीय संगीत के मूल तत्व। विभिन्न रागों की पहचान और उनका प्रयोग।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🕉️</div>
                                    <div className="curriculum-content">
                                        <h3>वैदिक मंत्र उच्चारण</h3>
                                        <p>वैदिक मंत्रों का शुद्ध उच्चारण और स्वर। मंत्र शक्ति का सही प्रयोग।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🎤</div>
                                    <div className="curriculum-content">
                                        <h3>स्वर साधना और श्वास नियंत्रण</h3>
                                        <p>स्वर को सुधारने की तकनीकें। श्वास नियंत्रण और आवाज़ की गुणवत्ता बढ़ाना।</p>
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
                                    <span className="info-value">3-6 माह (लचीला)</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">समय</span>
                                    <span className="info-value">सप्ताहांत या सायंकाल</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">स्तर</span>
                                    <span className="info-value">प्रारंभिक से उन्नत</span>
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
                                    <li>पारंपरिक भजन गायन</li>
                                    <li>वाद्य यंत्र वादन</li>
                                    <li>राग और ताल की समझ</li>
                                    <li>मंत्र उच्चारण</li>
                                    <li>स्वर साधना</li>
                                    <li>आध्यात्मिक संगीत</li>
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
