import { Sloka } from '../types';

export const slokas: Sloka[] = [
    {
        id: 1,
        sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
        transliteration: "महा-मंत्र - भगवान कृष्ण और भगवान राम के पवित्र नामों का जप दिव्य आशीर्वाद और मोक्ष प्रदान करता है।",
        translation: "The Maha Mantra - Chanting the holy names of Lord Krishna and Lord Rama brings divine blessings and liberation.",
        benefit: "Purifies the mind, removes all sins, and grants spiritual enlightenment"
    },
    {
        id: 2,
        sanskrit: "नाम्नामकारि बहुधा निज सर्व शक्तिः। तत्रार्पिता नियमितः स्मरणे न कालः॥",
        transliteration: "भगवान का पवित्र नाम सभी दिव्य शक्तियों को धारण करता है। पवित्र नाम के जप के लिए कोई कठोर नियम नहीं हैं।",
        translation: "The holy name of the Lord contains all divine powers. There are no hard and fast rules for chanting the holy name.",
        benefit: "Freedom from material bondage and attainment of divine love"
    },
    {
        id: 3,
        sanskrit: "कलौ नास्त्येव नास्त्येव नास्त्येव गतिरन्यथा। हरेर्नाम हरेर्नाम हरेर्नामैव केवलम्॥",
        transliteration: "कलियुग में कोई अन्य उपाय नहीं है, कोई अन्य उपाय नहीं है, कोई अन्य उपाय नहीं है, केवल भगवान के पवित्र नाम का जप ही एकमात्र मार्ग है।",
        translation: "In this age of Kali, there is no other way, no other way, no other way than chanting the holy name of the Lord.",
        benefit: "Complete salvation and peace in the age of Kali"
    },
    {
        id: 4,
        sanskrit: "सर्व पाप विनाशाय नाम संकीर्तनं परम्। भक्ति योगस्य साधनं हरि नाम महौषधम्॥",
        transliteration: "पवित्र नाम का जप सभी पापों को नष्ट करने की सर्वोत्तम विधि है। यह महान औषधि है और भक्ति योग का मार्ग है।",
        translation: "Chanting the holy name is the supreme method for destroying all sins. It is the great medicine and the path of devotional yoga.",
        benefit: "Destruction of all sins and diseases, both physical and spiritual"
    },
    {
        id: 5,
        sanskrit: "नाम चिन्तामणिः कृष्णः चैतन्य रस विग्रहः। पूर्णः शुद्धो नित्य मुक्तो अभिन्नत्वान्नामनामिनोः॥",
        transliteration: "पवित्र नाम एक मणि के समान है जो सभी मनोकामनाओं को पूर्ण करती है, यह दिव्य चेतना का अवतार है। यह पूर्ण, शुद्ध, नित्य मुक्त है और कृष्ण से अभिन्न है।",
        translation: "The holy name is a wish-fulfilling gem, the embodiment of divine consciousness. It is complete, pure, eternally liberated, and non-different from Krishna.",
        benefit: "Fulfillment of all desires and attainment of divine consciousness"
    },
    {
        id: 6,
        sanskrit: "राम नाम वरं नाम कृष्ण नाम सुमङ्गलम्। विष्णु नाम महा पुण्यं शिव नाम शुभावहम्॥",
        transliteration: "राम का नाम उत्तम है, कृष्ण का नाम परम मंगलकारी है, विष्णु का नाम अत्यधिक पुण्यदायक है और शिव का नाम सभी शुभता लाता है।",
        translation: "The name of Rama is excellent, the name of Krishna is most auspicious, the name of Vishnu is greatly meritorious, and the name of Shiva brings all goodness.",
        benefit: "All-round prosperity, merit, and auspiciousness in life"
    }
];

export const getRandomSloka = (): Sloka => {
    return slokas[Math.floor(Math.random() * slokas.length)];
};

export const getAllSlokas = (): Sloka[] => {
    return slokas;
};
