'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import '@/styles/Contact.css';

interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/send-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                // Redirect to WhatsApp after 2 seconds
                setTimeout(() => {
                    const message = `नमस्ते! मैंने अभी-अभी संपर्क फॉर्म भरा है।\n\nनाम: ${formData.name}\nविषय: ${formData.subject}`;
                    const whatsappUrl = `https://wa.me/919324915650?text=${encodeURIComponent(message)}`;
                    window.location.href = whatsappUrl;
                }, 2000);
            } else {
                alert('कुछ गलत हो गया। कृपया फिर से प्रयास करें।');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('कुछ गलत हो गया। कृपया फिर से प्रयास करें।');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-overlay"></div>
                <div className="contact-hero-content">
                    <h1>अपनी जिज्ञासा के लिए</h1>
                    <p>For Your Query</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>संपर्क करें</h2>
                            <p className="contact-description">
                                यदि आपके कोई प्रश्न या जिज्ञासा है, तो कृपया हमसे संपर्क करें। हम आपकी सहायता के लिए यहाँ हैं।
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div className="contact-text">
                                        <h3>फोन</h3>
                                        <p>+91 93249 15650</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📧</div>
                                    <div className="contact-text">
                                        <h3>ईमेल</h3>
                                        <p>tinkupandit8750@gmail.com</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-text">
                                        <h3>पता</h3>
                                        <p>भूतेश्वर मंदिर<br />खांडसा रोड, बसई रोड<br />गुरुग्राम, हरियाणा</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">⏰</div>
                                    <div className="contact-text">
                                        <h3>समय</h3>
                                        <p>सुबह 5:30 - रात 9:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            {submitted ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>धन्यवाद!</h3>
                                    <p>आपकी जिज्ञासा प्राप्त हो गई है। हम जल्द ही आपसे संपर्क करेंगे।</p>
                                    <p className="whatsapp-redirect">आपको WhatsApp पर रीडायरेक्ट किया जा रहा है...</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <h2>अपना प्रश्न भेजें</h2>

                                    <div className="form-group">
                                        <label htmlFor="name">नाम <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="अपना पूरा नाम दर्ज करें"
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">फोन नंबर <span className="required">*</span></label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                pattern="[0-9]{10}"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">ईमेल <span className="required">*</span></label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">विषय <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="आपकी जिज्ञासा का विषय"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">संदेश <span className="required">*</span></label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            placeholder="अपना प्रश्न या जिज्ञासा विस्तार से लिखें..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner"></span>
                                                भेजा जा रहा है...
                                            </>
                                        ) : (
                                            'भेजें'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
