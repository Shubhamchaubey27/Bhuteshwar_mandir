'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
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
    const searchParams = useSearchParams();
    const router = useRouter();

    // Read Params from previous steps
    const prePujaId = searchParams.get('pujaType');
    const includeSamagri = searchParams.get('includeSamagri') === 'true';

    // Product Card Flow (Samagri or Direct Product Buy)
    const mode = searchParams.get('mode'); // 'product-checkout'
    const productName = searchParams.get('productName');
    const productPrice = searchParams.get('productPrice');
    const deliveryMode = searchParams.get('deliveryMode'); // 'pickup' | 'delivery'
    const deliveryCost = searchParams.get('deliveryCost');

    const preSamagriId = searchParams.get('samagriId');
    const preSamagriName = searchParams.get('samagriName');
    const preSamagriPrice = searchParams.get('samagriPrice');

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        pujaType: prePujaId || selectedPuja || '',
        panditId: selectedPandit?.toString() || '',
        address: deliveryMode === 'pickup' ? 'Self Pickup at Mandir' : '',
        specialRequirements: ''
    });

    useEffect(() => {
        if (prePujaId) {
            setFormData(prev => ({ ...prev, pujaType: prePujaId }));
        }
    }, [prePujaId]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Branch: Product Checkout
        if (mode === 'product-checkout') {
            const params = new URLSearchParams({
                invoiceType: 'product', // Signal for Invoice Page
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                productName: productName || 'Product',
                productPrice: productPrice || '0',
                deliveryMode: deliveryMode || 'pickup',
                deliveryCost: deliveryCost || '0',
                date: new Date().toISOString().split('T')[0] // Transaction Date
            });
            router.push(`/invoice?${params.toString()}`);
            return;
        }

        // Branch: Standard Puja Booking
        const puja = pujas.find(p => p.id === parseInt(formData.pujaType));
        const pandit = pandits.find(p => p.id === parseInt(formData.panditId));

        // Calculate Average Price logic...
        let dakshinaValue = 501;
        if (puja?.price) {
            const cleanPrice = puja.price.replace(/[₹,]/g, '').replace(/\/.*$/, '').trim();
            if (cleanPrice.includes('-')) {
                const parts = cleanPrice.split('-').map(p => parseInt(p.trim()));
                if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                    dakshinaValue = Math.round((parts[0] + parts[1]) / 2);
                }
            } else {
                const parsed = parseInt(cleanPrice);
                if (!isNaN(parsed)) dakshinaValue = parsed;
            }
        }

        const params = new URLSearchParams({
            name: formData.name,
            date: formData.date,
            time: formData.time,
            pujaName: puja?.name || 'Puja Service',
            panditName: pandit?.name || 'Temple Pandit',
            panditDakshina: dakshinaValue.toString(),
        });

        if (includeSamagri) {
            params.append('samagriName', 'Standard Puja Samagri Kit');
            params.append('samagriPrice', '1100');
        }
        else if (preSamagriId && preSamagriName && preSamagriPrice) {
            params.append('samagriName', preSamagriName);
            params.append('samagriPrice', preSamagriPrice);
        }

        router.push(`/invoice?${params.toString()}`);
    };

    const isProductMode = mode === 'product-checkout';

    return (
        <form className="booking-form" onSubmit={handleFormSubmit}>
            {isProductMode && (
                <div style={{ background: '#fff7ed', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #fed7aa' }}>
                    <h3 style={{ margin: 0, color: '#9a3412', fontSize: '1.1rem' }}>📦 Ordering: {productName}</h3>
                    <p style={{ margin: '0.5rem 0 0', color: '#ea580c', fontSize: '0.9rem', fontWeight: 600 }}>
                        {deliveryMode === 'pickup' ? 'Type: Self Pickup (Free)' : `Type: Home Delivery (+₹${deliveryCost})`}
                    </p>
                </div>
            )}

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" pattern="[0-9]{10}" />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
            </div>

            {!isProductMode && (
                <>
                    <div className="form-group">
                        <label className="form-label">Select Puja *</label>
                        <select name="pujaType" className="form-select" value={formData.pujaType} onChange={handleChange} required>
                            <option value="">Choose a puja...</option>
                            {pujas.map((puja) => (
                                <option key={puja.id} value={puja.id}>{puja.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Preferred Date *</label>
                            <input type="date" name="date" className="form-input" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Preferred Time *</label>
                            <input type="time" name="time" className="form-input" value={formData.time} onChange={handleChange} required />
                        </div>
                    </div>
                </>
            )}

            {(deliveryMode !== 'pickup') && (
                <div className="form-group">
                    <label className="form-label">Address {isProductMode ? '(Delivery)' : '*'}</label>
                    <textarea
                        name="address"
                        className="form-textarea"
                        value={formData.address}
                        onChange={handleChange}
                        required={deliveryMode !== 'pickup'}
                        placeholder={isProductMode ? "Complete delivery address with pincode" : "Complete address for the puja"}
                        rows={3}
                    />
                </div>
            )}

            {!isProductMode && (
                <div className="form-group">
                    <label className="form-label">Special Requirements</label>
                    <textarea name="specialRequirements" className="form-textarea" value={formData.specialRequirements} onChange={handleChange} placeholder="Any specific instructions..." rows={3} />
                </div>
            )}

            <button type="submit" className="btn btn-primary btn-submit">
                {isProductMode ? `Proceed to Pay` : "Proceed ('आगे बढ़ें')"}
            </button>
            <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
                You will review the invoice on the next page.
            </p>
        </form>
    );
};

export default BookingForm;
