import { pandits } from '../data/pandits';
import PanditCard from '../components/PanditCard';
import './Learning.css';

const Learning = () => {
    // Get one pandit who teaches (preferably music or general teaching)
    const guru = pandits.find(p => p.expertise.includes('Sangeet (Music)')) || pandits[0];

    const handleWhatsApp = (program) => {
        const message = encodeURIComponent(`Namaste! I am interested in learning ${program}. Please provide more details.`);
        window.open(`https://wa.me/${guru.whatsapp}?text=${message}`, '_blank');
    };

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
                    <div className="guru-showcase">
                        <PanditCard pandit={guru} showBookButton={false} />
                        <div className="guru-description">
                            <p>
                                हमारे अनुभवी गुरुजी वैदिक संगीत, ज्योतिष शास्त्र और वैदिक शास्त्रों में पारंगत हैं।
                                उनका मार्गदर्शन आपको आध्यात्मिक और सांस्कृतिक ज्ञान की गहराई तक ले जाएगा।
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Music Program - Image Left */}
            <section className="section program-section">
                <div className="container">
                    <div className="program-showcase">
                        <div className="program-image-col">
                            <div className="program-img-wrapper">
                                <img src="/images/music_learning.png" alt="संगीत शिक्षा" />
                                <div className="img-divine-glow"></div>
                            </div>
                        </div>
                        <div className="program-content-col">
                            <h3 className="program-heading">॥ संगीत शिक्षा ॥</h3>
                            <div className="program-sloka-box">
                                <p className="program-sloka">संगीतं सर्वविद्यानां मुख्यं तत्त्वं प्रकीर्तितम्।</p>
                                <p className="program-sloka">नादब्रह्म परं तत्त्वं संगीते परमं पदम्॥</p>
                            </div>
                            <p className="program-description">
                                वैदिक संगीत और भजन गायन की पारंपरिक शिक्षा। हारमोनियम, ढोलक और तबला जैसे वाद्य यंत्रों में प्रशिक्षण।
                            </p>
                            <div className="program-curriculum">
                                <h4>पाठ्यक्रम:</h4>
                                <ul>
                                    <li>भजन गायन और भक्ति संगीत</li>
                                    <li>हारमोनियम वादन तकनीक</li>
                                    <li>ढोलक और तबला लय</li>
                                    <li>राग और ताल का ज्ञान</li>
                                    <li>वैदिक मंत्र उच्चारण</li>
                                    <li>स्वर साधना और श्वास नियंत्रण</li>
                                </ul>
                            </div>
                            <div className="program-details-box">
                                <div className="detail-row">
                                    <span className="detail-label">अवधि:</span>
                                    <span className="detail-value">3-6 माह (लचीला)</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">समय:</span>
                                    <span className="detail-value">सप्ताहांत या सायंकाल</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">स्तर:</span>
                                    <span className="detail-value">प्रारंभिक से उन्नत</span>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-contact"
                                onClick={() => handleWhatsApp('संगीत शिक्षा')}
                            >
                                संपर्क करें
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Astronomy Program - Image Right */}
            <section className="section program-section program-reverse">
                <div className="container">
                    <div className="program-showcase reverse">
                        <div className="program-content-col">
                            <h3 className="program-heading">॥ ज्योतिष शास्त्र ॥</h3>
                            <div className="program-sloka-box">
                                <p className="program-sloka">ज्योतिषां चक्षुराख्यातं यत्र दृश्यं प्रकाशते।</p>
                                <p className="program-sloka">वेदस्य नेत्रं ज्योतिषं तस्मात्तद्वेदितव्यम्॥</p>
                            </div>
                            <p className="program-description">
                                प्राचीन भारतीय ज्योतिष विज्ञान की गहन शिक्षा। जन्म कुंडली, ग्रह स्थिति और नक्षत्रों का विश्लेषण सीखें।
                            </p>
                            <div className="program-curriculum">
                                <h4>पाठ्यक्रम:</h4>
                                <ul>
                                    <li>वैदिक ज्योतिष के मूल सिद्धांत</li>
                                    <li>कुंडली निर्माण और विश्लेषण</li>
                                    <li>ग्रह, भाव और नक्षत्र ज्ञान</li>
                                    <li>दशा प्रणाली और ग्रह काल</li>
                                    <li>उपाय और रत्न विधान</li>
                                    <li>मुहूर्त शास्त्र</li>
                                </ul>
                            </div>
                            <div className="program-details-box">
                                <div className="detail-row">
                                    <span className="detail-label">अवधि:</span>
                                    <span className="detail-value">6-12 माह</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">समय:</span>
                                    <span className="detail-value">लचीला समय</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">स्तर:</span>
                                    <span className="detail-value">प्रारंभिक से मध्यम</span>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-contact"
                                onClick={() => handleWhatsApp('ज्योतिष शास्त्र')}
                            >
                                संपर्क करें
                            </button>
                        </div>
                        <div className="program-image-col">
                            <div className="program-img-wrapper">
                                <img src="/images/astronomy_learning.png" alt="ज्योतिष शास्त्र" />
                                <div className="img-divine-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vedic Scriptures Program - Image Left */}
            <section className="section program-section">
                <div className="container">
                    <div className="program-showcase">
                        <div className="program-image-col">
                            <div className="program-img-wrapper">
                                <img src="/images/vedic_learning.png" alt="वैदिक शास्त्र" />
                                <div className="img-divine-glow"></div>
                            </div>
                        </div>
                        <div className="program-content-col">
                            <h3 className="program-heading">॥ वैदिक शास्त्र ॥</h3>
                            <div className="program-sloka-box">
                                <p className="program-sloka">वेदोऽखिलो धर्ममूलं स्मृतिशीले च तद्विदाम्।</p>
                                <p className="program-sloka">आचारश्चैव साधूनामात्मनस्तुष्टिरेव च॥</p>
                            </div>
                            <p className="program-description">
                                वेद, उपनिषद और पुराणों का अध्ययन। संस्कृत श्लोकों का उच्चारण और अर्थ समझने की शिक्षा।
                            </p>
                            <div className="program-curriculum">
                                <h4>पाठ्यक्रम:</h4>
                                <ul>
                                    <li>वेद मंत्रों का उच्चारण</li>
                                    <li>उपनिषद और गीता का अध्ययन</li>
                                    <li>संस्कृत भाषा की बुनियादी शिक्षा</li>
                                    <li>पुराण कथाओं का ज्ञान</li>
                                    <li>धर्म शास्त्र और नीति</li>
                                    <li>ध्यान और योग साधना</li>
                                </ul>
                            </div>
                            <div className="program-details-box">
                                <div className="detail-row">
                                    <span className="detail-label">अवधि:</span>
                                    <span className="detail-value">6-12 माह</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">समय:</span>
                                    <span className="detail-value">सप्ताहांत</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">स्तर:</span>
                                    <span className="detail-value">सभी स्तर</span>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-contact"
                                onClick={() => handleWhatsApp('वैदिक शास्त्र')}
                            >
                                संपर्क करें
                            </button>
                        </div>
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
                        <button
                            className="btn btn-primary btn-large"
                            onClick={() => handleWhatsApp('सामान्य जानकारी')}
                        >
                            व्हाट्सएप पर संपर्क करें
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Learning;
