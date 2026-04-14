
export interface Destination {
  id: string;
  city: string;
  description: string;
  image: string;
  videoUrl?: string;
  itinerary?: { day: string; title: string; desc: string }[];
  gallery?: string[];
  shorts?: { id: string; title: string }[];
}

export interface CalendarEvent {
  month: string;
  events: {
    location: string;
    dates: string;
  }[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  link: string;
}

export interface PartnerDetail {
  name: string;
  logo: string;
  description: string;
  contactLink: string;
}
