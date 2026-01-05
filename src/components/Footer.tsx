import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-wide">
                <div className="footer-content">
                    {/* Temple Info */}
                    <div className="footer-section">
                        <h3>भूतेश्वर मंदिर</h3>
                        <p className="temple-tagline">Where Devotion Meets Divinity</p>
                        <p className="temple-address">
                            Bhuteshwar Mandir<br />
                            सेक्टर 11, बसई खांडसा रोड, सदर बाज़ार<br />
                            गुरुग्राम, हरियाणा
                        </p>
                    </div>

                    {/* Quick Links - Part 1 */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/book-pandit">Book Pandit Ji</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/daan">Donation</a></li>
                        </ul>
                    </div>

                    {/* Quick Links - Part 2 */}
                    <div className="footer-section">
                        <h4>More Links</h4>
                        <ul className="footer-links">
                            <li><a href="/learning">Learning</a></li>
                            <li><a href="/kirtan">Shri Radha Naam Sankirtan</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/feedback">Feedback</a></li>
                        </ul>
                    </div>

                    {/* Temple Timings */}
                    <div className="footer-section">
                        <h4>Temple Timings</h4>
                        <ul className="timings-list">
                            <li>
                                <strong>Morning Aarti:</strong> 6:00 AM
                            </li>
                            <li>
                                <strong>Evening Aarti:</strong> 6:00 PM
                            </li>
                            <li>
                                <strong>Shri Radha Naam Kirtan:</strong> 6:25 PM (Daily)
                            </li>
                            <li>
                                <strong>Temple Open:</strong> 5:30 AM - 9:00 PM
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <strong>Phone:</strong> +91 7827740061
                            </li>
                            <li>
                                <strong>Email:</strong> bhuteshwarnathmandir@gmail.com
                            </li>
                            <li>
                                <strong>WhatsApp:</strong> +91 8750929004
                            </li>
                        </ul>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="YouTube">📺</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; 2025 Bhuteshwar Mandir. All rights reserved.</p>
                    <p className="sanskrit-text">॥ हरे कृष्ण हरे राम ॥</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
