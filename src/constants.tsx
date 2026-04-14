
import { Destination, CalendarEvent, Testimonial, FAQItem, Product, PartnerDetail } from './types';

export const DESTINATIONS: Destination[] = [
  { 
    id: "sao-pedro",
    city: "São Pedro - SP", 
    description: "Famosa Serra do Itaqueri com trilhas técnicas e vistas de tirar o fôlego.", 
    image: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    itinerary: [
      { day: "Dia 1", title: "Subida da Serra", desc: "Abordagem técnica da face sul com obstáculos de erosão e pedras soltas." },
      { day: "Dia 2", title: "Cachoeiras e Mirantes", desc: "Exploração do platô superior visitando os principais pontos panorâmicos." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400"
    ],
    shorts: [
      { id: "dQw4w9WgXcQ", title: "Lama em SP" },
      { id: "dQw4w9WgXcQ", title: "Visual Incrível" }
    ]
  },
  { 
    id: "analandia",
    city: "Analândia - SP", 
    description: "Cuscuzeiro e Morro do Camelo em paisagens únicas do interior paulista.", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    itinerary: [
      { day: "Dia 1", title: "Circuito das Areias", desc: "Navegação em trechos arenosos ao redor do Morro do Cuscuzeiro." },
      { day: "Dia 2", title: "Trilha do Camelo", desc: "Acesso a áreas exclusivas de fazendas com visual para o Morro do Camelo." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1516483642144-7f100ef1ad88?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1433086466336-76c061706a1d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1472396961695-1ad22a07c33c?auto=format&fit=crop&q=80&w=400"
    ]
  },
  { 
    id: "jaguariaiva",
    city: "Jaguariaíva - PR", 
    description: "Canyons, cachoeiras e lagos deslumbrantes no oitavo maior canyon do mundo.", 
    image: "https://images.unsplash.com/photo-1433086466336-76c061706a1d?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
    itinerary: [
      { day: "Dia 1", title: "Casca d'Anta", desc: "Visita à queda monumental e trilha do parque nacional." },
      { day: "Dia 2", title: "Rota dos Queijos", desc: "Off-road leve visitando produtores artesanais e a parte alta da serra." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1472396961695-1ad22a07c33c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400"
    ]
  },
  { 
    id: "internacional",
    city: "Argentina & Chile", 
    description: "Expedição Internacional pelos Andes, desertos e lagos altiplânicos.", 
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200",
    itinerary: [
      { day: "Dia 1", title: "Luminosa", desc: "O trecho mais temido e belo com subidas íngremes em solo instável." },
      { day: "Dia 2", title: "Chegada em Aparecida", desc: "Descida da serra e entrada triunfal na basílica pelo caminho histórico." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1472396961695-1ad22a07c33c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&get=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400"
    ]
  },
];

export const PRODUCTS: Product[] = [
  { id: "1", name: "Camiseta Oficial 2026", price: "R$ 129,00", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400", category: "Vestuário", link: "https://wa.me/5519971475706" },
  { id: "2", name: "Boné Ação e Tração", price: "R$ 89,00", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400", category: "Acessórios", link: "https://wa.me/5519971475706" },
  { id: "3", name: "Capa de Estepe Premium", price: "R$ 249,00", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=400", category: "Equipamentos", link: "https://wa.me/5519971475706" },
  { id: "4", name: "Cinta de Reboque 10T", price: "R$ 189,00", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400", category: "Segurança", link: "https://wa.me/5519971475706" },
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
    month: "Março",
    events: [
      { location: "Itapira", dates: "14 e 15" },
      { location: "Jaguariaíva", dates: "28 e 29" }
    ]
  },
  {
    month: "Abril",
    events: [
      { location: "Serra da Canastra", dates: "03, 04, 05" },
      { location: "São Pedro", dates: "25 e 26" }
    ]
  },
  {
    month: "Maio",
    events: [
      { location: "Jaguariaíva", dates: "01, 02, 03" },
      { location: "Analândia", dates: "23 e 24" }
    ]
  },
  {
    month: "Junho",
    events: [
      { location: "São Pedro", dates: "06 e 07" },
      { location: "Curso Iniciantes 4x4", dates: "20 (Sábado)" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Ricardo Silva", role: "Proprietário Hilux", text: "Experiência sensacional! O cuidado com a família e a segurança no comboio são impecáveis.", avatar: "https://i.pravatar.cc/150?u=ricardo" },
  { name: "Mariana Costa", role: "Aventureira Jeep", text: "Mesmo com carro original, consegui aproveitar tudo. As paisagens da Serra da Canastra são inesquecíveis.", avatar: "https://i.pravatar.cc/150?u=mariana" },
  { name: "Fernando Souza", role: "Pai e Off-roader", text: "O melhor de tudo é o ambiente familiar. Meus filhos adoraram o contato com a natureza.", avatar: "https://i.pravatar.cc/150?u=fernando" },
];

export const FAQ: FAQItem[] = [
  { question: "Posso ir de Buggy ou Gaiola?", answer: "Não, infelizmente os terrenos onde andamos necessitam da tração 4x4 integrada, inviabilizando esses veículos." },
  { question: "Posso ir de Quadriciclo ou UTV?", answer: "Sim! Esses veículos possuem tração 4x4 e são muito bem-vindos em nossos passeios e expedições." },
  { question: "Veículos originais podem participar?", answer: "Com certeza. A maioria dos nossos clientes possui veículos originais. Nossas trilhas são planejadas para eles." },
  { question: "O que levar no passeio?", answer: "Recomendamos lanches rápidos, bastante água, protetor solar e repelente." },
];

export const PARTNERS = [
  "BFGoodrich", "Old Man Emu", "WARN", "ARB 4x4", "Ironman 4x4", "Troller", "Toyota Gazoo Racing"
];
