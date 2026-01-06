'use client';

import React, { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';
import '@/styles/BookPandit.css'; // Reusing styles for consistency

export default function BookingPage() {
    return (
        <div className="book-pandit-page">
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title booking-title">
                            <span className="title-decoration">✦</span>
                            Complete Your Booking
                            <span className="title-decoration">✦</span>
                        </h2>
                        <p className="section-subtitle">
                            Please fill in your details to confirm the puja booking.
                        </p>
                    </div>
                    <div className="booking-container">
                        <Suspense fallback={<div>Loading form...</div>}>
                            <BookingForm />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
