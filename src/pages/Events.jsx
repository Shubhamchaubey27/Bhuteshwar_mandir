import { getUpcomingEvents } from '../data/events';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
    const upcomingEvents = getUpcomingEvents();

    return (
        <div className="events-page">
            <section className="page-header">
                <div className="container">
                    <h1>📅 Temple Events & Announcements</h1>
                    <p>Stay updated with upcoming festivals and temple activities</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Upcoming Events</h2>
                    <div className="grid grid-3">
                        {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="announcement-box">
                        <h2>📢 Important Announcements</h2>
                        <div className="announcements-list">
                            <div className="announcement-item">
                                <h3>Daily Radha Naam Kirtan</h3>
                                <p>Join us every evening at 6:25 PM for divine Radha Naam Kirtan after the evening aarti. All devotees are welcome!</p>
                            </div>
                            <div className="announcement-item">
                                <h3>Temple Timings</h3>
                                <p>Morning Aarti: 6:00 AM | Evening Aarti: 6:00 PM | Temple Open: 5:30 AM - 9:00 PM</p>
                            </div>
                            <div className="announcement-item">
                                <h3>Prasad Distribution</h3>
                                <p>Prasad is distributed after every aarti and during special festivals. Please maintain queue discipline.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
