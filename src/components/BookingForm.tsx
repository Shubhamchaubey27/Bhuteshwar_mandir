'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { BookingFormProps } from '@/types';
import { pujas } from '@/data/pujas';
import { pandits } from '@/data/pandits';
import './BookingForm.css';

interface FormData {
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    pujaType: string;
    panditId: string;
    address: string;
    specialRequirements: string;
}

const BookingForm = ({ selectedPuja, selectedPandit }: BookingFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        pujaType: selectedPuja || '',
        panditId: selectedPandit?.toString() || '',
        address: '',
        specialRequirements: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Get puja and pandit details
        const puja = pujas.find(p => p.id === parseInt(formData.pujaType));
        const pandit = pandits.find(p => p.id === parseInt(formData.panditId));

        // Prepare data for PHP
        const bookingData = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            date: formData.date,
            time: formData.time,
            pujaName: puja?.name || 'Not selected',
            panditName: pandit?.name || 'Not selected',
            address: formData.address,
            specialRequirements: formData.specialRequirements || 'None'
        };

        try {
            // Send to PHP backend
            const response = await fetch('/api/send-booking.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);

                // Create WhatsApp message
                const message = `
नमस्ते! मुझे पूजा बुक करनी है:

नाम: ${formData.name}
फोन: ${formData.phone}
ईमेल: ${formData.email}
पूजा: ${puja?.name || 'Not selected'}
पंडित जी: ${pandit?.name || 'Not selected'}
तारीख: ${formData.date}
समय: ${formData.time}
पता: ${formData.address}
विशेष आवश्यकताएं: ${formData.specialRequirements || 'कोई नहीं'}
                `.trim();

                const whatsappNumber = '919324915650';
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                // Redirect to WhatsApp after a short delay
                setTimeout(() => {
                    window.location.href = whatsappUrl;
                }, 2000);
            } else {
                alert('Failed to send booking request. Please try again.');
                setLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try contacting us directly via WhatsApp.');
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="booking-success fade-in">
                <div className="success-icon">✓</div>
                <h3>बुकिंग अनुरोध सबमिट हो गया!</h3>
                <p>आपको WhatsApp पर रीडायरेक्ट किया जा रहा है...</p>
                <p className="note">आपकी बुकिंग की जानकारी हमें ईमेल पर भी भेज दी गई है। हमारे पंडित जी जल्द ही आपसे संपर्क करेंगे।</p>
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
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
                    rows={3}
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
                    rows={3}
                />
            </div>

            <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                {loading ? '⏳ भेजा जा रहा है...' : '📱 सबमिट करें और WhatsApp पर संपर्क करें'}
            </button>

            <p className="form-note">
                * आवश्यक फ़ील्ड। सबमिशन के बाद, आपको बुकिंग की पुष्टि के लिए WhatsApp पर रीडायरेक्ट किया जाएगा।
            </p>
        </form>
    );
};

export default BookingForm;
