'use client';

import { pandits } from '@/data/pandits';
import Link from 'next/link';
import '@/styles/ProgramDetail.css';

export default function VedicProgram() {
    const guru = pandits[0];

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Namaste! I am interested in learning वैदिक शास्त्र (Vedic Scriptures). Please provide more details.`);
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
                            <img src="/images/pandit_ji/vadic2.jpeg" alt="वैदिक शास्त्र" />
                        </div>
                        <div className="program-detail-intro">
                            <h1 className="program-detail-title">॥ वैदिक शास्त्र ॥</h1>
                            <p className="program-detail-subtitle">Vedic Scriptures</p>
                            <div className="program-detail-sloka">
                                <p className="sloka-line">वेदोऽखिलो धर्ममूलं स्मृतिशीले च तद्विदाम्।</p>
                                <p className="sloka-line">आचारश्चैव साधूनामात्मनस्तुष्टिरेव च॥</p>
                            </div>
                            <p className="program-detail-description">
                                वेद, उपनिषद और पुराणों का अध्ययन। संस्कृत श्लोकों का उच्चारण और अर्थ समझने की शिक्षा।
                                वेद सम्पूर्ण धर्म का मूल है और आध्यात्मिक ज्ञान का अक्षय भंडार।
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
                                    <div className="curriculum-icon">📖</div>
                                    <div className="curriculum-content">
                                        <h3>वेद मंत्रों का उच्चारण</h3>
                                        <p>ऋग्वेद, यजुर्वेद, सामवेद और अथर्ववेद के मंत्रों का शुद्ध उच्चारण। वैदिक स्वर और छंद।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🕉️</div>
                                    <div className="curriculum-content">
                                        <h3>उपनिषद और गीता का अध्ययन</h3>
                                        <p>प्रमुख उपनिषदों का गहन अध्ययन। भगवद्गीता के श्लोकों का अर्थ और व्याख्या।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">✍️</div>
                                    <div className="curriculum-content">
                                        <h3>संस्कृत भाषा की बुनियादी शिक्षा</h3>
                                        <p>संस्कृत व्याकरण और शब्दावली। देवनागरी लिपि में पढ़ना और लिखना।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">📜</div>
                                    <div className="curriculum-content">
                                        <h3>पुराण कथाओं का ज्ञान</h3>
                                        <p>18 महापुराणों की प्रमुख कथाएं। धार्मिक और नैतिक शिक्षाएं।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">⚖️</div>
                                    <div className="curriculum-content">
                                        <h3>धर्म शास्त्र और नीति</h3>
                                        <p>मनुस्मृति और अन्य धर्मशास्त्र। जीवन में धर्म का व्यावहारिक प्रयोग।</p>
                                    </div>
                                </div>
                                <div className="curriculum-item">
                                    <div className="curriculum-icon">🧘</div>
                                    <div className="curriculum-content">
                                        <h3>ध्यान और योग साधना</h3>
                                        <p>वैदिक ध्यान तकनीकें। योग सूत्र का अध्ययन। आध्यात्मिक साधना।</p>
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
                                    <span className="info-value">सप्ताहांत</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">स्तर</span>
                                    <span className="info-value">सभी स्तर</span>
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
                                    <li>वेद मंत्र उच्चारण</li>
                                    <li>उपनिषद ज्ञान</li>
                                    <li>गीता अध्ययन</li>
                                    <li>संस्कृत भाषा</li>
                                    <li>पुराण कथाएं</li>
                                    <li>योग और ध्यान</li>
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
