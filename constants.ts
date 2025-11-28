import { Project, ProjectCategory, ExperienceItem, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: '13824409506',
  email: '123mingone@gmail.com',
  wechat: 'MingOne'
};

export const SKILLS = [
  'PS', 'AI', 'Figma', 'XD', 'Blender', 'C4D', 'Nomad', 'Midjourney', 'Stable Diffusion', 'PPT'
];

export const TAGS = [
  'UI Design', 'Visual Identity', 'AIGC', '3D Modeling', 'Brand Strategy', 'Operations Design'
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    period: '2025.2 - Present',
    company: 'Qinglong AI Mobile Games',
    role: 'Visual Designer',
    description: [
      'Responsible for the visual system of the platform.',
      'Includes: VI design, store signage, course packaging (brochures, posters), App interface design.'
    ]
  },
  {
    id: '2',
    period: '2022.10 - 2025.2',
    company: 'Heshang Commercial Co., Ltd.',
    role: 'Visual Designer',
    description: [
      'Responsible for e-commerce design outsourcing for brands like Glasslock and Supor.'
    ]
  },
  {
    id: '3',
    period: '2019.5 - 2022.10',
    company: 'Joyrun (Yue Pao Quan)',
    role: 'Senior UX Designer / Visual Designer',
    description: [
      'Projects: Gritti (App), Joyrun Metaverse Avatar, Joyrun RFT God Beast.',
      'Responsible for UX design of main business lines and establishing UI system specifications.',
      'Designed H5 marketing campaigns and event materials.'
    ]
  },
  {
    id: '4',
    period: '2018.4 - 2019.5',
    company: 'Vanke Meisha Kindergarten',
    role: 'Visual Designer',
    description: [
      'Responsible for brand VI formulation.',
      'Included park environment creation, brand VI, and promotional materials.',
      'Coordinated with marketing for offline event material design.'
    ]
  }
];

