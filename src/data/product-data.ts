export interface ProductItem {
    id: string;
    name: string;
    category: 'pooja' | 'havan' | 'rudraksh' | 'gemstone';
    price: number;
    description: string;
    items?: string[];
    homeItems?: string[]; // Ghar ka saman
    pandit?: string;
    // Extended Details
    longDescription?: string;
    benefits?: string[];
    planet?: string;
    deity?: string;
    mantra?: string;
}

export const products: ProductItem[] = [
    {
        id: 'satyanarayan-havan',
        name: 'Satyanarayan Puja & Havan Samagri',
        category: 'havan',
        price: 1500,
        description: 'Complete kit for Satyanarayan Puja and Havan',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli - 50 gm', 'Moli - 2 pc', 'Haldi powder - 50gm', 'Chaval (Rice) - 250gm',
            'Supari - 7 pc', 'Long+elaichi - 10+10gm', 'Dhoopbatti - 1 pkt', 'Nariyal - 1pc',
            'Gola - 1pc', 'Janeu - 5pc', 'Kapoor - 50gm', 'Peela kapda - 1meter',
            'Chhoti towel - 1pc', 'Cotton - 10rs', 'Disposal (katori) - 2 pkt',
            'Hawan samgri - 500gm', 'Indra jou - 50gm', 'Kale til - 50g', 'Google - 50gm',
            'Lovaan - 50gm', 'Boora(khand) - 250gm', 'Deshi ghi(patanjali) - 500gm',
            'Aam ki Samidha (Bood) - 2kg', 'Fruits 🍒 - 2kg', 'Mithai - 1kg mix 5 type',
            'Paan k patte - 5pc', 'Foolmala - 2pc & khule fool', 'Matchbox - 1 pc',
            'Gangajal', 'Panjiri prasad', 'Kele k patte'
        ],
        homeItems: [
            'Thali - 4 pc', 'Lota - 2 pc', 'Katori - 2pc', 'Spoon🥄 - 2pc',
            'Havan kund ya tasla', 'Chowki - 1pc'
        ]
    },
    {
        id: 'havan-samagri',
        name: 'Havan Samagri Kit',
        category: 'havan',
        price: 1500,
        description: 'Essential items for a complete Vedic Havan',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli - 50 gm', 'Moli - 2 pc', 'Haldi powder - 50gm', 'Chaval (Rice) - 250gm',
            'Supari - 7 pc', 'Long+elaichi - 10+10gm', 'Dhoopbatti - 1 pkt', 'Nariyal - 1pc',
            'Gola - 1pc', 'Janeu - 5pc', 'Kapoor - 50gm', 'Peela kapda - 1meter',
            'Chhoti towel - 1pc', 'Cotton - 10rs', 'Disposal (katori) - 2 pkt',
            'Hawan samgri - 500gm', 'Indra jou - 50gm', 'Kale til - 50g', 'Google - 50gm',
            'Lovaan - 50gm', 'Boora(khand) - 250gm', 'Deshi ghi(patanjali) - 500gm',
            'Aam ki Samidha (Bood) - 2kg', 'Fruits 🍒 - 2kg', 'Mithai - 1kg mix 5 type',
            'Paan k patte - 5pc', 'Foolmala - 2pc & khule fool', 'Matchbox - 1 pc',
            'Gangajal'
        ],
        homeItems: [
            'Thali - 4 pc', 'Lota - 2 pc', 'Katori - 2pc', 'Spoon🥄 - 2pc',
            'Havan kund ya tasla', 'Chowki - 1pc'
        ]
    },
    // --- New Havan Kits ---
    {
        id: 'navchandi-havan',
        name: 'Navchandi Havan / Chandi Path Samagri',
        category: 'havan',
        price: 5100,
        description: 'Grand Havan for Goddess Durga (Deep & Powerful)',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Havan Samagri (Special) - 2kg', 'Ghee - 2kg', 'Dry Fruits Mix - 1kg',
            'Honey - 250gm', 'Paan Leaves - 21', 'Supari - 21', 'Coconuts - 5',
            'Red Cloth - 2m', 'Chunri', 'Saree for Goddess', 'Shringar Box',
            'Navgraha Samidha', 'Bhojpatra', 'Kamal Gatta', 'Kumkum, Sindoor',
            'Large Havan Logs (50kg via local arrangement)', 'Fruits (5 types) - 5kg'
        ],
        homeItems: [
            'Large Havan Kund (Brick made preferred)', 'Big Vessels for Ghee', 'Multiple Thalis', 'Seating mats'
        ]
    },
    {
        id: 'sudarshan-havan',
        name: 'Sudarshan Havan Kit',
        category: 'havan',
        price: 2100,
        description: 'For Protection and Removal of Negativity',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'White Mustard seeds', 'Black Sesame (Kale Til)', 'Ghee - 1kg',
            'Havan Samagri', 'Tulsi Leaves (Plenty)', 'Lotus Flowers',
            'Yellow Cloth', 'Paan, Supari', 'Coconut', 'Camphor', 'Chandan'
        ],
        homeItems: [
            'Thali', 'Spoons', 'Havan Kund', 'Lota'
        ]
    },
    {
        id: 'rudra-havan',
        name: 'Maha Rudra Havan Kit',
        category: 'havan',
        price: 2500,
        description: 'For Lord Shiva - Health and Peace',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Black Til', 'Jau (Barley)', 'Ghee - 1.5kg', 'Belpatra (108)',
            'Shamipatra', 'Aak Flowers', 'Dhatura', 'Havan Samagri',
            'Samidha (Palash/Shami)', 'Sugar Candy', 'Honey', 'Gangajal',
            'Rudraksha needed for Sankalp'
        ],
        homeItems: [
            'Havan Kund', 'Copper Vessel (Lota)', 'Thali'
        ]
    },
    {
        id: 'gayatri-havan',
        name: 'Gayatri Havan Kit',
        category: 'havan',
        price: 1100,
        description: 'For Wisdom, Intellect and Peace',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Ghee - 500gm', 'Havan Samagri', 'Yellow Mustard', 'Agar tagar',
            'Nagkesar', 'Jatamasi', 'Samidha (Mango wood)', 'Camphor',
            'Yellow Cloth', 'Janeu', 'Supari'
        ],
        homeItems: [
            'Havan Kund', 'Thali', 'Spoon', 'Asana'
        ]
    },
    {
        id: 'bhoomi-pujan-havan',
        name: 'Bhoomi Pujan Havan Kit',
        category: 'havan',
        price: 3100,
        description: 'For Foundation Stone Ceremony',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            '5 Bricks (User to provide)', 'Kalash (Copper)', 'Sarvoshadhi',
            'Saptamrika (7 soils)', 'Panch Ratna (Gemstones imitation)',
            'Silver Snake & Egg (Nagin-Nag)', 'Ghee - 1kg', 'Havan Samagri',
            'Yellow/Red Cloth', 'Coconut', 'Durva', 'Mango Leaves'
        ],
        homeItems: [
            'Digging Tool (Phawda)', 'Ghamela', 'Water drum'
        ]
    },
    {
        id: 'dhanvantari-havan',
        name: 'Dhanvantari Havan (Health)',
        category: 'havan',
        price: 2100,
        description: 'For Recovery and Good Health',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Amrit Valli (Giloy)', 'Neem Leaves', 'Ghee', 'Havan Samagri',
            'Medicinal Herbs Mix', 'White Cloth', 'Kalash', 'Honey', 'Mishri'
        ],
        homeItems: [
            'Havan Kund', 'Clean Water', 'Thali'
        ]
    },

    // --- Additional Specialized Pooja Kits ---
    {
        id: 'shiv-abhishek',
        name: 'Shiv Rudrabhishek Kit',
        category: 'pooja',
        price: 1100,
        description: 'For elaborate Shiva Linga Abhishekam',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Milk (User)', 'Curd (User)', 'Ghee', 'Honey', 'Sugar', 'Ganga Jal',
            'Sugarcane Juice (User)', 'Bhasm', 'Belpatra', 'Dhatura', 'Aak ke phool',
            'Chandan (Red & White)', 'Janeu', 'Nariyal', 'Supari', 'Agarbatti'
        ],
        homeItems: [
            'Big Thali/Parat (for Abhishek)', 'Lota', 'Shiva Linga (if at home)'
        ]
    },
    {
        id: 'sunderkand-path',
        name: 'Sunderkand Path Kit',
        category: 'pooja',
        price: 501,
        description: 'For Hanuman Ji Worship',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roat (Sweet Rotis - User made)', 'Boondi Laddoo', 'Sindoor (Orange)',
            'Chameli Oil', 'Red Cloth', 'Janeu', 'Supari', 'Long, Elaichi',
            'Tulsi Dal', 'Flag (Dhwaya)'
        ],
        homeItems: [
            'Musical Instruments (Dholak/Manjira)', 'Asana', 'Ramcharitmanas Book'
        ]
    },
    {
        id: 'marriage-anniversary',
        name: 'Marriage Anniversary Puja Kit',
        category: 'pooja',
        price: 751,
        description: 'For Couple Blessings',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Garlands (2)', 'Sweets', 'Fruits', 'Roli, Chaval', 'Moli',
            'Green Bangles (for wife)', 'Chunri', 'Coconut', 'Havan Samagri (Small)',
            'Ghee - 250gm'
        ],
        homeItems: [
            'Photo of Wedding/Deity', 'Thali', 'Diya'
        ]
    },
    {
        id: 'car-puja',
        name: 'New Car / Vehicle Puja Kit',
        category: 'pooja',
        price: 351,
        description: 'For New Vehicle Blessing',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Lemon (4pc)', 'Green Chillies', 'Coconut', 'Roli', 'Moli',
            'Camphor', 'Incense Sticks', 'Mithai', 'Flowers (Marigold garland)'
        ],
        homeItems: [
            'Water bottle', 'Thali'
        ]
    },
    {
        id: 'kaal-sarp',
        name: 'Kaal Sarp Dosh Nivaran Kit',
        category: 'pooja',
        price: 3100,
        description: 'Special Puja for Rahu-Ketu pacification',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Lead Snakes (Naag Nagin)', 'Black Cloth', 'Blue Cloth', 'Black Til',
            'Urad Dal', 'Iron Nail', 'Oil', 'Ghee', 'Havan Samagri', 'Coconut',
            'Coal', 'Mustard Oil'
        ],
        homeItems: [
            'Old Clothes (to discard)', 'Winnowing Fan (Soop)', 'Thali'
        ]
    },
    {
        id: 'vivah-samagri',
        name: 'Vivah (Wedding) Detailed Samagri',
        category: 'pooja',
        price: 1000,
        description: 'Comprehensive list of items for Wedding Ceremony',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli - 50 gm', 'Moli - 2 pc', 'Haldi powder - 50gm', 'Chaval (Rice) - 250gm',
            'Supari - 7 pc', 'Long+elaichi - 10+10gm', 'Dhoopbatti - 1 pkt', 'Nariyal - 1pc',
            'Gola - 1pc', 'Janeu - 5pc', 'Kapoor - 50gm', 'Peela kapda - 1meter',
            'Chhoti towel - 1pc', 'Cotton - 10rs', 'Disposal (katori) - 2 pkt',
            'Hawan samgri - 250gm', 'Indra jou - 50gm', 'Kale til - 50g',
            'Boora(khand) - 250gm', 'Hath ka पंखा - 1', 'धान ki kheel - 100gm',
            'Mukut - 2', 'Deshi ghi(patanjali) - 500gm', 'Aam ki Samidha (Bood) - 2kg',
            'Fruits 🍒 - 2kg', 'Mithai - 1kg mix 5 type', 'Paan k patte - 5pc',
            'Foolmala - 2pc & khule fool', 'Matchbox - 1 pc', 'Gangajal',
            'Dahi - 100gm', 'Shahad(honey) - 50 gm'
        ],
        homeItems: [
            'Thali - 4 pc', 'Lota - 2 pc', 'Katori - 2pc', 'Spoon🥄 - 2pc',
            'Havan kund ya tasla', 'Chowki - 1pc'
        ]
    },
    {
        id: 'grah-pravesh',
        name: 'Grah Pravesh Puja Samagri',
        category: 'pooja',
        price: 1000,
        description: 'Complete Samagri for House Warming Ceremony',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli - 50 gm', 'Moli - 2 pc', 'Chaval (Rice) - 250gm', 'Supari - 7 pc',
            'Long+elaichi - 10+10gm', 'Dhoopbatti - 1 pkt', 'Nariyal - 1pc', 'Gola - 1pc',
            'Janeu - 5pc', 'Kapoor - 50gm', 'Peela kapda - 1meter', 'Chhoti towel - 1pc',
            'Cotton - 10rs', 'Disposal (katori) - 2 pkt', 'Hawan samgri - 250gm',
            'Indra jou - 50gm', 'Kale til - 50g', 'Boora(khand) - 250gm',
            'Deshi ghi(patanjali) - 500gm', 'Aam ki Samidha (Bood) - 2kg',
            'Fruits 🍒 - 2kg', 'Mithai - 1kg mix 5 type', 'Paan k patte - 5pc',
            'Foolmala - 2pc & khule fool', 'Matchbox - 1 pc', 'Gangajal',
            'Dahi - 100gm', 'Shahad(honey) - 50 gm', 'Kalash chhote - 2', 'Tulsi gamla - 1'
        ],
        homeItems: [
            'Thali - 4 pc', 'Lota - 2 pc', 'Katori - 2pc', 'Spoon🥄 - 2pc',
            'Havan kund ya tasla', 'Chowki - 1pc'
        ]
    },
    {
        id: 'ganesh-puja',
        name: 'Ganesh Puja Kit',
        category: 'pooja',
        price: 501,
        description: 'Complete Samagri for Ganesh Pujan',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli - 25 gm', 'Moli - 1 pc', 'Chaval (Rice) - 100gm', 'Supari - 5 pc',
            'Long+elaichi - 10 gm', 'Dhoopbatti - 1 pkt', 'Nariyal - 1pc',
            'Janeu - 2pc', 'Kapoor - 25gm', 'Red Cloth - 0.5m', 'Durva Grass',
            'Modak/Laddoo - 500gm', 'Paan leaves - 5pc', 'Flowers', 'Gangajal'
        ],
        homeItems: [
            'Thali - 1 pc', 'Lota - 1 pc', 'Diya - 1pc', 'Spoon - 1pc', 'Chowki - 1pc'
        ]
    },
    {
        id: 'lakshmi-puja',
        name: 'Lakshmi Puja Kit (Diwali)',
        category: 'pooja',
        price: 1100,
        description: 'Prosperity Kit for Mahalakshmi Pujan',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli, Moli, Chaval', 'Supari - 11 pc', 'Lotus Flowers', 'Rose Flowers',
            'Dhoop, Kapoor, Agarbatti', 'Janeu pair', 'Red Cloth - 1m', 'Yellow Cloth - 1m',
            'Paan leaves - 11pc', 'Fruits (5 types)', 'Sweets (White)', 'Gangajal',
            'Gomti Chakra - 5pc', 'Koudi - 5pc', 'Kamal Gatta - 5pc', 'Itra (Perfume)'
        ],
        homeItems: [
            'Thali - 2 pc', 'Lota - 1 pc', 'Silver Coin (optional)', 'Diya (Clay) - 11pc', 'Chowki'
        ]
    },
    {
        id: 'durga-puja',
        name: 'Durga Puja / Navratri Kit',
        category: 'pooja',
        price: 1500,
        description: 'Complete Kit for Devi Pujan and Ghat Sthapana',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli, Moli, Sindoor', 'Chaval', 'Supari - 9 pc', 'Nariyal (Water) - 1pc',
            'Chunri (Red) - 1pc', 'Red Cloth - 1m', 'Barley (Jau) - 100gm', 'Kalash (Earthen) - 1pc',
            'Mango Leaves', 'Cloves (Long) - 1 pkt', 'Cardamom', 'Camphor', 'Fruits',
            'Mata ka Shringar Box', 'Dhoop'
        ],
        homeItems: [
            'Thali', 'Lota', 'Diya (Akhand if needed)', 'Clean Soil (Mitti)', 'Chowki'
        ]
    },
    {
        id: 'saraswati-puja',
        name: 'Saraswati Puja Kit',
        category: 'pooja',
        price: 751,
        description: 'Wisdom & Education Puja Kit',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli, Chandan (Yellow)', 'Yellow Rice (Akshat)', 'Yellow Flowers (Marigold/Mustard)',
            'Yellow Cloth - 1m', 'Pen & Notebook', 'Supari, Long, Elaichi', 'Ber (Jujube fruit)',
            'Boondi / Yellow Sweets', 'Dhoop, Deep', 'Gangajal', 'Moli/Kalawa'
        ],
        homeItems: [
            'Thali', 'Lota', 'Musical Instrument / Books (for blessing)', 'Photo of Goddess'
        ]
    },
    {
        id: 'mahamrityunjaya-jap',
        name: 'Mahamrityunjaya Jap Kit',
        category: 'pooja',
        price: 2100,
        description: 'For Health and Longevity (Detailed)',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli, Moli, Bhasm (Ash)', 'Belpatra (108 pc)', 'Dhatura', 'Flower Garland',
            'Milk, Curd, Honey, Ghee, Sugar (Panchamrit)', 'Janeu', 'Kapoor', 'Black Til',
            'Havan Samagri - 1kg', 'Ghee - 1kg', 'Samidha (Wood)', 'Navgraha Samidha',
            'Fruits, Sweets', 'Gangajal', 'Rudraksha Mala (for Jap)'
        ],
        homeItems: [
            'Thali', 'Lotas - 2', 'Havan Kund', 'Mats for sitting', 'Spoons'
        ]
    },
    {
        id: 'navagraha-shanti',
        name: 'Navagraha Shanti Kit',
        category: 'pooja',
        price: 1500,
        description: 'Pacify all 9 Planets',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Navgraha Samidha (9 types wood)', 'Navgraha Cloths (9 colors)',
            'Navadhanya (9 grains)', 'Roli, Moli, Chaval', 'Ghee - 500gm', 'Havan Samagri',
            'Paan, Supari', 'Janeu', 'Kapoor', 'Fruits', 'Flowers', 'Dhoop'
        ],
        homeItems: [
            'Thali', 'Lota', 'Havan Kund', 'Chowki - 9 (small) or 1 large', 'Bowls - 9'
        ]
    },
    {
        id: 'namkaran-sanskar',
        name: 'Namkaran Sanskar Kit',
        category: 'pooja',
        price: 1100,
        description: 'Naming Ceremony Essentials',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli, Moli, Haldi', 'Rice', 'Honey', 'Curd', 'Ghee', 'Gangajal',
            'Kalash', 'Nariyal', 'Flowers', 'Garlands', 'Sweets', 'Paan Leaves',
            'Supari', 'Yellow Cloth', 'New Clothes for Baby (User sourced but listed)',
            'Dhoop, Deep'
        ],
        homeItems: [
            'Thali', 'Silver Spoon (for honey)', 'Bowl', 'Cradle (Decorated)'
        ]
    },
    {
        id: 'mundan-sanskar',
        name: 'Mundan Sanskar Kit',
        category: 'pooja',
        price: 751,
        description: 'First Haircut Ceremony Kit',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli, Moli, Rice', 'Dahi (Curd)', 'Turmeric (Haldi)', 'Atta / Dough',
            'Supari, Long, Elaichi', 'Flowers', 'Sweets', 'Scissors (Razor)',
            'Ganga Jal', 'Charanamrit items', 'Barber gifts (User)'
        ],
        homeItems: [
            'Thali', 'Lota', 'Warm Water', 'Towels'
        ]
    },
    {
        id: 'vastu-shanti',
        name: 'Vastu Shanti Kit',
        category: 'pooja',
        price: 2500,
        description: 'For Vastu Dosh Nivaran',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Roli, Moli, Rice', 'Vastu Yantra', 'Vastu Purush Idol (Small)',
            'Havan Samagri - 1kg', 'Ghee - 1kg', 'Navdhanya', 'Navgraha Samidha',
            'Paan, Supari', 'Flowers', 'Fruits', 'Nariyal', 'Red/White Cloth',
            'Vastu Flags', 'Toran'
        ],
        homeItems: [
            'Thali', 'Havan Kund', 'Digging tools (if Bhoomi Pujan)', 'Kalash', 'Chowki'
        ]
    },
    {
        id: 'office-opening',
        name: 'Office Opening / Business Kit',
        category: 'pooja',
        price: 2100,
        description: 'New Business Inauguration Kit',
        pandit: 'Pt. Teekendra Sharma Ji',
        items: [
            'Ganesh/Lakshmi Murti (Clay)', 'Roli, Moli, Chaval', 'Paan, Supari',
            'Flowers (Marigold garlands)', 'Mango Leaves (Toran)', 'Sweets (Laddoo)',
            'Coconut', 'Kalash', 'Dhoop, Deep, Agarbatti', 'Red Cloth', 'Ghee',
            'Havan Samagri (optional)', 'Swastik Sticker'
        ],
        homeItems: [
            'Thali', 'Lota', 'Safe/Tijori access', 'Account Books (Bahi Khata)'
        ]
    },
    // Rudraksh Collection (1 Mukhi to 12 Mukhi)
    {
        id: 'rudraksh-1',
        name: '1 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 3100,
        description: 'The supreme symbol of Lord Shiva himself. Brings eternal peace and liberation.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'The Ek Mukhi Rudraksha is considered the most auspicious gift of nature to mankind. It represents Lord Shiva and is ruled by the Sun. It is believed to bring immense power, wealth, and spiritual enlightenment to the wearer. It helps in attaining mental peace and deep meditation.',
        benefits: [
            'Helps in curing migraines and heart diseases.',
            'Increases confidence and leadership qualities.',
            'Brings spiritual enlightenment and material success.',
            'Balances the Sahasrara Chakra (Crown Chakra).'
        ],
        planet: 'Sun (Surya)',
        deity: 'Lord Shiva',
        mantra: 'Om Hreem Namah (ॐ ह्रीं नमः)'
    },
    {
        id: 'rudraksh-2',
        name: '2 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 501,
        description: 'Symbol of Ardhanarishvara (Shiva & Shakti). Unites relationships.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'The Do Mukhi Rudraksha symbolizes the united form of Lord Shiva and Goddess Parvati (Ardhanarishvara). It is the bead of unity and is best for improving relationships between couples, partners, and parents-children. It brings emotional stability.',
        benefits: [
            'Cures emotional instability and fear.',
            'Strengthens relationships and marital harmony.',
            'Cures ailments related to kidneys and intestines.',
            'Balances the Swadhisthana Chakra.'
        ],
        planet: 'Moon (Chandra)',
        deity: 'Ardhanarishvara',
        mantra: 'Om Namah (ॐ नमः)'
    },
    {
        id: 'rudraksh-3',
        name: '3 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 351,
        description: 'Symbol of Agni Dev. Burns past karma and boosts self-esteem.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Three Mukhi Rudraksha represents the Fire God (Agni). Just as fire burns everything to ashes, this bead burns the past sins and bad karma of the wearer. It is excellent for those suffering from inferiority complexes, fear, and depression.',
        benefits: [
            'Relieves stress, depression, and guilt.',
            'Cures stomach ailments and liver problems.',
            'Increases self-respect and confidence.',
            'Balances the Manipura Chakra.'
        ],
        planet: 'Mars (Mangal)',
        deity: 'Agni Dev',
        mantra: 'Om Kleem Namah (ॐ क्लीं नमः)'
    },
    {
        id: 'rudraksh-4',
        name: '4 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 251,
        description: 'Symbol of Lord Brahma. Enhances knowledge, creativity, and memory.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Four Mukhi Rudraksha represents Lord Brahma, the creator of the universe. It is highly recommended for students, teachers, writers, and researchers. It improves memory, vocal power, and intelligence.',
        benefits: [
            'Improves concentration and memory power.',
            'Enhances creativity and communication skills.',
            'Beneficial for respiratory problems & asthma.',
            'Balances the Vishuddha Chakra.'
        ],
        planet: 'Mercury (Budh)',
        deity: 'Lord Brahma',
        mantra: 'Om Hreem Namah (ॐ ह्रीं नमः)'
    },
    {
        id: 'rudraksh-5',
        name: '5 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 151,
        description: 'Symbol of Kalagni Rudra. The most common and powerful bead for general health.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Five Mukhi Rudraksha is the form of Kalagni Rudra (Lord Shiva). It is the most accessible and widely used bead. It brings overall health, mental peace, and protection from negative energies. It rectifies all voids and defects (Sins) of Jeeva.',
        benefits: [
            'Regulates blood pressure and heart ailments.',
            'Brings peace of mind and reduces stress.',
            'Protects from accidental death.',
            'Balances all Chakras generally.'
        ],
        planet: 'Jupiter (Brihaspati)',
        deity: 'Kalagni Rudra',
        mantra: 'Om Hreem Namah (ॐ ह्रीं नमः)'
    },
    {
        id: 'rudraksh-6',
        name: '6 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 401,
        description: 'Symbol of Lord Kartikeya. Grants focus, willpower, and victory.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Six Mukhi Rudraksha represents Lord Kartikeya, the son of Lord Shiva and commander of the celestial army. It gives the wearer immense willpower, grounding, and focus. It is excellent for managers, soldiers, and students.',
        benefits: [
            'Increases willpower and emotional stability.',
            'Good for reproductive health.',
            'Brings success in competitions and litigation.',
            'Balances the Muladhara Chakra.'
        ],
        planet: 'Venus (Shukra)',
        deity: 'Lord Kartikeya',
        mantra: 'Om Hreem Coom Namah (ॐ ह्रीं हूं नमः)'
    },
    {
        id: 'rudraksh-7',
        name: '7 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 551,
        description: 'Symbol of Mahalakshmi. Attracts wealth, fame, and abundance.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Seven Mukhi Rudraksha represents Goddess Mahalakshmi, the goddess of wealth. The wearer of this bead is blessed with good health, wealth, and fame. It is believed that poverty never touches the house where this bead is worshipped.',
        benefits: [
            'Attracts wealth and financial stability.',
            'Cures Saturn-related diseases (Paralysis, impotence).',
            'Brings fame and abundance.',
            'Balances the Manipura and Anahata Chakras.'
        ],
        planet: 'Saturn (Shani)',
        deity: 'Mahalakshmi',
        mantra: 'Om Hoom Namah (ॐ हूं नमः)'
    },
    {
        id: 'rudraksh-8',
        name: '8 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 701,
        description: 'Symbol of Lord Ganesha. Removes all obstacles and brings success.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Eight Mukhi Rudraksha is the form of Lord Ganesha, the Vignaharta (Remover of Obstacles). It gives the wearer the power to overcome all hurdles in life. It also nullifies the malefic effects of Rahu.',
        benefits: [
            'Removes obstacles and brings success in undertakings.',
            'Cures diseases of lungs, feet, and skin.',
            'Gives victory over enemies.',
            'Balances the Muladhara Chakra.'
        ],
        planet: 'Rahu',
        deity: 'Lord Ganesha',
        mantra: 'Om Hoom Namah (ॐ हूं नमः)'
    },
    {
        id: 'rudraksh-9',
        name: '9 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 901,
        description: 'Symbol of Goddess Durga. Grants immense energy, courage, and fearlessness.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Nine Mukhi Rudraksha represents Goddess Durga (Shakti). It is a bead of power and dynamism. It makes the wearer fearless and gives them the energy to face any challenge. It is excellent for women.',
        benefits: [
            'Removes fear of death and enemies.',
            'Controls anger and gives patience.',
            'Protects from nervous disorders.',
            'Balances the Sahasrara Chakra.'
        ],
        planet: 'Ketu',
        deity: 'Goddess Durga',
        mantra: 'Om Hreem Hoom Namah (ॐ ह्रीं हूं नमः)'
    },
    {
        id: 'rudraksh-10',
        name: '10 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 1100,
        description: 'Symbol of Lord Vishnu. Protects from black magic and negative energies.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Ten Mukhi Rudraksha represents Lord Vishnu, the preserver of the universe. It acts as a shield against all negative energies, black magic, and evil eyes. It brings peace and protection to the entire family.',
        benefits: [
            'Protects from negative energies and ghosts.',
            'Cures insomnia and restlessness.',
            'Brings legal victories.',
            'Balances all Chakras.'
        ],
        planet: 'None (Ruled by All Planets)',
        deity: 'Lord Vishnu',
        mantra: 'Om Hreem Namah (ॐ ह्रीं नमः)'
    },
    {
        id: 'rudraksh-11',
        name: '11 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 1500,
        description: 'Symbol of Lord Hanuman. Grants physical strength, wit, and wisdom.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Eleven Mukhi Rudraksha represents Lord Hanuman (Ekadash Rudra). It gives the wearer physical strength, courage, and wisdom. It is excellent for athletes, bodybuilders, and those seeking focus in meditation.',
        benefits: [
            'Increases physical strength and stamina.',
            'Improves concentration and decision-making.',
            'Protects during travel.',
            'Balances the Vishuddha Chakra.'
        ],
        planet: 'Mars (Mangal)',
        deity: 'Lord Hanuman',
        mantra: 'Om Hreem Hoom Namah (ॐ ह्रीं हूं नमः)'
    },
    {
        id: 'rudraksh-12',
        name: '12 Mukhi Rudraksh',
        category: 'rudraksh',
        price: 2100,
        description: 'Symbol of Surya Dev. Brings radiance, leadership, and vitality.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Twelve Mukhi Rudraksha represents the Sun God (Surya). It gives the wearer the brilliance and radiance of the Sun. It is the bead for leaders, politicians, and administrators. It cures diseases related to the eyes and bones.',
        benefits: [
            'Increases leadership qualities and charisma.',
            'Cures eye, skin, and heart diseases.',
            'Grants authority and power.',
            'Balances the Manipura Chakra.'
        ],
        planet: 'Sun (Surya)',
        deity: 'Lord Surya',
        mantra: 'Om Kraum Kshaum Raum Namah (ॐ क्रौं क्षौं रौं नमः)'
    },

    // Gemstones (Mani Patthar) with Detailed Info
    {
        id: 'gem-ruby',
        name: 'Ruby (Manik)',
        category: 'gemstone',
        price: 5500,
        description: 'The King of Gemstones. Enhances leadership, vitality, and authority.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Ruby is the gemstone of the Sun. It represents authority, dignity, and life force. Known as the "King of Gems," it instills confidence and leadership skills in the wearer. It is excellent for those in government or high-ranking positions.',
        benefits: [
            'Increases leadership and administrative skills.',
            'Improves relationship with father.',
            'Boosts vitality and immunity.',
            'Brings name and fame.'
        ],
        planet: 'Sun (Surya)',
        deity: 'Lord Surya',
        mantra: 'Om Suryaya Namah'
    },
    {
        id: 'gem-pearl',
        name: 'Pearl (Moti)',
        category: 'gemstone',
        price: 2100,
        description: 'Gemstone of the Moon. Calms the mind and stabilizes emotions.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Pearl is the gemstone of the Moon. It represents purity, calmness, and emotional balance. It is highly beneficial for those with a short temper or mental instability. It fosters love and understanding in relationships.',
        benefits: [
            'Calms the mind and reduces anger.',
            'Improves relationship with mother.',
            'Beneficial for cough, cold, and throat ailments.',
            'Enhances creativity.'
        ],
        planet: 'Moon (Chandra)',
        deity: 'Lord Shiva',
        mantra: 'Om Chandraya Namah'
    },
    {
        id: 'gem-coral',
        name: 'Red Coral (Moonga)',
        category: 'gemstone',
        price: 3200,
        description: 'Gemstone of Mars. Grants courage, physical strength, and energy.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Red Coral is the gemstone of Mars. It is a symbol of energy and vitality. It helps the wearer overcome fear, laziness, and enemies. It is excellent for those in the police, army, or sports.',
        benefits: [
            'Increases physical strength and courage.',
            'Protects from accidents and enemies.',
            'Helps in overcoming debts.',
            'Cures blood-related disorders.'
        ],
        planet: 'Mars (Mangal)',
        deity: 'Lord Hanuman',
        mantra: 'Om Angarakaya Namah'
    },
    {
        id: 'gem-emerald',
        name: 'Emerald (Panna)',
        category: 'gemstone',
        price: 6500,
        description: 'Gemstone of Mercury. Improves intellect, business, and communication.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Emerald is the gemstone of Mercury. It is the stone of wisdom and intellect. It enhances communication skills, business acumen, and memory. It is highly recommended for students, businessmen, and writers.',
        benefits: [
            'Enhances communication and speech.',
            'Boosts business and finance.',
            'Improves memory and focus.',
            'Calms the nervous system.'
        ],
        planet: 'Mercury (Budh)',
        deity: 'Lord Ganesh',
        mantra: 'Om Budhaya Namah'
    },
    {
        id: 'gem-yellow-sapphire',
        name: 'Yellow Sapphire (Pukhraj)',
        category: 'gemstone',
        price: 7500,
        description: 'Gemstone of Jupiter. Brings immense wisdom, wealth, and prosperity.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Yellow Sapphire is the gemstone of Jupiter. It is one of the most auspicious stones, bringing wealth, prosperity, and spiritual knowledge. It is excellent for financial stability and for women seeking marriage.',
        benefits: [
            'Attracts wealth and prosperity.',
            'Promotes spiritual knowledge and wisdom.',
            'Good for marriage prospects.',
            'Improves digestion and liver health.'
        ],
        planet: 'Jupiter (Brihaspati)',
        deity: 'Lord Vishnu',
        mantra: 'Om Brihaspataye Namah'
    },
    {
        id: 'gem-diamond-sub',
        name: 'American Diamond (Zircon)',
        category: 'gemstone',
        price: 1500,
        description: 'Substitute for Diamond (Venus). Enhances luxury, art, and love.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'American Diamond (Zircon) is a high-quality substitute for Diamond, ruling the planet Venus. It brings luxury, comfort, and artistic success to the wearer. It enhances love and marital bliss.',
        benefits: [
            'Increases attraction and charm.',
            'Brings luxury and comfort.',
            'Success in creative fields.',
            'Improves marital relationship.'
        ],
        planet: 'Venus (Shukra)',
        deity: 'Goddess Lakshmi',
        mantra: 'Om Shukraya Namah'
    },
    {
        id: 'gem-blue-sapphire',
        name: 'Blue Sapphire (Neelam)',
        category: 'gemstone',
        price: 8500,
        description: 'Gemstone of Saturn. The fastest acting stone for discipline and success.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Blue Sapphire is the gemstone of Saturn. It is a very powerful stone that can change one\'s life instantly. It brings discipline, focus, and immense wealth. However, it should be worn only after consultation.',
        benefits: [
            'Brings instant wealth and success.',
            'Removes lethargy and makes one disciplined.',
            'Protects from hidden enemies.',
            'Cures joint pain and arthritis.'
        ],
        planet: 'Saturn (Shani)',
        deity: 'Lord Bhairav',
        mantra: 'Om Shanischaraaya Namah'
    },
    {
        id: 'gem-hessonite',
        name: 'Hessonite (Gomed)',
        category: 'gemstone',
        price: 2500,
        description: 'Gemstone of Rahu. Protects from confusion and political opposition.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Hessonite Garnet is the gemstone of Rahu. It helps in clearing confusion and bringing clarity of mind. It protects the wearer from political games, sudden losses, and hidden enemies.',
        benefits: [
            'Clears mental confusion.',
            'Brings success in politics and PR.',
            'Cures gastric and digestive problems.',
            'Protects from sudden misfortunes.'
        ],
        planet: 'Rahu',
        deity: 'Goddess Durga',
        mantra: 'Om Rahave Namah'
    },
    {
        id: 'gem-catseye',
        name: 'Cats Eye (Lehsunia)',
        category: 'gemstone',
        price: 2500,
        description: 'Gemstone of Ketu. Enhances spiritual growth and protects from accidents.',
        pandit: 'Pt. Teekendra Sharma Ji',
        longDescription: 'Cat\'s Eye is the gemstone of Ketu. It is a mystical stone that enhances intuition and spiritual awareness. It protects the wearer from accidents, scandals, and sudden financial losses.',
        benefits: [
            'Enhances intuition and spirituality.',
            'Protects from accidents and supernatural forces.',
            'Helps in liberation (Moksha).',
            'Recovers lost wealth.'
        ],
        planet: 'Ketu',
        deity: 'Lord Ganesha',
        mantra: 'Om Ketave Namah'
    }
];
