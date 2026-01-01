import type { Metadata } from 'next';
import { getUpcomingEvents } from '@/data/events';
import EventCard from '@/components/EventCard';
import '@/styles/Events.css';

export const metadata: Metadata = {
    title: 'Temple Events - Bhuteshwar Mandir',
    description: 'Upcoming temple events, festivals, and celebrations at Bhuteshwar Mandir. Join us for Maha Shivratri, Janmashtami, Navratri, and more.',
    keywords: 'temple events, Hindu festivals, Bhuteshwar Mandir events, puja celebrations',
};

export default function Events() {
    const upcomingEvents = getUpcomingEvents();

    return (
        <div className="events-page">
            {/* Divine Hero Section */}
            <section className="events-hero">
                <div className="events-hero-overlay"></div>
                <div className="container events-hero-content">
                    <h1 className="events-hero-title">
                        <span className="title-ornament">✦</span>
                        आगामी पर्व एवं कार्यक्रम
                        <span className="title-ornament">✦</span>
                    </h1>
                    <p className="events-hero-subtitle">Temple Events & Celebrations</p>
                    <p className="events-hero-description">
                        मंदिर के सभी पर्व, त्योहार और विशेष कार्यक्रमों की जानकारी
                    </p>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="section upcoming-events-section">
                <div className="container">
                    <h2 className="section-title events-section-title">
                        <span className="title-decoration">✦</span>
                        आगामी आयोजन
                        <span className="title-decoration">✦</span>
                    </h2>
                    <p className="section-subtitle">
                        मंदिर के आगामी पर्व एवं विशेष कार्यक्रम
                    </p>
                    <div className="events-grid-full">
                        {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Announcements Section */}
            <section className="section announcements-section">
                <div className="container">
                    <h2 className="section-title announcements-title">
                        <span className="title-decoration">✦</span>
                        महत्वपूर्ण सूचनाएं
                        <span className="title-decoration">✦</span>
                    </h2>
                    <p className="section-subtitle">Important Temple Announcements</p>

                    <div className="announcement-box">
                        <div className="announcements-grid">
                            <div className="announcement-card">
                                <div className="announcement-icon">🎵</div>
                                <h3>Daily Radha Naam Kirtan</h3>
                                <p>
                                    Join us every evening at <strong>6:25 PM</strong> for divine Radha Naam Kirtan
                                    after the evening aarti. All devotees are welcome to participate in this
                                    sacred gathering of devotional music and chanting.
                                </p>
                                <div className="announcement-badge">Daily at 6:25 PM</div>
                            </div>

                            <div className="announcement-card">
                                <div className="announcement-icon">🕐</div>
                                <h3>Temple Timings</h3>
                                <div className="timings-list">
                                    <div className="timing-item">
                                        <span className="timing-label">Morning Aarti:</span>
                                        <span className="timing-value">6:00 AM</span>
                                    </div>
                                    <div className="timing-item">
                                        <span className="timing-label">Evening Aarti:</span>
                                        <span className="timing-value">6:00 PM</span>
                                    </div>
                                    <div className="timing-item">
                                        <span className="timing-label">Temple Open:</span>
                                        <span className="timing-value">5:30 AM - 9:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="announcement-card">
                                <div className="announcement-icon">🍬</div>
                                <h3>Prasad Distribution</h3>
                                <p>
                                    Prasad is distributed after every aarti and during special festivals.
                                    Please maintain queue discipline and receive the divine blessing with devotion.
                                </p>
                                <div className="announcement-badge">After Every Aarti</div>
                            </div>

                            <div className="announcement-card">
                                <div className="announcement-icon">📿</div>
                                <h3>Special Pujas</h3>
                                <p>
                                    Book experienced pandits for all types of pujas and ceremonies.
                                    Contact us via WhatsApp or visit the Book Pandit section for more details.
                                </p>
                                <div className="announcement-badge">Available Daily</div>
                            </div>

                            <div className="announcement-card">
                                <div className="announcement-icon">📚</div>
                                <h3>Learning Programs</h3>
                                <p>
                                    Enroll in our Vedic music, astrology, and scripture classes.
                                    Learn from experienced teachers and deepen your spiritual knowledge.
                                </p>
                                <div className="announcement-badge">Ongoing Enrollment</div>
                            </div>

                            <div className="announcement-card">
                                <div className="announcement-icon">💰</div>
                                <h3>Donation & Seva</h3>
                                <p>
                                    Support temple maintenance and community service through your generous donations.
                                    Every contribution helps us serve devotees better.
                                </p>
                                <div className="announcement-badge">Always Open</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Festival Calendar Section */}
            <section className="section festival-calendar-section">
                <div className="container">
                    <h2 className="section-title calendar-title">
                        <span className="title-decoration">✦</span>
                        पर्व कैलेंडर
                        <span className="title-decoration">✦</span>
                    </h2>
                    <p className="section-subtitle">Upcoming Major Festivals</p>

                    <div className="festival-calendar">
                        <div className="festival-item">
                            <div className="festival-date">
                                <span className="month">Feb</span>
                                <span className="day">26</span>
                            </div>
                            <div className="festival-details">
                                <h3>Maha Shivratri</h3>
                                <p>Grand celebration with special Rudrabhishek and bhajans</p>
                            </div>
                        </div>

                        <div className="festival-item">
                            <div className="festival-date">
                                <span className="month">Mar</span>
                                <span className="day">14</span>
                            </div>
                            <div className="festival-details">
                                <h3>Holi Celebration</h3>
                                <p>Holika Dahan ceremony and colors celebration</p>
                            </div>
                        </div>

                        <div className="festival-item">
                            <div className="festival-date">
                                <span className="month">Apr</span>
                                <span className="day">06</span>
                            </div>
                            <div className="festival-details">
                                <h3>Ram Navami</h3>
                                <p>Birth celebration of Lord Ram with special pujas</p>
                            </div>
                        </div>

                        <div className="festival-item">
                            <div className="festival-date">
                                <span className="month">Aug</span>
                                <span className="day">16</span>
                            </div>
                            <div className="festival-details">
                                <h3>Janmashtami</h3>
                                <p>Midnight celebration of Lord Krishna's birth</p>
                            </div>
                        </div>

                        <div className="festival-item">
                            <div className="festival-date">
                                <span className="month">Sep</span>
                                <span className="day">22</span>
                            </div>
                            <div className="festival-details">
                                <h3>Navratri</h3>
                                <p>Nine days of Goddess worship with garba nights</p>
                            </div>
                        </div>

                        <div className="festival-item">
                            <div className="festival-date">
                                <span className="month">Oct</span>
                                <span className="day">20</span>
                            </div>
                            <div className="festival-details">
                                <h3>Diwali</h3>
                                <p>Five days celebration of lights and prosperity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
