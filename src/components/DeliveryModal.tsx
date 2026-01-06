import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './DeliveryModal.css';

interface DeliveryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectOption: (option: 'pickup' | 'delivery-city' | 'delivery-out') => void;
    productName: string;
}

const DeliveryModal = ({ isOpen, onClose, onSelectOption, productName }: DeliveryModalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="delivery-modal-overlay" onClick={onClose}>
            <div className="delivery-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Select Delivery Method</h2>
                    <p className="modal-sub">For {productName}</p>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="delivery-options-grid">
                    {/* Option 1: Delivery */}
                    <div className="delivery-option-card">
                        <div className="option-icon-large">🚚</div>
                        <h3>Home Delivery</h3>
                        <p className="option-desc">We will ship the authentic {productName} to your doorstep.</p>

                        <div className="delivery-pricing">
                            <button
                                className="pricing-btn"
                                onClick={() => onSelectOption('delivery-city')}
                            >
                                <span className="label">In City (Noida)</span>
                                <span className="price">₹199</span>
                            </button>
                            <button
                                className="pricing-btn"
                                onClick={() => onSelectOption('delivery-out')}
                            >
                                <span className="label">Out of City</span>
                                <span className="price">₹350</span>
                            </button>
                        </div>
                    </div>

                    {/* Option 2: Pickup */}
                    <div className="delivery-option-card pickup-card" onClick={() => onSelectOption('pickup')}>
                        <div className="option-icon-large">🏛️</div>
                        <h3>Self Pickup</h3>
                        <p className="option-desc">Collect directly from Bhuteshwar Mandir premises.</p>
                        <div className="pickup-details">
                            <span>No Shipping Charges</span>
                            <span className="free-badge">FREE</span>
                        </div>
                        <button className="select-action-btn">Select Pickup</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DeliveryModal;
