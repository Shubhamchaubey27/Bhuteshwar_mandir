'use client';

import { pandits } from '@/data/pandits';
import Link from 'next/link';
import '@/styles/ProgramDetail.css';

export default function GuruDetail() {
    const guru = pandits.find(p => p.expertise.includes('Sangeet (Music)')) || pandits[0];

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Namaste! I am interested in learning from ${guru.name}. Please provide more details.`);
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
                            <img src={guru.photo} alt={guru.name} />
                        </div>
                        <div className="program-detail-intro">
                            <h1 className="program-detail-title">{guru.name}</h1>
                            <p className="program-detail-subtitle">{guru.specialization}</p>
                            <div className="program-detail-sloka">
                                <p className="sloka-line">गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।</p>
                                <p className="sloka-line">गुरुः साक्षात् परं ब्रह्म तस्मै श्री गुरवे नमः॥</p>
                            </div>
                            <p className="program-detail-description">
                                {guru.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guru Details */}
            <section className="program-detail-content">
                <div className="container">
                    <div className="detail-grid">
                        {/* Expertise Section */}
                        <div className="detail-section">
                            <h2 className="detail-section-title">विशेषज्ञता क्षेत्र</h2>
                            <div className="curriculum-list">
                                {guru.expertise.map((exp, index) => (
                                    <div key={index} className="curriculum-item">
                                        <div className="curriculum-icon">
                                            {index === 0 ? '🎵' : index === 1 ? '📿' : index === 2 ? '📖' : index === 3 ? '🎹' : '⭐'}
                                        </div>
                                        <div className="curriculum-content">
                                            <h3>{exp}</h3>
                                            <p>
                                                {exp.includes('Kirtan') && 'भक्ति संगीत और कीर्तन में विशेष प्रवीणता। राधा नाम कीर्तन की पारंपरिक शैली।'}
                                                {exp.includes('Chalisa') && 'हनुमान चालीसा का शुद्ध उच्चारण और भावपूर्ण गायन।'}
                                                {exp.includes('Ramayan') && 'अखंड रामायण पाठ का आयोजन और संचालन। तुलसीदास रचित रामचरितमानस का गहन ज्ञान।'}
                                                {exp.includes('Music') && 'वैदिक संगीत की शिक्षा। हारमोनियम, ढोलक और तबला में प्रशिक्षण।'}
                                                {exp.includes('Astrology') && 'ज्योतिष शास्त्र की शिक्षा। कुंडली विश्लेषण और भविष्यफल।'}
                                                {!exp.includes('Kirtan') && !exp.includes('Chalisa') && !exp.includes('Ramayan') && !exp.includes('Music') && !exp.includes('Astrology') && 'वैदिक परंपरा और धार्मिक अनुष्ठानों में विशेषज्ञता।'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="detail-section" style={{ marginTop: '50px' }}>
                                <h2 className="detail-section-title">शिक्षण पद्धति</h2>
                                <div className="curriculum-list">
                                    <div className="curriculum-item">
                                        <div className="curriculum-icon">📚</div>
                                        <div className="curriculum-content">
                                            <h3>पारंपरिक गुरु-शिष्य परंपरा</h3>
                                            <p>प्राचीन भारतीय गुरुकुल पद्धति के अनुसार व्यक्तिगत मार्गदर्शन और शिक्षा।</p>
                                        </div>
                                    </div>
                                    <div className="curriculum-item">
                                        <div className="curriculum-icon">🎯</div>
                                        <div className="curriculum-content">
                                            <h3>व्यावहारिक प्रशिक्षण</h3>
                                            <p>सिद्धांत के साथ-साथ व्यावहारिक अभ्यास पर विशेष जोर। नियमित अभ्यास सत्र।</p>
                                        </div>
                                    </div>
                                    <div className="curriculum-item">
                                        <div className="curriculum-icon">💡</div>
                                        <div className="curriculum-content">
                                            <h3>आध्यात्मिक मार्गदर्शन</h3>
                                            <p>केवल तकनीकी शिक्षा नहीं, बल्कि आध्यात्मिक विकास और जीवन मूल्यों की शिक्षा।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guru Info Sidebar */}
                        <div className="detail-sidebar">
                            <div className="info-card">
                                <h3 className="info-card-title">गुरुजी की जानकारी</h3>
                                <div className="info-item">
                                    <span className="info-label">अनुभव</span>
                                    <span className="info-value">{guru.experience}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">विशेषज्ञता</span>
                                    <span className="info-value">{guru.specialization}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">भाषाएं</span>
                                    <span className="info-value">{guru.languages.join(', ')}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">कुल क्षेत्र</span>
                                    <span className="info-value">{guru.expertise.length}+ विषय</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <h3 className="info-card-title">आप क्या सीखेंगे</h3>
                                <ul className="benefits-list">
                                    {guru.expertise.map((exp, index) => (
                                        <li key={index}>{exp}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3 className="info-card-title">शिक्षण विवरण</h3>
                                <ul className="benefits-list">
                                    <li>व्यक्तिगत ध्यान</li>
                                    <li>लचीला समय</li>
                                    <li>ऑनलाइन/ऑफलाइन</li>
                                    <li>प्रमाणपत्र उपलब्ध</li>
                                    <li>जीवनभर मार्गदर्शन</li>
                                </ul>
                            </div>

                            <button onClick={handleWhatsApp} className="btn-enroll">
                                गुरुजी से संपर्क करें
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
