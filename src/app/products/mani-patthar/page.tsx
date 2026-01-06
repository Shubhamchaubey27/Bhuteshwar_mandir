'use client';

import { products } from '@/data/product-data';
import ProductCard from '@/components/ProductCard';
import '@/styles/products.css';

export default function GemstonesPage() {
    const gemProducts = products.filter(p => p.category === 'gemstone');

    return (
        <div className="product-page">
            <div className="container">
                <header className="page-header-products">
                    <div className="shloka-container">
                        <p className="sanskrit-shloka">
                            "ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च।<br />
                            गुरुश्च शुक्रः शनिराहुकेतवः कुर्वन्तु सर्वे मम सुप्रभातम्॥"
                        </p>
                        <p className="shloka-meaning">
                            "May the Trinity (Brahma, Vishnu, Shiva) and the Nine Planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu) bless my life with auspiciousness."
                        </p>
                    </div>
                    <h1>💎 Certified Gemstones (Mani Patthar)</h1>
                    <p>High quality Navratna and healing stones for planetary benefits</p>
                </header>

                <div className="products-grid">
                    {gemProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
