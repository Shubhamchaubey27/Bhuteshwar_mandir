import { useState } from 'react';
import PropTypes from 'prop-types';
import { pujas } from '../data/pujas';
import './BookingForm.css';

const BookingForm = ({ selectedPandit = null, selectedPuja = null, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        pujaType: selectedPuja || '',
        panditId: selectedPandit || '',
        address: '',
        specialRequirements: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Create WhatsApp message
        const puja = pujas.find(p => p.id === parseInt(formData.pujaType));
        const message = `
Namaste! I would like to book a puja:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Puja: ${puja?.name || 'Not selected'}
Date: ${formData.date}
Time: ${formData.time}
Address: ${formData.address}
Special Requirements: ${formData.specialRequirements || 'None'}
    `.trim();

        const whatsappNumber = '919324915650';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        if (onSubmit) {
            onSubmit(formData);
        }

        // Open WhatsApp after a short delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="booking-success fade-in">
                <div className="success-icon">✓</div>
                <h3>Booking Request Submitted!</h3>
                <p>We are redirecting you to WhatsApp to confirm your booking.</p>
                <p className="note">Our pandit will contact you shortly to confirm the details.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Book Another Puja
                </button>
            </div>
        );
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        pattern="[0-9]{10}"
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Select Puja *</label>
                <select
                    name="pujaType"
                    className="form-select"
                    value={formData.pujaType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Choose a puja...</option>
                    {pujas.map((puja) => (
                        <option key={puja.id} value={puja.id}>
                            {puja.name} - {puja.price}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Preferred Date *</label>
                    <input
                        type="date"
                        name="date"
                        className="form-input"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Preferred Time *</label>
                    <input
                        type="time"
                        name="time"
                        className="form-input"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Address *</label>
                <textarea
                    name="address"
                    className="form-textarea"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter the complete address where puja will be performed"
                    rows="3"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Special Requirements</label>
                <textarea
                    name="specialRequirements"
                    className="form-textarea"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Any special requirements or instructions..."
                    rows="3"
                />
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
                📱 Submit & Contact via WhatsApp
            </button>

            <p className="form-note">
                * Required fields. After submission, you'll be redirected to WhatsApp to confirm your booking.
            </p>
        </form>
    );
};

BookingForm.propTypes = {
    selectedPandit: PropTypes.number,
    selectedPuja: PropTypes.number,
    onSubmit: PropTypes.func
};

export default BookingForm;
