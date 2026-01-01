'use client';

import { pandits } from '@/data/pandits';
import PanditCard from '@/components/PanditCard';
import Link from 'next/link';
import '@/styles/Learning.css';

export default function Learning() {
    // Get one pandit who teaches (preferably music or general teaching)
    const guru = pandits.find(p => p.expertise.includes('Sangeet (Music)')) || pandits[0];

    const programs = [
        {
            id: 'music',
            title: '॥ संगीत शिक्षा ॥',
            subtitle: 'Vedic Music Education',
            image: '/images/music_learning.png',
            sloka: 'संगीतं सर्वविद्यानां मुख्यं तत्त्वं प्रकीर्तितम्।',
            description: 'वैदिक संगीत और भजन गायन की पारंपरिक शिक्षा। हारमोनियम, ढोलक और तबला जैसे वाद्य यंत्रों में प्रशिक्षण।',
            duration: '3-6 माह',
            level: 'प्रारंभिक से उन्नत'
        },
        {
            id: 'astrology',
            title: '॥ ज्योतिष शास्त्र ॥',
            subtitle: 'Vedic Astrology',
            image: '/images/astronomy_learning.png',
            sloka: 'ज्योतिषां चक्षुराख्यातं यत्र दृश्यं प्रकाशते।',
            description: 'प्राचीन भारतीय ज्योतिष विज्ञान की गहन शिक्षा। जन्म कुंडली, ग्रह स्थिति और नक्षत्रों का विश्लेषण सीखें।',
            duration: '6-12 माह',
            level: 'प्रारंभिक से मध्यम'
        },
        {
            id: 'vedic',
            title: '॥ वैदिक शास्त्र ॥',
            subtitle: 'Vedic Scriptures',
            image: '/images/vedic_learning.png',
            sloka: 'वेदोऽखिलो धर्ममूलं स्मृतिशीले च तद्विदाम्।',
            description: 'वेद, उपनिषद और पुराणों का अध्ययन। संस्कृत श्लोकों का उच्चारण और अर्थ समझने की शिक्षा।',
            duration: '6-12 माह',
            level: 'सभी स्तर'
        }
    ];

    return (
        <div className="learning-page">
            {/* Divine Hero Section */}
            <section className="learning-hero">
                <div className="container">
                    <h1 className="hero-title">॥ विद्या दानम् ॥</h1>
                    <p className="hero-subtitle">शिक्षा एवं ज्ञान का दिव्य केंद्र</p>
                    <div className="hero-sloka">
                        <p className="sloka-text">विद्या ददाति विनयं विनयाद्याति पात्रताम्।</p>
                        <p className="sloka-text">पात्रत्वात्धनमाप्नोति धनात्धर्मं ततः सुखम्॥</p>
                    </div>
                    <p className="sloka-meaning">
                        विद्या से विनम्रता आती है, विनम्रता से योग्यता, योग्यता से धन, धन से धर्म और धर्म से सुख की प्राप्ति होती है।
                    </p>
                </div>
            </section>

            {/* Guru Section */}
            <section className="section guru-section">
                <div className="container">
                    <h2 className="section-title divine-title">
                        <span className="title-decoration">✦</span>
                        आपके गुरु
                        <span className="title-decoration">✦</span>
                    </h2>
                    <div className="guru-card">
                        <div className="guru-card-image">
                            <img src={guru.photo} alt={guru.name} />
                            <div className="guru-card-overlay"></div>
                        </div>
                        <div className="guru-card-content">
                            <h3 className="guru-card-title">{guru.name}</h3>
                            <p className="guru-card-subtitle">{guru.expertise.join(' • ')}</p>
                            <p className="guru-card-description">
                                हमारे अनुभवी गुरुजी वैदिक संगीत, ज्योतिष शास्त्र और वैदिक शास्त्रों में पारंगत हैं।
                                उनका मार्गदर्शन आपको आध्यात्मिक और सांस्कृतिक ज्ञान की गहराई तक ले जाएगा।
                            </p>
                            <div className="guru-card-meta">
                                <div className="meta-item">
                                    <span className="meta-label">अनुभव:</span>
                                    <span className="meta-value">{guru.experience}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">विशेषज्ञता:</span>
                                    <span className="meta-value">{guru.expertise.length}+ क्षेत्र</span>
                                </div>
                            </div>
                            <Link href="/learning/guru" className="btn-know-more">
                                अधिक जानें
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Grid Section */}
            <section className="section programs-grid-section">
                <div className="container">
                    <h2 className="section-title divine-title">
                        <span className="title-decoration">✦</span>
                        हमारे पाठ्यक्रम
                        <span className="title-decoration">✦</span>
                    </h2>
                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <div key={program.id} className="program-card" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="program-card-image">
                                    <img src={program.image} alt={program.title} />
                                    <div className="program-card-overlay"></div>
                                </div>
                                <div className="program-card-content">
                                    <h3 className="program-card-title">{program.title}</h3>
                                    <p className="program-card-subtitle">{program.subtitle}</p>
                                    <div className="program-card-sloka">
                                        <p>{program.sloka}</p>
                                    </div>
                                    <p className="program-card-description">{program.description}</p>
                                    <div className="program-card-meta">
                                        <div className="meta-item">
                                            <span className="meta-label">अवधि:</span>
                                            <span className="meta-value">{program.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <span className="meta-label">स्तर:</span>
                                            <span className="meta-value">{program.level}</span>
                                        </div>
                                    </div>
                                    <Link href={`/learning/${program.id}`} className="btn-know-more">
                                        अधिक जानें
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="section contact-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">अभी पंजीकरण करें</h2>
                        <p className="cta-description">
                            इन पवित्र विद्याओं को सीखने के लिए आज ही संपर्क करें।
                            गुरुजी आपका मार्गदर्शन करने के लिए तैयार हैं।
                        </p>
                        <a
                            href={`https://wa.me/${guru.whatsapp}?text=${encodeURIComponent('Namaste! I am interested in learning programs. Please provide more details.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-large"
                        >
                            व्हाट्सएप पर संपर्क करें
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
