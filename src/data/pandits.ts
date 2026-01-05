import { Pandit } from '../types';

export const pandits: Pandit[] = [
    {
        id: 3,
        name: "Aacharya Teekendra Tiwari Ji",
        photo: "/images/pandit_ji/panditji.jpeg",
        specialization: "Devotional Pujas & Sankirtan",
        experience: "16 years",
        languages: ["Hindi", "Sanskrit"],
        whatsapp: "918750929004",
        description: "Master of devotional pujas, bhajans, and sankirtan. Expert in Shri Radha Naam Sankirtan, Hanuman Chalisa, and Akhand Ramayan Paath. Also teaches Vedic music and astrology.",
        expertise: ["Shri Radha Naam Sankirtan", "Hanuman Chalisa", "Akhand Ramayan", "Sangeet (Music)", "Astrology Teaching"]
    },
    {
        id: 1,
        name: "Acharya Nandkishor Sharma",
        photo: "/images/pandit_ji/acharya nandkishore.jpeg",
        specialization: "Vedic Rituals & Marriage Ceremonies",
        experience: "21 years",
        languages: ["Hindi", "Sanskrit"],
        whatsapp: "919268690660",
        description: "Expert in all Vedic rituals, marriage ceremonies, and griha pravesh pujas. Specializes in traditional North Indian style pujas with deep knowledge of Vedic scriptures.",
        expertise: ["Vivah Puja", "Griha Pravesh", "Satyanarayan Puja", "Vedic Rituals"]
    },
    {
        id: 2,
        name: "Pt Premchand Sharma",
        photo: "/images/pandit_ji/pt premchandra sharma.jpeg",
        specialization: "Astrology & Dosh Nivaran",
        experience: "20 years",
        languages: ["Hindi", "Sanskrit"],
        whatsapp: "919324915651",
        description: " expert in dosh nivaran pujas. Specializes in Mangal Dosh, Kaal Sarp Dosh, and Pitra Dosh remedies with proven results.",
        expertise: ["Jyotish (Astrology)", "Astrology", "Kaal Sarp Puja", "Mangal Dosh Nivaran", "Pitra Dosh Nivaran"]
    }
];

export const getPanditById = (id: number): Pandit | undefined => {
    return pandits.find(pandit => pandit.id === id);
};

export const getPanditsByExpertise = (expertise: string): Pandit[] => {
    return pandits.filter(pandit =>
        pandit.expertise.some(exp => exp.toLowerCase().includes(expertise.toLowerCase()))
    );
};
