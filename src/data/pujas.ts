import { Puja, PujaCategories, PujaCategoryKey } from '../types';

export const pujaCategories: PujaCategories = {
    RECENT: "Recent & Popular",
    COMMON: "Most Common",
    DEITY: "Deity Worship",
    LIFE_EVENT: "Life Events",
    DOSH_NIVARAN: "Dosh Nivaran",
    DEVOTIONAL: "Devotional Paath",
    SPECIAL: "Special Occasions"
};

export const pujas: Puja[] = [
    // Recent & Popular Pujas
    { id: 1, name: "Satyanarayan Puja", category: "RECENT", duration: "2-3 hours", price: "₹2,100 - ₹5,100", description: "Auspicious puja for prosperity and well-being" },
    { id: 2, name: "Griha Pravesh Puja", category: "RECENT", duration: "3-4 hours", price: "₹3,100 - ₹7,100", description: "Housewarming ceremony for new home" },
    { id: 3, name: "Vivah Puja", category: "RECENT", duration: "4-6 hours", price: "₹11,000 - ₹21,000", description: "Traditional Hindu marriage ceremony" },
    { id: 4, name: "Ganpati Puja", category: "RECENT", duration: "2-3 hours", price: "₹2,100 - ₹5,100", description: "Worship of Lord Ganesha for removing obstacles" },

    // Most Common Pujas
    { id: 5, name: "Bhoomi Puja", category: "COMMON", duration: "2-3 hours", price: "₹2,100 - ₹5,100", description: "Land worship before construction" },
    { id: 6, name: "Gauri Puja", category: "COMMON", duration: "2-3 hours", price: "₹2,100 - ₹4,100", description: "Worship of Goddess Gauri" },
    { id: 7, name: "Maha Mrityunjaya Jaap", category: "COMMON", duration: "3-5 hours", price: "₹5,100 - ₹11,000", description: "Powerful mantra for health and longevity" },
    { id: 8, name: "Rudrabhishek Puja", category: "COMMON", duration: "2-4 hours", price: "₹3,100 - ₹7,100", description: "Sacred abhishek of Lord Shiva" },
    { id: 9, name: "Dhanteras Puja", category: "COMMON", duration: "1-2 hours", price: "₹1,500 - ₹3,100", description: "Worship for wealth and prosperity" },
    { id: 10, name: "Laxmi Puja", category: "COMMON", duration: "2-3 hours", price: "₹2,100 - ₹5,100", description: "Worship of Goddess Lakshmi for wealth" },

    // Deity Worship
    { id: 11, name: "Kaal Sarp Puja", category: "DEITY", duration: "3-4 hours", price: "₹5,100 - ₹11,000", description: "Remedy for Kaal Sarp Dosh" },
    { id: 12, name: "Navratri Puja", category: "DEITY", duration: "2-3 hours/day", price: "₹2,100 - ₹5,100/day", description: "Nine days worship of Goddess Durga" },
    { id: 13, name: "Durga Puja", category: "DEITY", duration: "3-4 hours", price: "₹3,100 - ₹7,100", description: "Worship of Goddess Durga" },
    { id: 14, name: "Shiv Puja", category: "DEITY", duration: "2-3 hours", price: "₹2,100 - ₹5,100", description: "Worship of Lord Shiva" },
    { id: 15, name: "Krishna Puja", category: "DEITY", duration: "2-3 hours", price: "₹2,100 - ₹5,100", description: "Worship of Lord Krishna" },
    { id: 16, name: "Maha Shivratri Puja", category: "DEITY", duration: "4-6 hours", price: "₹5,100 - ₹11,000", description: "Special night worship of Lord Shiva" },

    // Life Events
    { id: 17, name: "Engagement Puja", category: "LIFE_EVENT", duration: "1-2 hours", price: "₹2,100 - ₹4,100", description: "Engagement ceremony rituals" },
    { id: 18, name: "New Business Puja", category: "LIFE_EVENT", duration: "2-3 hours", price: "₹3,100 - ₹7,100", description: "Inauguration puja for new business" },
    { id: 19, name: "Namkaran Puja", category: "LIFE_EVENT", duration: "2-3 hours", price: "₹2,100 - ₹4,100", description: "Baby naming ceremony" },
    { id: 20, name: "Annaprashan Puja", category: "LIFE_EVENT", duration: "2-3 hours", price: "₹2,100 - ₹4,100", description: "First rice feeding ceremony" },
    { id: 21, name: "Birthday Puja", category: "LIFE_EVENT", duration: "1-2 hours", price: "₹1,500 - ₹3,100", description: "Birthday celebration puja" },
    { id: 22, name: "Mundan Puja", category: "LIFE_EVENT", duration: "2-3 hours", price: "₹2,100 - ₹4,100", description: "First haircut ceremony" },

    // Dosh Nivaran
    { id: 23, name: "Mangal Dosh Nivaran", category: "DOSH_NIVARAN", duration: "3-4 hours", price: "₹5,100 - ₹11,000", description: "Remedy for Mangal Dosh" },
    { id: 24, name: "Pitra Dosh Nivaran", category: "DOSH_NIVARAN", duration: "3-4 hours", price: "₹5,100 - ₹11,000", description: "Remedy for ancestral issues" },
    { id: 25, name: "Shani Dosh Nivaran", category: "DOSH_NIVARAN", duration: "3-4 hours", price: "₹5,100 - ₹11,000", description: "Remedy for Saturn afflictions" },
    { id: 26, name: "Mool Shanti Puja", category: "DOSH_NIVARAN", duration: "2-3 hours", price: "₹3,100 - ₹7,100", description: "Peace ritual for Mool Nakshatra" },

    // Devotional Paath
    { id: 27, name: "Mata ki Chowki", category: "DEVOTIONAL", duration: "3-4 hours", price: "₹5,100 - ₹11,000", description: "Devotional singing for Goddess" },
    { id: 28, name: "Saraswati Puja", category: "DEVOTIONAL", duration: "2-3 hours", price: "₹2,100 - ₹5,100", description: "Worship of Goddess Saraswati" },
    { id: 29, name: "Laghu Rudra Puja", category: "DEVOTIONAL", duration: "4-5 hours", price: "₹7,100 - ₹15,000", description: "Elaborate Shiva worship" },
    { id: 30, name: "Hanuman Chalisa Paath", category: "DEVOTIONAL", duration: "1-2 hours", price: "₹1,100 - ₹2,100", description: "Recitation of Hanuman Chalisa" },
    { id: 31, name: "Akhand Ramayan Paath", category: "DEVOTIONAL", duration: "24 hours", price: "₹11,000 - ₹21,000", description: "Continuous Ramayan recitation" },
    { id: 32, name: "Sundarkand Paath", category: "DEVOTIONAL", duration: "2-3 hours", price: "₹1,500 - ₹3,100", description: "Recitation of Sundarkand" },
    { id: 33, name: "Vishnu Sahasranama", category: "DEVOTIONAL", duration: "1-2 hours", price: "₹1,100 - ₹2,100", description: "1000 names of Lord Vishnu" },

    // Special Occasions
    { id: 34, name: "Ganpati Sthapna", category: "SPECIAL", duration: "2-3 hours", price: "₹3,100 - ₹7,100", description: "Ganesh installation and visarjan" },
    { id: 35, name: "Shradh Puja", category: "SPECIAL", duration: "2-3 hours", price: "₹3,100 - ₹7,100", description: "Ancestral remembrance ritual" },
    { id: 36, name: "Antim Sanskar", category: "SPECIAL", duration: "4-6 hours", price: "₹7,100 - ₹15,000", description: "Last rites ceremony" }
];

export const getPujasByCategory = (category: PujaCategoryKey): Puja[] => {
    return pujas.filter(puja => puja.category === category);
};

export const getPujaById = (id: number): Puja | undefined => {
    return pujas.find(puja => puja.id === id);
};

export const searchPujas = (searchTerm: string): Puja[] => {
    return pujas.filter(puja =>
        puja.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        puja.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
};
