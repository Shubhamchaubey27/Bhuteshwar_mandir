'use client';

import { products } from '@/data/product-data';
import ProductCard from '@/components/ProductCard';
import '@/styles/products.css';

export default function RudrakshPage() {
    const rudrakshProducts = products.filter(p => p.category === 'rudraksh');

    return (
        <div className="product-page">
            <div className="container">
                <header className="page-header-products">
                    <div className="shloka-container">
                        <p className="sanskrit-shloka">
                            "रुद्राक्ष धारणात् पापं, नश्यन्ति सर्वदा नृणाम्।<br />
                            महादेवकटाक्षेण, मुक्तिं प्राप्नोति मानवः॥"
                        </p>
                        <p className="shloka-meaning">
                            "By wearing Rudraksha, all sins of humans are destroyed forever. <br />
                            By the grace of Mahadev (Lord Shiva), one attains liberation (Moksha)."
                        </p>
                    </div>
                    <h1>📿 Divine Rudraksh Collection</h1>
                    <p>Authentic 1 Mukhi to 12 Mukhi Rudraksha beads for spiritual growth</p>
                </header>

                <div className="products-grid">
                    {rudrakshProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
