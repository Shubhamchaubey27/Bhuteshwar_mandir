'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import '@/styles/Feedback.css';

interface FeedbackFormData {
    name: string;
    phone: string;
    email: string;
    serviceType: string;
    rating: string;
    experience: string;
    suggestions: string;
}

const FeedbackPage = () => {
    const [formData, setFormData] = useState<FeedbackFormData>({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        rating: '',
        experience: '',
        suggestions: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // Get emoji based on rating
    const getRatingEmoji = (rating: string) => {
        switch (rating) {
            case '5':
                return '😍'; // Very happy
            case '4':
                return '😊'; // Happy
            case '3':
                return '🙂'; // Neutral
            case '2':
                return '😕'; // Disappointed
            case '1':
                return '😞'; // Sad
            default:
                return '😐'; // Default neutral
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/send-feedback.php', {
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
                    serviceType: '',
                    rating: '',
                    experience: '',
                    suggestions: ''
                });

                // Redirect to WhatsApp after 2 seconds
                setTimeout(() => {
                    const message = `नमस्ते! मैंने अभी-अभी प्रतिक्रिया फॉर्म भरा है।\n\nनाम: ${formData.name}\nसेवा: ${formData.serviceType}\nरेटिंग: ${formData.rating}⭐`;
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
        <main className="feedback-page">
            {/* Hero Section */}
            <section className="feedback-hero">
                    <div className="hero-overlay"></div>
                    <div className="feedback-hero-content">
                        <h1>आपकी प्रतिक्रिया</h1>
                        <p>Your Feedback Matters</p>
                    </div>
                </section>

                {/* Feedback Form Section */}
                <section className="feedback-form-section">
                    <div className="container">
                        <div className="feedback-intro">
                            <h2 className="section-title">
                                <span className="title-ornament">✦</span>
                                अपना अनुभव साझा करें
                                <span className="title-ornament">✦</span>
                            </h2>
                            <p className="section-description">
                                आपके अनुभव हमारे लिए बहुत महत्वपूर्ण हैं। कृपया मंदिर में आपकी पूजा, हवन या अन्य अवसरों पर मिली सेवाओं के बारे में अपनी प्रतिक्रिया दें।
                            </p>
                        </div>

                        <div className="feedback-content">
                            {submitted ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>धन्यवाद!</h3>
                                    <p>आपकी प्रतिक्रिया सफलतापूर्वक प्राप्त हो गई है। हम आपके अनुभव की सराहना करते हैं।</p>
                                    <p className="whatsapp-redirect">आपको WhatsApp पर रीडायरेक्ट किया जा रहा है...</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="feedback-form">
                                    <div className="form-row">
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
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">ईमेल</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="serviceType">सेवा का प्रकार <span className="required">*</span></label>
                                            <select
                                                id="serviceType"
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">चुनें</option>
                                                <option value="पूजा पाठ">पूजा पाठ</option>
                                                <option value="हवन">हवन</option>
                                                <option value="संकीर्तन">संकीर्तन</option>
                                                <option value="विशेष पूजा">विशेष पूजा</option>
                                                <option value="पंडित जी की सेवा">पंडित जी की सेवा</option>
                                                <option value="मंदिर दर्शन">मंदिर दर्शन</option>
                                                <option value="अन्य">अन्य</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="rating">रेटिंग <span className="required">*</span></label>
                                            <select
                                                id="rating"
                                                name="rating"
                                                value={formData.rating}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">चुनें</option>
                                                <option value="5">⭐⭐⭐⭐⭐ उत्कृष्ट</option>
                                                <option value="4">⭐⭐⭐⭐ बहुत अच्छा</option>
                                                <option value="3">⭐⭐⭐ अच्छा</option>
                                                <option value="2">⭐⭐ ठीक</option>
                                                <option value="1">⭐ सुधार की आवश्यकता</option>
                                            </select>
                                            {formData.rating && (
                                                <div className="rating-emoji-display">
                                                    <span className="emoji-large">{getRatingEmoji(formData.rating)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="experience">आपका अनुभव <span className="required">*</span></label>
                                        <textarea
                                            id="experience"
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="कृपया अपना अनुभव विस्तार से बताएं..."
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="suggestions">सुझाव (वैकल्पिक)</label>
                                        <textarea
                                            id="suggestions"
                                            name="suggestions"
                                            value={formData.suggestions}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="सेवा सुधार के लिए आपके सुझाव..."
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
                                            'प्रतिक्रिया भेजें'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Why Feedback Matters */}
                        <div className="why-feedback">
                            <h3>आपकी प्रतिक्रिया क्यों महत्वपूर्ण है?</h3>
                            <div className="feedback-reasons">
                                <div className="reason-card">
                                    <div className="reason-icon">🙏</div>
                                    <h4>सेवा सुधार</h4>
                                    <p>आपकी प्रतिक्रिया से हम अपनी सेवाओं को और बेहतर बना सकते हैं</p>
                                </div>
                                <div className="reason-card">
                                    <div className="reason-icon">✨</div>
                                    <h4>अनुभव साझा करें</h4>
                                    <p>आपका अनुभव अन्य भक्तों के लिए प्रेरणा का स्रोत बनता है</p>
                                </div>
                                <div className="reason-card">
                                    <div className="reason-icon">💫</div>
                                    <h4>समुदाय निर्माण</h4>
                                    <p>आपका योगदान मंदिर समुदाय को मजबूत बनाता है</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    );
};

export default FeedbackPage;
