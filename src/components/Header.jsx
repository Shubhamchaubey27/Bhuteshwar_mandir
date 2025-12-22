import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <div className="navbar">
                <div className="container nav-content">
                    {/* Far Left - Hanuman Ji Logo */}
                    <div className="header-logo-left">
                        <img src="/images/hanuman_logo_1765693410261.png" alt="Hanuman Ji" />
                    </div>

                    {/* Temple Name - After Hanuman */}
                    <Link to="/" className="temple-name">
                        <h1>भूतेश्वर मंदिर</h1>
                        <p>Bhuteshwar Mandir</p>
                    </Link>

                    {/* Center - Trisul Logo */}
                    <div className="header-logo-center">
                        <img src="/images/trisul-original.png" alt="Trisul" className="trisul-logo" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <ul className="nav-links">
                            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                            <li><Link to="/book-pandit" className={isActive('/book-pandit') ? 'active' : ''}>Book Pandit</Link></li>
                            <li><Link to="/events" className={isActive('/events') ? 'active' : ''}>Events</Link></li>
                            <li><Link to="/daan" className={isActive('/daan') ? 'active' : ''}>Daan</Link></li>
                            <li><Link to="/learning" className={isActive('/learning') ? 'active' : ''}>Learning</Link></li>
                            <li><Link to="/kirtan" className={isActive('/kirtan') ? 'active' : ''}>Kirtan</Link></li>
                        </ul>
                    </nav>

                    {/* Far Right - Garud Dev Logo */}
                    <div className="header-logo-right">
                        <img src="/images/garud_logo_1765693449086.png" alt="Garud Dev" />
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
                            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                            <li><Link to="/book-pandit" onClick={() => setMobileMenuOpen(false)}>Book Pandit</Link></li>
                            <li><Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link></li>
                            <li><Link to="/daan" onClick={() => setMobileMenuOpen(false)}>Daan</Link></li>
                            <li><Link to="/learning" onClick={() => setMobileMenuOpen(false)}>Learning</Link></li>
                            <li><Link to="/kirtan" onClick={() => setMobileMenuOpen(false)}>Kirtan</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
