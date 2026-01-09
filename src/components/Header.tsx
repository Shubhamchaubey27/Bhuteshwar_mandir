'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const productCategories = [
        { title: 'Pooja Samagri', icon: '🙏', link: '/products/pooja-samagri', desc: 'Daily worship essentials' },
        { title: 'Pooja & Havan Samagri', icon: '🔥', link: '/products/havan-samagri', desc: 'Complete Havan kits' },
        { title: 'Rudraksh', icon: '📿', link: '/products/rudraksh', desc: 'Authentic beads' },
        { title: 'Mani Patthar', icon: '💎', link: '/products/mani-patthar', desc: 'Certified Gemstones' }
    ];

    return (
        <header className="header">
            <div className="navbar">
                <div className="container nav-content">
                    {/* Hanuman Ji Logo */}
                    <div className="header-logo-left">
                        <Image
                            src="/images/hanuman_logo_1765693410261.png"
                            alt="Hanuman Ji"
                            width={50}
                            height={50}
                            priority
                        />
                    </div>

                    {/* Temple Name */}
                    <Link href="/" className="temple-name">
                        <h1>श्री भूतेश्वर मंदिर</h1>
                        <p>Shri Bhuteshwar Mandir</p>
                    </Link>

                    {/* Trisul Logo */}
                    <div className="header-logo-center">
                        <Image
                            src="/images/trisul-original.png"
                            alt="Trisul"
                            className="trisul-logo"
                            width={60}
                            height={60}
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <ul className="nav-links">
                            <li>
                                <Link
                                    href="/"
                                    className={isActive('/') ? 'active' : ''}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/book-pandit"
                                    className={isActive('/book-pandit') ? 'active' : ''}
                                >
                                    Book Pandit Ji
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events"
                                    className={isActive('/events') ? 'active' : ''}
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/daan"
                                    className={isActive('/daan') ? 'active' : ''}
                                >
                                    Daan
                                </Link>
                            </li>

                            {/* Products Mega Menu */}
                            <li className="nav-item-products">
                                <button className="nav-link-btn">
                                    Products <span className="arrow-down">▼</span>
                                </button>
                                <div className="mega-menu">
                                    <div className="mega-menu-grid">
                                        {productCategories.map((item, index) => (
                                            <Link href={item.link} key={index} className="mega-menu-item">
                                                <span className="mega-icon">{item.icon}</span>
                                                <div className="mega-content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <li>
                                <Link
                                    href="/learning"
                                    className={isActive('/learning') ? 'active' : ''}
                                >
                                    Learning
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kirtan"
                                    className={isActive('/kirtan') ? 'active' : ''}
                                >
                                    Kirtan
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Garud Dev Logo */}
                    <div className="header-logo-right">
                        <Image
                            src="/images/garud_logo_1765693449086.png"
                            alt="Garud Dev"
                            width={50}
                            height={50}
                            priority
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="mobile-nav">
                        <ul className="nav-links">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/book-pandit"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Book Pandit Ji
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/daan"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Daan
                                </Link>
                            </li>

                            {/* Mobile Products Accordion */}
                            <li className="mobile-products-item">
                                <button
                                    className="mobile-nav-link-btn"
                                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                >
                                    Products
                                    <span className={`arrow-down ${mobileProductsOpen ? 'rotated' : ''}`}>▼</span>
                                </button>
                                {mobileProductsOpen && (
                                    <ul className="mobile-sub-menu">
                                        {productCategories.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.link}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <span className="sub-icon">{item.icon}</span>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link
                                    href="/learning"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Learning
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kirtan"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Kirtan
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
