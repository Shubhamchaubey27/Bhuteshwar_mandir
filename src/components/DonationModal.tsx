'use client';

import { useState } from 'react';
import Script from 'next/script';
import { DonationModalProps } from '@/types';
import './DonationModal.css';

declare global {
    interface Window {
        Razorpay: any;
    }
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
    const [step, setStep] = useState<'initial' | 'causes' | 'payment'>('initial');
    const [selectedCause, setSelectedCause] = useState<string>('General Donation');
    const [amount, setAmount] = useState<string>('');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    if (!isOpen) return null;

    const causes = [
        { id: 'bhandara', title: 'Bhandara (Community Meal)', icon: '🍲' },
        { id: 'renovation', title: 'Renovation', icon: '🏗️' },
        { id: 'prasad', title: 'Prasad', icon: '🍬' },
        { id: 'cloths', title: 'Bhagwan Cloths', icon: '👘' },
        { id: 'maintenance', title: 'Other Mandir Works', icon: '🧹' },
    ];

    const predefinedAmounts = [101, 251, 501, 1001, 2100, 5100];

    // Reset state when closing
    const handleClose = () => {
        setStep('initial');
        setSelectedCause('General Donation');
        setAmount('');
        setCustomAmount('');
        setError('');
        onClose();
    };

    const handleBack = () => {
        if (step === 'payment') {
            if (selectedCause === 'General Donation') {
                setStep('initial');
            } else {
                setStep('causes');
            }
        } else if (step === 'causes') {
            setStep('initial');
        }
    };

    const handleAmountSelect = (val: number) => {
        setAmount(val.toString());
        setCustomAmount('');
        setError('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setAmount('');
        setError('');
    };

    const handlePayment = async () => {
        const finalAmount = customAmount ? parseFloat(customAmount) : parseFloat(amount);

        if (!finalAmount || finalAmount < 1) {
            setError('Please enter a valid amount (minimum ₹1)');
            return;
        }

        setIsLoading(true);
        try {
            // 1. Create Order
            const response = await fetch('/api/razorpay/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: finalAmount }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create order');
            }
            const data = await response.json();

            // 2. Initialize Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '', // Fallback handled in API check
                amount: data.amount,
                currency: data.currency,
                name: 'Bhuteshwar Mandir',
                description: `Donation for ${selectedCause}`,
                image: '/images/logo.png',
                order_id: data.id,
                handler: async function (response: any) {
                    try {
                        const verifyRes = await fetch('/api/razorpay/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            }),
                        });

                        if (verifyRes.ok) {
                            alert(`Thank you for your generous donation for ${selectedCause}! 🙏`);
                            handleClose();
                        } else {
                            alert('Payment verification failed. Please contact support.');
                        }
                    } catch (err) {
                        console.error('Verification error:', err);
                        alert('Payment verification failed.');
                    }
                },
                prefill: {
                    name: '',
                    email: '',
                    contact: '',
                },
                notes: {
                    address: 'Bhuteshwar Mandir Trust',
                    cause: selectedCause
                },
                theme: {
                    color: '#ff9933',
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            rzp1.open();

        } catch (err: any) {
            console.error('Payment Error:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />
            <div className="modal-overlay" onClick={handleClose}>
                <div className="modal-content donation-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={handleClose}>✕</button>
                    {step !== 'initial' && (
                        <button className="modal-back" onClick={handleBack}>←</button>
                    )}

                    <div className="modal-header">
                        <h2>🙏 दान करें (Donate)</h2>
                        <p className="sanskrit-text">दानं परमं तपः</p>
                        {step === 'payment' && <p className="cause-badge">For: {selectedCause}</p>}
                    </div>

                    <div className="donation-body">
                        {step === 'initial' && (
                            <div className="choice-container">
                                <button
                                    className="choice-btn cause-btn"
                                    onClick={() => {
                                        setStep('causes');
                                        setError('');
                                    }}
                                >
                                    <span className="choice-icon">🎯</span>
                                    <div className="choice-text">
                                        <h3>Donate for a Cause</h3>
                                        <p>Select a specific purpose</p>
                                    </div>
                                    <span className="arrow">→</span>
                                </button>

                                <button
                                    className="choice-btn direct-btn"
                                    onClick={() => {
                                        setSelectedCause('General Donation');
                                        setStep('payment');
                                        setError('');
                                    }}
                                >
                                    <span className="choice-icon">⚡</span>
                                    <div className="choice-text">
                                        <h3>Donate Now</h3>
                                        <p>General Temple Fund</p>
                                    </div>
                                    <span className="arrow">→</span>
                                </button>
                            </div>
                        )}

                        {step === 'causes' && (
                            <div className="causes-grid">
                                {causes.map((cause) => (
                                    <button
                                        key={cause.id}
                                        className="cause-card"
                                        onClick={() => {
                                            setSelectedCause(cause.title);
                                            setStep('payment');
                                            setError('');
                                        }}
                                    >
                                        <span className="cause-icon">{cause.icon}</span>
                                        <span>{cause.title}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {step === 'payment' && (
                            <div className="donation-form-container">
                                <div className="amount-grid">
                                    {predefinedAmounts.map((val) => (
                                        <button
                                            key={val}
                                            className={`amount-btn ${amount === val.toString() ? 'active' : ''}`}
                                            onClick={() => handleAmountSelect(val)}
                                        >
                                            ₹{val}
                                        </button>
                                    ))}
                                </div>

                                <div className="custom-amount-input">
                                    <span className="currency-symbol">₹</span>
                                    <input
                                        type="number"
                                        placeholder="Enter custom amount"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        className="amount-input-field"
                                        min="1"
                                    />
                                </div>

                                {error && <p className="error-message">{error}</p>}

                                <button
                                    className="donate-submit-btn"
                                    onClick={handlePayment}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Processing...' : `Donate ₹${customAmount || amount || '0'}`}
                                </button>

                                <div className="secure-badge">
                                    🔒 100% Secure Payment via Razorpay
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationModal;
