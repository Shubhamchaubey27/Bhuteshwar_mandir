'use client';

import { useParams } from 'next/navigation';
import { getPanditById } from '@/data/pandits';
import Link from 'next/link';
import '@/styles/PanditDetails.css';

export default function PanditDetails() {
    const params = useParams();
    const id = Number(params.id);
    const pandit = getPanditById(id);

    if (!pandit) {
        return (
            <div className="not-found-container">
                <h2>Pandit Ji Not Found</h2>
                <Link href="/book-pandit" className="btn-primary">Back to List</Link>
            </div>
        );
    }

    return (
        <div className="pandit-details-page">
            <div className="details-hero">
                <Link href="/book-pandit" className="back-link">
                    ← Back to Pandits
                </Link>
            </div>

            <div className="details-container">
                <div className="pandit-profile-card">
                    <div className="profile-image-section">
                        <div className="profile-image">
                            <img src={pandit.photo} alt={pandit.name} />
                        </div>
                        <div className="expertise-tags">
                            {pandit.expertise.map((exp, i) => (
                                <span key={i} className="expertise-tag">{exp}</span>
                            ))}
                        </div>
                    </div>

                    <div className="profile-info">
                        <h1>{pandit.name}</h1>
                        <span className="profile-designation">{pandit.specialization}</span>

                        <div className="info-grid">
                            <div className="info-item">
                                <label>Experience</label>
                                <span>{pandit.experience}</span>
                            </div>
                            <div className="info-item">
                                <label>Languages</label>
                                <span>{pandit.languages.join(", ")}</span>
                            </div>
                            <div className="info-item">
                                <label>Location</label>
                                <span>Vrindavan, Mathura</span>
                            </div>
                            <div className="info-item">
                                <label>Availability</label>
                                <span style={{ color: '#166534' }}>Available Now</span>
                            </div>
                        </div>

                        <div className="bio-section">
                            <h3>About Pandit Ji</h3>
                            <p className="bio-text">{pandit.description}</p>
                            <p className="bio-text" style={{ marginTop: '1rem' }}>
                                Dedicated to performing Vedic rituals with utmost purity and devotion.
                                Trusted by thousands of devotees for efficient and spiritual puja services.
                            </p>
                        </div>

                        <div className="action-buttons">
                            <button className="book-now-large" onClick={() => window.location.href = `/poojas?panditId=${pandit.id}`}>
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
