import PropTypes from 'prop-types';
import './PanditCard.css';

const PanditCard = ({ pandit, showBookButton = true }) => {
    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Namaste! I would like to book ${pandit.name} for a puja.`);
        window.open(`https://wa.me/${pandit.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <div className="pandit-card card-divine fade-in">
            <div className="pandit-image">
                <img src={pandit.photo} alt={pandit.name} />
                <div className="experience-badge">{pandit.experience}</div>
            </div>

            <div className="pandit-info">
                <h3>पंडित जी {pandit.name}</h3>
                <p className="specialization">{pandit.specialization}</p>
                <p className="description">{pandit.description}</p>

                <div className="expertise-tags">
                    {pandit.expertise.slice(0, 3).map((exp, index) => (
                        <span key={index} className="expertise-tag">{exp}</span>
                    ))}
                </div>

                <div className="languages">
                    <strong>भाषाएं:</strong> {pandit.languages.join(', ')}
                </div>

                {showBookButton && (
                    <div className="pandit-actions">
                        <button className="btn btn-primary" onClick={() => window.location.href = `/book-pandit?pandit=${pandit.id}`}>
                            अभी बुक करें
                        </button>
                        <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
                            📱 WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

PanditCard.propTypes = {
    pandit: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        specialization: PropTypes.string.isRequired,
        experience: PropTypes.string.isRequired,
        languages: PropTypes.arrayOf(PropTypes.string).isRequired,
        whatsapp: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        expertise: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    showBookButton: PropTypes.bool
};

export default PanditCard;
