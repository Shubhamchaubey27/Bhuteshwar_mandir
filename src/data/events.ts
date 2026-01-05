import { Event } from '../types';

export const events: Event[] = [
    {
        id: 1,
        title: "Maha Shivratri Celebration",
        date: "2025-02-26",
        time: "6:00 PM - 12:00 AM",
        description: "Grand celebration of Maha Shivratri with special Rudrabhishek, bhajans, and prasad distribution. All devotees are welcome to participate in this auspicious night.",
        image: "/images/kirtan_celebration_1765693534114.png",
        type: "Festival"
    },
    {
        id: 2,
        title: "Holi Celebration & Holika Dahan",
        date: "2025-03-14",
        time: "6:00 PM onwards",
        description: "Celebrate the festival of colors with Holika Dahan ceremony, followed by traditional bhajans and prasad. Next day Holi celebration with colors and music.",
        image: "/images/radha_krishna_hero_1765693499197.png",
        type: "Festival"
    },
    {
        id: 3,
        title: "Ram Navami Special Puja",
        date: "2025-04-06",
        time: "Morning 8:00 AM - Evening 8:00 PM",
        description: "Celebrate the birth of Lord Ram with special pujas, Ramayan paath, and bhajan sandhya. Prasad will be distributed to all devotees.",
        image: "/images/sita_ram_image_1765693517296.png",
        type: "Festival"
    },
    {
        id: 4,
        title: "Hanuman Jayanti Celebration",
        date: "2025-04-13",
        time: "5:00 AM - 9:00 PM",
        description: "Special Hanuman Chalisa paath, Sundarkand recitation, and bhajan sandhya. Prasad distribution throughout the day.",
        image: "/images/hanuman_logo_1765693410261.png",
        type: "Festival"
    },
    {
        id: 5,
        title: "Janmashtami Celebration",
        date: "2025-08-16",
        time: "11:00 PM (15th) - 2:00 AM (16th)",
        description: "Grand celebration of Lord Krishna's birth with midnight abhishek, bhajans, and Shri Radha Naam Kirtan. Special decoration and prasad.",
        image: "/images/radha_krishna_hero_1765693499197.png",
        type: "Festival"
    },
    {
        id: 6,
        title: "Ganesh Chaturthi - 10 Days Celebration",
        date: "2025-08-27",
        time: "Daily Morning & Evening Aarti",
        description: "10-day Ganesh Utsav with daily morning and evening aarti, bhajans, and cultural programs. Visarjan on the 10th day.",
        image: "/images/kirtan_celebration_1765693534114.png",
        type: "Festival"
    },
    {
        id: 7,
        title: "Navratri - 9 Days Celebration",
        date: "2025-09-22",
        time: "Daily 6:00 PM - 9:00 PM",
        description: "Nine days of Goddess worship with special pujas, bhajans, and garba/dandiya nights. Kanya pujan on the final day.",
        image: "/images/kirtan_celebration_1765693534114.png",
        type: "Festival"
    },
    {
        id: 8,
        title: "Diwali - 5 Days Celebration",
        date: "2025-10-20",
        time: "Daily Evening Aarti",
        description: "Five days of lights celebration including Dhanteras, Naraka Chaturdashi, Lakshmi Puja, Govardhan Puja, and Bhai Dooj.",
        image: "/images/kirtan_celebration_1765693534114.png",
        type: "Festival"
    },
    {
        id: 9,
        title: "Monthly Satyanarayan Puja",
        date: "Every Purnima (Full Moon)",
        time: "6:00 PM - 8:00 PM",
        description: "Monthly Satyanarayan puja on every Purnima. All devotees can participate and take prasad.",
        image: "/images/kirtan_celebration_1765693534114.png",
        type: "Regular"
    },
    {
        id: 10,
        title: "Weekly Hanuman Chalisa Paath",
        date: "Every Tuesday",
        time: "7:00 PM - 8:00 PM",
        description: "Weekly Hanuman Chalisa recitation every Tuesday evening. Join us for this powerful devotional practice.",
        image: "/images/hanuman_logo_1765693410261.png",
        type: "Regular"
    }
];

export const getUpcomingEvents = (): Event[] => {
    const today = new Date();
    return events.filter(event => {
        if (event.date.includes('Every')) return true;
        const eventDate = new Date(event.date);
        return eventDate >= today;
    }).sort((a, b) => {
        if (a.date.includes('Every')) return 1;
        if (b.date.includes('Every')) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
};

export const getEventById = (id: number): Event | undefined => {
    return events.find(event => event.id === id);
};
