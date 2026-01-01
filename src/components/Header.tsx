'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

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
                        className="mobile-menu-btn"
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
