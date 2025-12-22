import { useState } from 'react';
import { pandits } from '../data/pandits';
import { pujas, pujaCategories } from '../data/pujas';
import PanditCard from '../components/PanditCard';
import BookingForm from '../components/BookingForm';
import './BookPandit.css';

const BookPandit = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPujas = pujas.filter(puja => {
        const matchesCategory = selectedCategory === 'ALL' || puja.category === selectedCategory;
        const matchesSearch = puja.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="book-pandit-page">
            <section className="page-header pandit-header">
                <div className="header-overlay"></div>
                <div className="container header-content">
                    <h1 className="page-title">
                        <span className="title-ornament">✦</span>
                        पंडित जी की व्यवस्था
                        <span className="title-ornament">✦</span>
                    </h1>
                    <p className="page-subtitle">हमारे अनुभवी पंडित जी से अपनी पूजा की व्यवस्था करें</p>
                </div>
            </section>

            {/* Pandits Section */}
            <section className="pandits-section section">
                <div className="container">
                    <h2 className="section-title pandits-title">
                        <span className="title-ornament">✦</span>
                        हमारे अनुभवी पंडित जी
                        <span className="title-ornament">✦</span>
                    </h2>
                    <p className="section-subtitle">विभिन्न पूजा विधियों में निपुण एवं अनुभवी पंडित जी</p>
                    <div className="pandits-grid">
                        {pandits.map((pandit) => (
                            <PanditCard key={pandit.id} pandit={pandit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pujas Section */}
            <section className="pujas-section section">
                <div className="container">
                    <h2 className="section-title pujas-title">
                        <span className="title-ornament">✦</span>
                        उपलब्ध पूजा विधियां
                        <span className="title-ornament">✦</span>
                    </h2>
                    <p className="section-subtitle">सभी अवसरों के लिए संपूर्ण पूजा विधियां</p>

                    {/* Search and Filter */}
                    <div className="puja-filters">
                        <input
                            type="text"
                            className="form-input search-input"
                            placeholder="🔍 पूजा खोजें..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <div className="category-filters">
                            <button
                                className={`filter-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('ALL')}
                            >
                                सभी पूजाएं
                            </button>
                            {Object.entries(pujaCategories).map(([key, label]) => (
                                <button
                                    key={key}
                                    className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(key)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pujas Grid */}
                    <div className="pujas-grid">
                        {filteredPujas.map((puja) => (
                            <div key={puja.id} className="puja-card card">
                                <h3>{puja.name}</h3>
                                <p className="puja-category">{pujaCategories[puja.category]}</p>
                                <p className="puja-description">{puja.description}</p>
                                <div className="puja-details">
                                    <span className="puja-duration">⏱️ {puja.duration}</span>
                                    <span className="puja-price">{puja.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPujas.length === 0 && (
                        <div className="no-results">
                            <p>कोई पूजा नहीं मिली। कृपया अन्य खोज शब्द आज़माएं।</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="booking-section section">
                <div className="container">
                    <h2 className="section-title booking-title">
                        <span className="title-ornament">✦</span>
                        अपनी पूजा बुक करें
                        <span className="title-ornament">✦</span>
                    </h2>
                    <p className="section-subtitle">पूजा की व्यवस्था के लिए फॉर्म भरें</p>
                    <div className="booking-container">
                        <BookingForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookPandit;
