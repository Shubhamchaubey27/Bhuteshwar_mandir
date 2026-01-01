'use client';

import { useState } from 'react';
import DonationModal from '@/components/DonationModal';
import '@/styles/Daan.css';

export default function Daan() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="daan-page">
            <section className="page-header">
                <div className="container">
                    <h1>🙏 दान करें (Donate)</h1>
                    <p className="sanskrit-text">दानं परमं तपः</p>
                    <p>Donation is the highest form of penance</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="daan-intro">
                        <h2>Why Donate?</h2>
                        <p>
                            Your generous contributions help us maintain the temple, organize daily pujas and aartis,
                            celebrate festivals, provide prasad to devotees, and serve the community. Every donation,
                            big or small, makes a significant difference in keeping our spiritual traditions alive.
                        </p>
                    </div>

                    <div className="donation-cta">
                        <button className="btn btn-primary btn-large pulse" onClick={() => setIsModalOpen(true)}>
                            💰 Donate Now
                        </button>
                    </div>

                    <div className="donation-impact">
                        <h2 className="section-title">How Your Donation Helps</h2>
                        <div className="grid grid-3">
                            <div className="impact-card card-divine">
                                <div className="impact-icon">🕉️</div>
                                <h3>Daily Pujas & Aartis</h3>
                                <p>Support daily worship rituals, aarti ceremonies, and maintenance of deity decorations</p>
                            </div>

                            <div className="impact-card card-divine">
                                <div className="impact-icon">🎉</div>
                                <h3>Festival Celebrations</h3>
                                <p>Help organize grand celebrations during festivals like Janmashtami, Navratri, and Diwali</p>
                            </div>

                            <div className="impact-card card-divine">
                                <div className="impact-icon">🍲</div>
                                <h3>Prasad Distribution</h3>
                                <p>Provide prasad to devotees and organize community meals during special occasions</p>
                            </div>

                            <div className="impact-card card-divine">
                                <div className="impact-icon">🏛️</div>
                                <h3>Temple Maintenance</h3>
                                <p>Maintain temple infrastructure, cleanliness, and create a peaceful environment</p>
                            </div>

                            <div className="impact-card card-divine">
                                <div className="impact-icon">📚</div>
                                <h3>Learning Programs</h3>
                                <p>Support Vedic education, music classes, and astrology teachings for devotees</p>
                            </div>

                            <div className="impact-card card-divine">
                                <div className="impact-icon">🤝</div>
                                <h3>Community Service</h3>
                                <p>Help the needy, organize charitable activities, and serve the community</p>
                            </div>
                        </div>
                    </div>

                    <div className="transparency-section">
                        <h2 className="section-title">Transparency & Accountability</h2>
                        <div className="transparency-content">
                            <p>
                                We believe in complete transparency. All donations are properly accounted for and used
                                exclusively for temple activities and community service. Donation receipts are provided
                                for all contributions.
                            </p>
                            <p className="note">
                                For any queries regarding donations, please contact us at +91 93249 15650 or
                                email info@bhuteshwarmandir.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
