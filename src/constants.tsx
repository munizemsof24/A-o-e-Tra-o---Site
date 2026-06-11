
import { Destination, CalendarEvent, Testimonial, FAQItem, Product, PartnerDetail } from './types';

export const DESTINATIONS: Destination[] = [
  { 
    id: "sao-pedro",
    city: "São Pedro - SP", 
    description: "Famosa Serra do Itaqueri com trilhas técnicas e vistas de tirar o fôlego.", 
    image: "https://i.ibb.co/ShvkHDK/DJI-20250726171110-0555-D.jpg",
    videoUrl: "https://www.youtube.com/embed/OYUYbBe9ngI?start=3",
    itinerary: [
      { day: "Dia 1", title: "Subida da Serra", desc: "Abordagem técnica da face sul com obstáculos de erosão e pedras soltas." },
      { day: "Dia 2", title: "Cachoeiras e Mirantes", desc: "Exploração do platô superior visitando os principais pontos panorâmicos." }
    ],
    gallery: [
      "https://i.ibb.co/7JqV3SGj/IMG-6417.jpg",
      "https://i.ibb.co/p6Y58LxQ/IMG-6427.jpg",
      "https://i.ibb.co/67d9Q27J/IMG-6082.jpg",
      "https://i.ibb.co/ch2BkqXt/IMG-20250519-WA0045.jpg",
      "https://i.ibb.co/JWHFgvRj/Imagem-do-Whats-App-de-2025-05-18-s-20-09-06-41a21302.jpg",
      "https://i.ibb.co/2YHk0ZSr/Imagem-do-Whats-App-de-2025-05-18-s-20-08-52-e33ada95.jpg",
      "https://i.ibb.co/wrywdwky/Imagem-do-Whats-App-de-2025-05-18-s-20-08-45-ad744863.jpg",
      "https://i.ibb.co/ymKrfsj6/Imagem-do-Whats-App-de-2025-05-18-s-20-27-45-60bc6091.jpg",
      "https://i.ibb.co/SXWBCsB8/Imagem-do-Whats-App-de-2025-05-18-s-20-18-31-31d40333.jpg",
      "https://i.ibb.co/ksrwc8C7/IMG-6164.jpg",
      "https://i.ibb.co/DS88hGf/IMG-6342.jpg"
    ],
    shorts: [
      { id: "YEieWOxCj1c", title: "Ação 1" },
      { id: "gLSwbZve5DM", title: "Ação 2" },
      { id: "VPl9jfXDOPU", title: "Ação 3" },
      { id: "yfmzrIGLbvk", title: "Ação 4" }
    ]
  },
  { 
    id: "analandia",
    city: "Analândia - SP", 
    description: "Cuscuzeiro e Morro do Camelo em paisagens únicas do interior paulista.", 
    image: "https://i.ibb.co/C31HHgWS/DJI-20250830173929-0368-D.jpg",
    videoUrl: "https://www.youtube.com/embed/wep0DYb7k1g",
    itinerary: [
      { day: "Dia 1", title: "Circuito das Areias", desc: "Navegação em trechos arenosos ao redor do Morro do Cuscuzeiro." },
      { day: "Dia 2", title: "Trilha do Camelo", desc: "Acesso a áreas exclusivas de fazendas com visual para o Morro do Camelo." }
    ],
    gallery: [
      "https://i.ibb.co/3mWNY55R/IMG-1408.jpg",
      "https://i.ibb.co/WWq4NQSM/IMG-1442.jpg",
      "https://i.ibb.co/pvKwqFbL/IMG-1605.jpg",
      "https://i.ibb.co/67C4b9zR/IMG-1702.jpg",
      "https://i.ibb.co/76t6YBn/IMG-1737.jpg",
      "https://i.ibb.co/kfvzQ4T/IMG-2459.jpg",
      "https://i.ibb.co/xtcYYPT9/IMG-2496.jpg",
      "https://i.ibb.co/8LXxsZ8w/IMG-2605.jpg"
    ],
    shorts: [
      { id: "VcUeWgErd28", title: "Ação 1" },
      { id: "A_TV4VhArcw", title: "Ação 2" },
      { id: "3c6RuxI0nFY", title: "Ação 3" }
    ]
  },
  { 
    id: "jaguariaiva",
    city: "Jaguariaíva - PR", 
    description: "Canyons, cachoeiras e lagos deslumbrantes no oitavo maior canyon do mundo.", 
    image: "https://i.ibb.co/0jQk3kRP/DJI-20250208143739-0289-D.jpg",
    itinerary: [
      { day: "Dia 1", title: "Entrada no Canyon", desc: "Navegação pelo leito de rios e acesso às fendas monumentais." },
      { day: "Dia 2", title: "Parque Estadual", desc: "Trilhas por dentro da mata preservada com paradas em quedas d'água." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1433086466336-76c061706a1d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1472396961695-1ad22a07c33c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400"
    ]
  },
  { 
    id: "canastra",
    city: "Serra da Canastra - MG", 
    description: "Berço do Rio São Francisco e queijos premiados em Minas Gerais.", 
    image: "https://i.ibb.co/CsS9LNpS/IMG-7811.jpg",
    itinerary: [
      { day: "Dia 1", title: "Casca d'Anta", desc: "Visita à queda monumental e trilha do parque nacional." },
      { day: "Dia 2", title: "Rota dos Queijos", desc: "Off-road leve visitando produtores artesanais e a parte alta da serra." }
    ],
    gallery: [
      "https://i.ibb.co/7JqV3SGj/IMG-6417.jpg",
      "https://i.ibb.co/p6Y58LxQ/IMG-6427.jpg",
      "https://i.ibb.co/67d9Q27J/IMG-6082.jpg",
      "https://i.ibb.co/ch2BkqXt/IMG-20250519-WA0045.jpg",
      "https://i.ibb.co/JWHFgvRj/Imagem-do-Whats-App-de-2025-05-18-s-20-09-06-41a21302.jpg",
      "https://i.ibb.co/2YHk0ZSr/Imagem-do-Whats-App-de-2025-05-18-s-20-08-52-e33ada95.jpg",
      "https://i.ibb.co/wrywdwky/Imagem-do-Whats-App-de-2025-05-18-s-20-08-45-ad744863.jpg",
      "https://i.ibb.co/ymKrfsj6/Imagem-do-Whats-App-de-2025-05-18-s-20-27-45-60bc6091.jpg",
      "https://i.ibb.co/SXWBCsB8/Imagem-do-Whats-App-de-2025-05-18-s-20-18-31-31d40333.jpg",
      "https://i.ibb.co/ksrwc8C7/IMG-6164.jpg",
      "https://i.ibb.co/DS88hGf/IMG-6342.jpg"
    ]
  },
  { 
    id: "internacional",
    city: "Argentina & Chile", 
    description: "Expedição Internacional pelos Andes, desertos e lagos altiplânicos.", 
    image: "https://i.ibb.co/VcZLXHZL/Whats-App-Image-2026-05-07-at-14-21-54.jpg",
    itinerary: [
      { day: "Semana 1", title: "Travessia dos Andes", desc: "Paso de Jama e deserto do Atacama. Altitude e paisagens lunares." },
      { day: "Semana 2", title: "Lagos e Vulcões", desc: "Navegação pela rota dos sete lagos e subida aos pés de vulcões ativos." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1472396961695-1ad22a07c33c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400"
    ]
  },
  { 
    id: "caminho-fe",
    city: "Caminho da Fé", 
    description: "Conexão espiritual e trilhas de tirar o fôlego pela Serra da Mantiqueira.", 
    image: "https://i.ibb.co/SDqcr9r2/IMG-8376.avif",
    videoUrl: "https://www.youtube.com/embed/wep0DYb7k1g",
    itinerary: [
      { day: "Dia 1", title: "Luminosa", desc: "O trecho mais temido e belo com subidas íngremes em solo instável." },
      { day: "Dia 2", title: "Chegada em Aparecida", desc: "Descida da serra e entrada triunfal na basílica pelo caminho histórico." }
    ],
    gallery: [
      "https://i.ibb.co/0y8G0Hb8/IMG-20250518-WA0031.jpg",
      "https://i.ibb.co/7JqV3SGj/IMG-6417.jpg",
      "https://i.ibb.co/p6Y58LxQ/IMG-6427.jpg",
      "https://i.ibb.co/67d9Q27J/IMG-6082.jpg",
      "https://i.ibb.co/ch2BkqXt/IMG-20250519-WA0045.jpg",
      "https://i.ibb.co/JWHFgvRj/Imagem-do-Whats-App-de-2025-05-18-s-20-09-06-41a21302.jpg",
      "https://i.ibb.co/2YHk0ZSr/Imagem-do-Whats-App-de-2025-05-18-s-20-08-52-e33ada95.jpg",
      "https://i.ibb.co/wrywdwky/Imagem-do-Whats-App-de-2025-05-18-s-20-08-45-ad744863.jpg",
      "https://i.ibb.co/ymKrfsj6/Imagem-do-Whats-App-de-2025-05-18-s-20-27-45-60bc6091.jpg",
      "https://i.ibb.co/SXWBCsB8/Imagem-do-Whats-App-de-2025-05-18-s-20-18-31-31d40333.jpg",
      "https://i.ibb.co/ksrwc8C7/IMG-6164.jpg",
      "https://i.ibb.co/DS88hGf/IMG-6342.jpg"
    ]
  },
];

export const PRODUCTS: Product[] = [
  { id: "1", name: "Camiseta Oficial 2026", price: "R$ 80,00", image: "https://i.ibb.co/24fcfZp/Gemini-Generated-Image-6k5vmf6k5vmf6k5v.png", category: "Vestuário", link: "https://wa.me/5519971475706" },
  { id: "2", name: "Boné Ação e Tração", price: "R$ 50,00", image: "https://i.ibb.co/BV8fxv8m/Gemini-Generated-Image-yal8vkyal8vkyal8.png", category: "Acessórios", link: "https://wa.me/5519971475706" },
  { id: "3", name: "Nécessaire", price: "R$ 50,00", image: "https://i.ibb.co/jkW7ZSpD/Gemini-Generated-Image-sg7zjwsg7zjwsg7z.png", category: "Equipamentos", link: "https://wa.me/5519971475706" },
  { id: "4", name: "Bandana Ação e Tração", price: "R$ 30,00", image: "https://i.ibb.co/Gfdq1t11/Gemini-Generated-Image.png", category: "Segurança", link: "https://wa.me/5519971475706" },
];

export const PARTNER_DETAILS: PartnerDetail[] = [
  {
    name: "BFGoodrich",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/BFGoodrich_logo.svg/1200px-BFGoodrich_logo.svg.png",
    description: "Líder mundial em pneus off-road de alta performance, garantindo tração em qualquer terreno.",
    contactLink: "https://wa.me/5519971475706"
  },
  {
    name: "ARB 4x4",
    logo: "https://www.arb.com.au/wp-content/themes/arb/assets/img/arb-logo.svg",
    description: "Equipamentos australianos de elite para expedições, de bloqueios a suspensões reforçadas.",
    contactLink: "https://wa.me/5519971475706"
  },
  {
    name: "Old Man Emu",
    logo: "https://www.arb.com.au/wp-content/uploads/2015/02/ome-logo.png",
    description: "Sistemas de suspensão projetados para o máximo conforto e controle em situações extremas.",
    contactLink: "https://wa.me/5519971475706"
  },
  {
    name: "WARN",
    logo: "https://www.warn.com/static/version1709632837/frontend/Warn/base/en_US/images/logo.svg",
    description: "Os guinchos mais confiáveis do mundo, parceiros essenciais em qualquer resgate off-road.",
    contactLink: "https://wa.me/5519971475706"
  }
];

export const CALENDAR: CalendarEvent[] = [
  {
    month: "Agosto",
    events: [
      { location: "Curso Iniciantes 4x4", dates: "Dia 01 (Sábado)" },
      { location: "Serras Altas da Mantiqueira", dates: "Dias 08 e 09" },
      { location: "Itapira", dates: "Dias 15 e 16" },
      { location: "São Pedro", dates: "Dias 22 e 23" }
    ]
  },
  {
    month: "Setembro",
    events: [
      { location: "Caminho da Fé", dates: "Dias 05, 06 e 07" },
      { location: "Serras Altas da Mantiqueira", dates: "Dias 26 e 27" }
    ]
  },
  {
    month: "Outubro",
    events: [
      { location: "Jalapão", dates: "De 07 à 14" },
      { location: "São Pedro", dates: "Dias 17 e 18" },
      { location: "Serras Altas da Mantiqueira", dates: "Dias 24 e 25" },
      { location: "Jaguariaíva", dates: "Dias 31, 01 e 02" }
    ]
  },
  {
    month: "Novembro",
    events: [
      { location: "São Pedro", dates: "Dias 07 e 08" },
      { location: "Analândia", dates: "Dias 14 e 15" },
      { location: "Serra da Canastra", dates: "Dias 20, 21 e 22" },
      { location: "Curso Iniciantes 4x4", dates: "Dia 28 (Sábado)" }
    ]
  },
  {
    month: "Dezembro",
    events: [
      { location: "São Pedro", dates: "Dias 05 e 06" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Débora e João Pedro", role: "Fartura-SP", text: "Participar da expedição em Jaguariaíva-PR foi uma experiência incrível, com trilhas bem planejadas, paisagens espetaculares e um ambiente familiar que faz toda a diferença. Com certeza recomendamos a Ação e Tração para quem quer viver o off-road de verdade com organização e qualidade.", avatar: "https://i.ibb.co/sJbSb5Qd/d1.png" },
  { name: "Giovanna Landgraf", role: "Pirassununga-SP", text: "Participar da expedição em Itapira-SP pela Rota 32 foi uma experiência incrível, com trilhas bem organizadas, paisagens lindas e aquele clima de parceria do começo ao fim. Foi um passeio leve, seguro e ao mesmo tempo cheio de aventura. Com certeza recomendo a Ação e Tração para quem quer viver o off-road de verdade.", avatar: "https://i.ibb.co/jkCH11pJ/d2.png" },
  { name: "Rafael e Flávia", role: "Taboão da Serra-SP", text: "Participar da expedição em São Pedro-SP foi nossa primeira experiência em trilha, e foi incrível! Tudo muito bem organizado, ambiente super acolhedor e uma aventura que superou nossas expectativas. Agora estamos amando o off-road — com certeza vem muito mais por aí!", avatar: "https://i.ibb.co/bgyD2Vct/d3.png" },
];

export const FAQ: FAQItem[] = [
  { question: "Posso ir de Buggy ou Gaiola?", answer: "Não, infelizmente os terrenos onde andamos necessitam da tração 4x4 integrada, inviabilizando esses veículos." },
  { question: "Posso ir de Quadriciclo ou UTV?", answer: "Sim! Esses veículos possuem tração 4x4 e são muito bem-vindos em nossos passeios e expedições." },
  { question: "Veículos originais podem participar?", answer: "Com certeza. A maioria dos nossos clientes possui veículos originais. Nossas trilhas são planejadas para eles." },
  { question: "O que levar no passeio?", answer: "Recomendamos lanches rápidos, bastante água, protetor solar e repelente." },
];

export const PARTNERS = [
  "BYD SHARK", "RECANTO DAS SERIEMAS", "MORADA DA SERRA", "ACERO BOTAS", 
  "JR AMORTECEDORES", "CACHOEIRA BAR DO VALENTIM", "BAR MORRO DO FOÇÃO", 
  "ESTAÇÃO DA CACHAÇA SÃO PEDRO", "SERRA DO ITAQUERI", "SÍTIO COLONINHA", 
  "QUEIJO VALE DA GURITA", "POUSADA LAGO AZUL"
];
