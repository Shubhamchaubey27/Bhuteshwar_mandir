'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProductItem } from '@/data/product-data';
import Script from 'next/script';
import DeliveryModal from './DeliveryModal';
import './ProductCard.css';

interface ProductCardProps {
    product: ProductItem;
}

declare global {
    interface Window {
        Razorpay: any;
    }
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [showDeliveryModal, setShowDeliveryModal] = useState(false);

    // Helper to style Rudraksh specific names (Highlighting the number)
    const renderTitle = () => {
        if (product.category === 'rudraksh') {
            const match = product.name.match(/^(\d+)\s(.*)/);
            if (match) {
                return (
                    <h3>
                        <span className="rudraksh-number">{match[1]}</span> {match[2]}
                    </h3>
                );
            }
        }
        return <h3>{product.name}</h3>;
    };

    const handleBuyNow = () => {
        // Open Delivery Modal instead of direct Razorpay
        setShowDeliveryModal(true);
    };

    const handleDeliverySelect = (option: 'pickup' | 'delivery-city' | 'delivery-out') => {
        setShowDeliveryModal(false);
        const params = new URLSearchParams();

        // Base Product Data
        params.append('productName', product.name);
        params.append('productPrice', product.price.toString());
        params.append('mode', 'product-checkout'); // Special mode for BookingForm

        if (option === 'pickup') {
            params.append('deliveryMode', 'pickup');
            params.append('deliveryCost', '0');
        } else if (option === 'delivery-city') {
            params.append('deliveryMode', 'delivery');
            params.append('deliveryCost', '199');
        } else if (option === 'delivery-out') {
            params.append('deliveryMode', 'delivery');
            params.append('deliveryCost', '350');
        }

        router.push(`/booking?${params.toString()}`);
    };

    const handleBookPandit = () => {
        // Redirect to Product Choice Interstitial
        const params = new URLSearchParams({
            samagriId: product.id,
            samagriName: product.name,
            samagriPrice: product.price.toString()
        });
        router.push(`/book-pandit/product-choice?${params.toString()}`);
    };

    const hasExtraDetails = product.items || product.benefits;

    return (
        <div className={`product-card ${product.category}`}>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />

            <div className="product-header">
                <div className="product-icon">
                    {product.category === 'rudraksh' ? '📿' :
                        product.category === 'gemstone' ? '💎' : '🎁'}
                </div>
                <div>
                    {renderTitle()}
                    <p className="product-price">₹{product.price}</p>
                </div>
            </div>

            {/* Display Long Description if available, else short */}
            <div className="product-desc-container">
                <p className="product-desc">
                    {product.longDescription || product.description}
                </p>
                {product.mantra && (
                    <div className="product-mantra">
                        <strong>Mantra:</strong> {product.mantra}
                    </div>
                )}
            </div>

            {(product.planet || product.deity) && (
                <div className="product-meta-grid">
                    {product.planet && (
                        <div className="meta-item">
                            <span className="meta-label">Planet</span>
                            <span className="meta-value">{product.planet}</span>
                        </div>
                    )}
                    {product.deity && (
                        <div className="meta-item">
                            <span className="meta-label">Deity</span>
                            <span className="meta-value">{product.deity}</span>
                        </div>
                    )}
                </div>
            )}

            {hasExtraDetails && (
                <>
                    <div className="product-actions">
                        <button
                            className="toggle-items-btn"
                            onClick={() => setShowDetails(!showDetails)}
                        >
                            {showDetails ? 'Hide Details' : 'View Details'} {showDetails ? '▲' : '▼'}
                        </button>
                    </div>

                    {showDetails && (
                        <div className="product-items-list">
                            {/* Benefits Section */}
                            {product.benefits && product.benefits.length > 0 && (
                                <div className="details-section">
                                    <h4>Benefits:</h4>
                                    <ul className="benefits-list">
                                        {product.benefits.map((benefit, idx) => (
                                            <li key={idx}>✨ {benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Samagri Logic */}
                            {product.items && product.items.length > 0 && (
                                <div className="details-section">
                                    <h4>Samagri List:</h4>
                                    <ul>
                                        {product.items.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Home Items Logic */}
                            {product.homeItems && product.homeItems.length > 0 && (
                                <div className="details-section home-items-section">
                                    <h4>🏠 Ghar ka Saman (Active by User):</h4>
                                    <ul>
                                        {product.homeItems.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}

            <div className="product-footer-btns">
                <button
                    className="btn-buy-now"
                    onClick={handleBuyNow}
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : 'Buy Now'}
                </button>

                {(product.category === 'pooja' || product.category === 'havan') && (
                    <button
                        className="btn-book-pandit"
                        onClick={handleBookPandit}
                    >
                        Book with Pandit Ji
                    </button>
                )}
            </div>

            <DeliveryModal
                isOpen={showDeliveryModal}
                onClose={() => setShowDeliveryModal(false)}
                onSelectOption={handleDeliverySelect}
                productName={product.name}
            />
        </div>
    );
};

export default ProductCard;
