import PropTypes from 'prop-types';
import './EventCard.css';

const EventCard = ({ event }) => {
    const formatDate = (dateString) => {
        if (dateString.includes('Every')) return dateString;
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="event-card card fade-in">
            {event.image && (
                <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <span className="event-type-badge">{event.type}</span>
                </div>
            )}

            <div className="event-content">
                <div className="event-date">
                    <span className="date-icon">📅</span>
                    <span>{formatDate(event.date)}</span>
                </div>

                <h3>{event.title}</h3>

                <div className="event-time">
                    <span className="time-icon">🕐</span>
                    <span>{event.time}</span>
                </div>

                <p className="event-description">{event.description}</p>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
        type: PropTypes.string.isRequired
    }).isRequired
};

export default EventCard;
