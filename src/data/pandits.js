export const pandits = [
    {
        id: 1,
        name: "Pandit Radheshyam Sharma",
        photo: "/images/pandit-1.jpg",
        specialization: "Vedic Rituals & Marriage Ceremonies",
        experience: "25 years",
        languages: ["Hindi", "Sanskrit", "English"],
        whatsapp: "919324915650",
        description: "Expert in all Vedic rituals, marriage ceremonies, and griha pravesh pujas. Specializes in traditional North Indian style pujas with deep knowledge of Vedic scriptures.",
        expertise: ["Vivah Puja", "Griha Pravesh", "Satyanarayan Puja", "Vedic Rituals"]
    },
    {
        id: 2,
        name: "Pandit Gopal Krishna Shastri",
        photo: "/images/pandit-2.jpg",
        specialization: "Astrology & Dosh Nivaran",
        experience: "20 years",
        languages: ["Hindi", "Sanskrit", "Marathi"],
        whatsapp: "919324915651",
        description: "Renowned astrologer and expert in dosh nivaran pujas. Specializes in Mangal Dosh, Kaal Sarp Dosh, and Pitra Dosh remedies with proven results.",
        expertise: ["Astrology", "Kaal Sarp Puja", "Mangal Dosh Nivaran", "Pitra Dosh Nivaran"]
    },
    {
        id: 3,
        name: "Pandit Vishwanath Mishra",
        photo: "/images/pandit-3.jpg",
        specialization: "Devotional Pujas & Kirtan",
        experience: "30 years",
        languages: ["Hindi", "Sanskrit", "Bengali"],
        whatsapp: "919324915652",
        description: "Master of devotional pujas, bhajans, and kirtan. Expert in Radha Naam Kirtan, Hanuman Chalisa, and Akhand Ramayan Paath. Also teaches Vedic music and astrology.",
        expertise: ["Radha Naam Kirtan", "Hanuman Chalisa", "Akhand Ramayan", "Sangeet (Music)", "Astrology Teaching"]
    }
];

export const getPanditById = (id) => {
    return pandits.find(pandit => pandit.id === parseInt(id));
};

export const getPanditsByExpertise = (expertise) => {
    return pandits.filter(pandit =>
        pandit.expertise.some(exp => exp.toLowerCase().includes(expertise.toLowerCase()))
    );
};