export const PROJECTS: Project[] = [
  // UI / App
  {
    id: 'p1',
    title: 'Qinglong AI Gaming',
    category: ProjectCategory.UI,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    description: 'Cyberpunk aesthetic game supermarket application interface design.',
    client: 'Qinglong AI',
    date: '2025',
    role: 'Lead UI Designer',
    technologies: ['Figma', 'Midjourney', 'Illustrator'],
    longDescription: 'Designed the comprehensive visual system for the Qinglong AI Mobile Games platform. The project required a futuristic, cyberpunk aesthetic to appeal to hardcore gamers. Responsibilities included the main App interface, store signage systems, and promotional course packaging.',
    gallery: [
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop'
    ]
  },
  {
    id: 'p2',
    title: 'Gritti Web3 Running',
    category: ProjectCategory.UI,
    image: 'https://images.unsplash.com/photo-1517130038641-a777d04afb3c?q=80&w=2070&auto=format&fit=crop',
    description: 'Play-to-earn Web3 running app with sneaker NFT mechanics.',
    client: 'Joyrun',
    date: '2022',
    role: 'Senior Product Designer',
    technologies: ['Sketch', 'After Effects', 'Blender'],
    longDescription: 'Led the UI/UX design for Gritti, a Web3 "Move-to-Earn" application. The challenge was to simplify complex blockchain concepts (wallets, minting, staking) into a user-friendly fitness interface. I established the UI system specifications and designed the core run-tracking experience.',
    gallery: [
      'https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'p3',
    title: 'Joyrun Activity Hub',
    category: ProjectCategory.UI,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
    description: 'Interactive activity center and user profile designs for millions of users.',
    client: 'Joyrun',
    date: '2021',
    role: 'UI Designer',
    technologies: ['Figma', 'Principle'],
    longDescription: 'Redesigned the User Center and Activity Hub for the Joyrun app. Focused on increasing user retention through gamified elements and clearer data visualization of running statistics.',
    gallery: [
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  
  // 3D / NFT
  {
    id: 'p4',
    title: 'Cyberpunk Avatar Series',
    category: ProjectCategory.THREE_D,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
    description: 'High-fidelity 3D character design for virtual metaverse identity.',
    client: 'Metaverse Project',
    date: '2022',
    role: '3D Artist',
    technologies: ['Blender', 'Substance Painter'],
    longDescription: 'Created a series of 3D avatars for a metaverse social platform. The focus was on optimizing low-poly models for real-time rendering while maintaining high visual fidelity through baked textures.',
    gallery: [
      'https://images.unsplash.com/photo-1633355444132-695d5876cd00?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop'
    ]
  },
  {
    id: 'p5',
    title: 'New Chinese Style NFT',
    category: ProjectCategory.THREE_D,
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698b98d?q=80&w=1932&auto=format&fit=crop',
    description: 'Fusion of traditional Chinese aesthetics with modern 3D rendering.',
    client: 'Personal Work',
    date: '2023',
    role: '3D Generalist',
    technologies: ['C4D', 'Octane'],
    longDescription: 'An artistic exploration combining traditional Chinese cultural symbols (Jade, Porcelain) with cyberpunk lighting and materials. Minted as an NFT collection.',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop'
    ]
  },
  {
    id: 'p6',
    title: '3D Food & Toys',
    category: ProjectCategory.THREE_D,
    image: 'https://images.unsplash.com/photo-1629814144365-d603a1da7c8a?q=80&w=2070&auto=format&fit=crop',
    description: 'Nomad Sculpt exercises creating stylized food and toy models.',
    client: 'Personal Study',
    date: '2023',
    role: '3D Artist',
    technologies: ['Nomad Sculpt', 'iPad'],
    longDescription: 'Daily sculpting exercises using Nomad Sculpt on iPad. Focused on shape language, stylized lighting, and material expression of soft plastics and food textures.',
    gallery: [
      'https://images.unsplash.com/photo-1560416313-002d34805eb3?q=80&w=1932&auto=format&fit=crop'
    ]
  },

  // Branding
  {
    id: 'p7',
    title: 'Vanke Meisha VI',
    category: ProjectCategory.BRANDING,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    description: 'Complete visual identity system for educational campus.',
    client: 'Vanke Education',
    date: '2018',
    role: 'Brand Designer',
    technologies: ['Illustrator', 'Photoshop'],
    longDescription: 'Formulated the brand VI for Vanke Meisha Kindergarten. The project included the design of the logo system, wayfinding signage for the park environment, staff uniforms, and educational materials.',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    ]
  },
  {
    id: 'p8',
    title: 'Medal Design Collection',
    category: ProjectCategory.BRANDING,
    image: 'https://images.unsplash.com/photo-1612632299710-d1b70289b4a9?q=80&w=2071&auto=format&fit=crop',
    description: 'Marathon and event commemorative medal designs.',
    client: 'Various Events',
    date: '2020-2022',
    role: 'Product Designer',
    technologies: ['C4D', 'Rhino'],
    longDescription: 'Designed physical commemorative medals for large-scale marathon events. Involved 3D modeling for mold production and material selection (zinc alloy, enamel).',
    gallery: [
      'https://images.unsplash.com/photo-1599388863695-17e94814d420?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  
  // Marketing
  {
    id: 'p9',
    title: 'Promotional Folders',
    category: ProjectCategory.MARKETING,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop',
    description: 'Tri-fold brochures and offline marketing materials.',
    client: 'Heshang Commercial',
    date: '2023',
    role: 'Graphic Designer',
    technologies: ['InDesign', 'Photoshop'],
    longDescription: 'Designed marketing collateral for e-commerce brands like Glasslock and Supor, focusing on offline retail channels and exhibition materials.',
    gallery: [
      'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'p10',
    title: 'Event Posters',
    category: ProjectCategory.MARKETING,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
    description: 'High-impact visual posters for gaming and running events.',
    client: 'Joyrun',
    date: '2021',
    role: 'Visual Designer',
    technologies: ['Photoshop', 'Midjourney'],
    longDescription: 'Created key visual posters for online and offline campaigns. Focused on dynamic composition and vibrant color schemes to drive user engagement and sign-ups.',
    gallery: [
      'https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=2070&auto=format&fit=crop'
    ]
  }
];