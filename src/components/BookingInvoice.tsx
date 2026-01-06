'use client';

import React, { useState } from 'react';
import './BookingInvoice.css';

interface InvoiceItem {
    description: string;
    amount: number;
}

interface BookingInvoiceProps {
    bookingId?: string;
    customerName: string;
    bookingDate: string;
    items: InvoiceItem[];
    onPaymentSuccess: (paymentId: string) => void;
}

const BookingInvoice = ({ customerName, bookingDate, items, onPaymentSuccess }: BookingInvoiceProps) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

    const handlePayment = async () => {
        setIsProcessing(true);
        try {
            // Create Order
            const response = await fetch('/api/razorpay/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: totalAmount }),
            });

            if (!response.ok) throw new Error('Order creation failed');
            const data = await response.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: data.currency,
                name: 'Bhuteshwar Mandir',
                description: 'Pandit Ji Dakshina & Samagri',
                order_id: data.id,
                handler: function (response: any) {
                    onPaymentSuccess(response.razorpay_payment_id);
                },
                theme: { color: '#f97316' },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Payment Error', error);
            alert('Payment initialization failed. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="invoice-container fade-in">
            <div className="invoice-header">
                <h2 className="invoice-title">Booking Invoice</h2>
                <p className="invoice-date">Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="invoice-customer-info">
                <div className="customer-row">
                    <span className="customer-label">Devotee Name:</span>
                    <span className="customer-value">{customerName}</span>
                </div>
                <div className="customer-row">
                    <span className="customer-label">Booking Date:</span>
                    <span className="customer-value">{bookingDate}</span>
                </div>
            </div>

            <div className="invoice-details">
                <div className="invoice-row header">
                    <span>Description</span>
                    <span>Amount</span>
                </div>
                {items.map((item, idx) => (
                    <div key={idx} className="invoice-row">
                        <span>{item.description}</span>
                        <span>₹{item.amount}</span>
                    </div>
                ))}
                <div className="invoice-row total">
                    <span>Total Payable</span>
                    <span>₹{totalAmount}</span>
                </div>
            </div>

            <div className="pay-btn-container">
                <button
                    className="pay-btn"
                    onClick={handlePayment}
                    disabled={isProcessing}
                >
                    {isProcessing ? 'Processing...' : `Pay Now ₹${totalAmount}`}
                </button>
            </div>
        </div>
    );
};

export default BookingInvoice;
