// Core Type Definitions for Bhuteshwar Mandir

// Event Types
export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    image: string;
    type: 'Festival' | 'Regular';
}

// Pandit Types
export interface Pandit {
    id: number;
    name: string;
    photo: string;
    specialization: string;
    experience: string;
    languages: string[];
    whatsapp: string;
    description: string;
    expertise: string[];
}

// Puja Types
export type PujaCategoryKey = 'RECENT' | 'COMMON' | 'DEITY' | 'LIFE_EVENT' | 'DOSH_NIVARAN' | 'DEVOTIONAL' | 'SPECIAL';

export interface PujaCategories {
    RECENT: string;
    COMMON: string;
    DEITY: string;
    LIFE_EVENT: string;
    DOSH_NIVARAN: string;
    DEVOTIONAL: string;
    SPECIAL: string;
}

export interface Puja {
    id: number;
    name: string;
    category: PujaCategoryKey;
    duration: string;
    price: string;
    description: string;
}

// Sloka Types
export interface Sloka {
    id: number;
    sanskrit: string;
    transliteration: string;
    translation: string;
    benefit: string;
}

// Component Prop Types
export interface PanditCardProps {
    pandit: Pandit;
    showBookButton?: boolean;
}

export interface EventCardProps {
    event: Event;
}

export interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface BookingFormProps {
    selectedPuja?: string;
    selectedPandit?: number;
}
