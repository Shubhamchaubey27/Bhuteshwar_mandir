'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Script from 'next/script';
import '@/styles/Invoice.css';

// Separate component to handle search params in Suspense
const InvoiceContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    // Read Data
    // Read Data
    const invoiceType = searchParams.get('invoiceType'); // 'product' or null
    const name = searchParams.get('name') || 'Devotee';
    const date = searchParams.get('date') || '';
    const time = searchParams.get('time') || '';

    // Puja Vars
    const pujaName = searchParams.get('pujaName') || 'Puja Service';
    const panditName = searchParams.get('panditName') || 'Temple Pandit';
    const samagriName = searchParams.get('samagriName');
    const samagriPrice = searchParams.get('samagriPrice');
    const panditDakshina = searchParams.get('panditDakshina') || '501';

    // Product Vars
    const productName = searchParams.get('productName');
    const productPrice = searchParams.get('productPrice');
    const deliveryMode = searchParams.get('deliveryMode');
    const deliveryCost = searchParams.get('deliveryCost');

    // Calculate Items
    let items = [];

    if (invoiceType === 'product' && productName && productPrice) {
        items.push({
            desc: productName,
            sub: deliveryMode === 'pickup' ? 'Self Pickup (Mandir)' : 'Home Delivery Order',
            amount: parseInt(productPrice)
        });

        if (deliveryCost && parseInt(deliveryCost) > 0) {
            items.push({
                desc: 'Delivery Charges',
                sub: deliveryMode === 'delivery' ? 'Shipping & Handling' : 'Other',
                amount: parseInt(deliveryCost)
            });
        }
    } else {
        // Default Puja Invoice
        items.push({
            desc: `Pandit Ji Dakshina`,
            sub: `Service by ${panditName}`,
            amount: parseInt(panditDakshina)
        });

        if (samagriName && samagriPrice) {
            items.push({
                desc: `Puja Samagri Kit`,
                sub: samagriName,
                amount: parseInt(samagriPrice)
            });
        }
    }

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
                description: `Invoice #${Math.floor(Date.now() / 1000)}`,
                order_id: data.id,
                handler: function (response: any) {
                    // console.log(response); // Debug
                    setPaymentSuccess(true);
                },
                theme: { color: '#ea580c' },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Payment Error', error);
            alert('Payment initialization failed. Please check your connection.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (paymentSuccess) {
        return (
            <div className="invoice-page">
                <div className="invoice-paper" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                    <h1 style={{ color: '#ea580c', marginBottom: '1rem' }}>Payment Successful!</h1>
                    <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                        Your {invoiceType === 'product' ? 'order' : 'booking'} is confirmed.
                        <strong> {invoiceType === 'product' ? ' Dispatch team' : ' Pt. Teekendra Sharma Ji'}</strong> has been notified.
                    </p>
                    <button
                        className="pay-now-btn"
                        style={{ margin: '0 auto' }}
                        onClick={() => router.push('/')}
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="invoice-page">
            <div className="invoice-paper fade-in">
                {/* Header */}
                <div className="invoice-header-row">
                    <div className="company-info">
                        <h1>Bhuteshwar Mandir</h1>
                        <p>B-Block, Sector 52<br />Noida, Uttar Pradesh<br />+91 8750929004</p>
                    </div>
                    <div className="invoice-title-block">
                        <span className="invoice-badge">Unpaid</span>
                        <h2 className="invoice-number">INV-{Math.floor(Math.random() * 10000)}</h2>
                        <p className="invoice-date-meta">Date: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="bill-to-section">
                    <div className="bill-col">
                        <h3>Bill To</h3>
                        <div className="client-details">
                            <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{name}</span>
                            <span>{invoiceType === 'product' ? 'Online Order' : `${date} at ${time}`}</span>
                        </div>
                    </div>
                    <div className="bill-col">
                        <h3>{invoiceType === 'product' ? 'Order Details' : 'Service Details'}</h3>
                        <div className="puja-details">
                            <div className="detail-row">
                                <span className="detail-label">{invoiceType === 'product' ? 'Item:' : 'Service:'}</span>
                                <span>{invoiceType === 'product' ? productName : pujaName}</span>
                            </div>
                            {invoiceType !== 'product' && (
                                <div className="detail-row">
                                    <span className="detail-label">Pandit Ji:</span>
                                    <span>{panditName}</span>
                                </div>
                            )}
                            {invoiceType === 'product' && deliveryMode && (
                                <div className="detail-row">
                                    <span className="detail-label">Delivery:</span>
                                    <span style={{ textTransform: 'capitalize' }}>{deliveryMode}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th className="col-amount">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <div className="item-desc">{item.desc}</div>
                                        <div className="item-sub">{item.sub}</div>
                                    </td>
                                    <td className="col-amount">₹{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Summary */}
                <div className="summary-box">
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{totalAmount}</span>
                    </div>
                    <div className="summary-row">
                        <span>Tax (0%)</span>
                        <span>₹0</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total Due</span>
                        <span className="total-value">₹{totalAmount}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="invoice-footer">
                    <button
                        className="pay-now-btn"
                        onClick={handlePayment}
                        disabled={isProcessing}
                    >
                        {isProcessing ? 'Processing Securely...' : `Pay Now ₹${totalAmount}`}
                        {!isProcessing && <span>→</span>}
                    </button>
                    <p className="terms-text">
                        Thank you for your devotion. May Lord Shiva bless you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function InvoicePage() {
    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />
            <Suspense fallback={<div className="invoice-page"><div className="invoice-paper">Loading Invoice...</div></div>}>
                <InvoiceContent />
            </Suspense>
        </>
    );
}
