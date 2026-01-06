'use client';

import { products } from '@/data/product-data';
import ProductCard from '@/components/ProductCard';
import '@/styles/products.css';

export default function HavanSamagriPage() {
    const havanProducts = products.filter(p => p.category === 'havan');

    return (
        <div className="product-page">
            <div className="container">
                <header className="page-header-products">
                    <h1>🔥 Pooja & Havan Samagri Kits</h1>
                    <p>Everything you need for a complete vedic Havan</p>
                </header>

                <div className="products-grid">
                    {havanProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
