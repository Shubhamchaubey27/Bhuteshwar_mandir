export const slokas = [
    {
        id: 1,
        sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
        transliteration: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare. Hare Rama Hare Rama, Rama Rama Hare Hare.",
        translation: "The Maha Mantra - Chanting the holy names of Lord Krishna and Lord Rama brings divine blessings and liberation.",
        benefit: "Purifies the mind, removes all sins, and grants spiritual enlightenment"
    },
    {
        id: 2,
        sanskrit: "नाम्नामकारि बहुधा निज सर्व शक्तिः। तत्रार्पिता नियमितः स्मरणे न कालः॥",
        transliteration: "Nāmnām akāri bahudhā nija sarva śaktiḥ, tatrārpitā niyamitaḥ smaraṇe na kālaḥ.",
        translation: "The holy name of the Lord contains all divine powers. There are no hard and fast rules for chanting the holy name.",
        benefit: "Freedom from material bondage and attainment of divine love"
    },
    {
        id: 3,
        sanskrit: "कलौ नास्त्येव नास्त्येव नास्त्येव गतिरन्यथा। हरेर्नाम हरेर्नाम हरेर्नामैव केवलम्॥",
        transliteration: "Kalau nāsty eva nāsty eva nāsty eva gatir anyathā. Harer nāma harer nāma harer nāmaiva kevalam.",
        translation: "In this age of Kali, there is no other way, no other way, no other way than chanting the holy name of the Lord.",
        benefit: "Complete salvation and peace in the age of Kali"
    },
    {
        id: 4,
        sanskrit: "सर्व पाप विनाशाय नाम संकीर्तनं परम्। भक्ति योगस्य साधनं हरि नाम महौषधम्॥",
        transliteration: "Sarva pāpa vināśāya nāma saṅkīrtanaṁ param. Bhakti yogasya sādhanaṁ hari nāma mahauṣadham.",
        translation: "Chanting the holy name is the supreme method for destroying all sins. It is the great medicine and the path of devotional yoga.",
        benefit: "Destruction of all sins and diseases, both physical and spiritual"
    },
    {
        id: 5,
        sanskrit: "नाम चिन्तामणिः कृष्णः चैतन्य रस विग्रहः। पूर्णः शुद्धो नित्य मुक्तो अभिन्नत्वान्नामनामिनोः॥",
        transliteration: "Nāma cintāmaṇiḥ kṛṣṇaḥ caitanya rasa vigrahaḥ. Pūrṇaḥ śuddho nitya mukto abhinnatvān nāma-nāminoḥ.",
        translation: "The holy name is a wish-fulfilling gem, the embodiment of divine consciousness. It is complete, pure, eternally liberated, and non-different from Krishna.",
        benefit: "Fulfillment of all desires and attainment of divine consciousness"
    },
    {
        id: 6,
        sanskrit: "राम नाम वरं नाम कृष्ण नाम सुमङ्गलम्। विष्णु नाम महा पुण्यं शिव नाम शुभावहम्॥",
        transliteration: "Rāma nāma varaṁ nāma kṛṣṇa nāma sumaṅgalam. Viṣṇu nāma mahā puṇyaṁ śiva nāma śubhāvaham.",
        translation: "The name of Rama is excellent, the name of Krishna is most auspicious, the name of Vishnu is greatly meritorious, and the name of Shiva brings all goodness.",
        benefit: "All-round prosperity, merit, and auspiciousness in life"
    }
];

export const getRandomSloka = () => {
    return slokas[Math.floor(Math.random() * slokas.length)];
};

export const getAllSlokas = () => {
    return slokas;
};
