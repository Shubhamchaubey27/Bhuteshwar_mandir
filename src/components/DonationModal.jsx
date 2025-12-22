import { useState } from 'react';
import PropTypes from 'prop-types';
import './DonationModal.css';

const DonationModal = ({ isOpen, onClose }) => {
    const [copiedText, setCopiedText] = useState('');

    if (!isOpen) return null;

    const donationOptions = [
        {
            id: 1,
            title: 'QR Code',
            icon: '📱',
            type: 'qr',
            content: (
                <div className="qr-section">
                    <img src="/images/donation-qr.png" alt="Donation QR Code" className="qr-code" />
                    <p>Scan this QR code with any UPI app to donate</p>
                </div>
            )
        },
        {
            id: 2,
            title: 'Bank Account',
            icon: '🏦',
            type: 'bank',
            content: (
                <div className="bank-details">
                    <div className="detail-row">
                        <strong>Account Name:</strong>
                        <span>Bhuteshwar Mandir Trust</span>
                    </div>
                    <div className="detail-row">
                        <strong>Account Number:</strong>
                        <span>1234567890</span>
                        <button onClick={() => copyToClipboard('1234567890', 'Account Number')} className="copy-btn">📋</button>
                    </div>
                    <div className="detail-row">
                        <strong>IFSC Code:</strong>
                        <span>SBIN0001234</span>
                        <button onClick={() => copyToClipboard('SBIN0001234', 'IFSC Code')} className="copy-btn">📋</button>
                    </div>
                    <div className="detail-row">
                        <strong>Bank Name:</strong>
                        <span>State Bank of India</span>
                    </div>
                    <div className="detail-row">
                        <strong>Branch:</strong>
                        <span>Main Branch</span>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: 'UPI ID',
            icon: '💳',
            type: 'upi',
            content: (
                <div className="upi-section">
                    <div className="upi-id-box">
                        <span className="upi-id">bhuteshwarmandir@upi</span>
                        <button onClick={() => copyToClipboard('bhuteshwarmandir@upi', 'UPI ID')} className="copy-btn-large">
                            📋 Copy UPI ID
                        </button>
                    </div>
                    <p>Use this UPI ID in any UPI app to make a donation</p>
                </div>
            )
        },
        {
            id: 4,
            title: 'Online Payment',
            icon: '💰',
            type: 'online',
            content: (
                <div className="online-payment">
                    <p>Online payment gateway integration coming soon!</p>
                    <p className="note">For now, please use QR Code, Bank Transfer, or UPI ID options above.</p>
                </div>
            )
        }
    ];

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(''), 2000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content donation-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-header">
                    <h2>🙏 दान करें (Donate)</h2>
                    <p className="sanskrit-text">दानं परमं तपः</p>
                    <p className="tagline">Your contribution helps maintain the temple and serve devotees</p>
                </div>

                <div className="donation-options">
                    {donationOptions.map((option) => (
                        <div key={option.id} className="donation-option">
                            <div className="option-header">
                                <span className="option-icon">{option.icon}</span>
                                <h3>{option.title}</h3>
                            </div>
                            <div className="option-content">
                                {option.content}
                            </div>
                        </div>
                    ))}
                </div>

                {copiedText && (
                    <div className="copy-notification">
                        ✓ {copiedText} copied to clipboard!
                    </div>
                )}
            </div>
        </div>
    );
};

DonationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default DonationModal;
