'use client';

import { products } from '@/data/product-data';
import ProductCard from '@/components/ProductCard';
import '@/styles/products.css';

export default function PoojaSamagriPage() {
    const poojaProducts = products.filter(p => p.category === 'pooja');

    return (
        <div className="product-page">
            <div className="container">
                <header className="page-header-products">
                    <h1>🙏 Pooja Samagri Kits</h1>
                    <p>Complete authentic materials for your sacred ceremonies</p>
                </header>

                <div className="products-grid">
                    {poojaProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
