export enum ProjectCategory {
  UI = 'UI/UX',
  BRANDING = 'Branding & VI',
  THREE_D = '3D & NFT',
  MARKETING = 'Marketing & Operations'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string; // Thumbnail
  description: string; // Short description
  
  // Detailed View Fields
  client?: string;
  date?: string;
  role?: string;
  longDescription?: string;
  technologies?: string[];
  gallery?: string[]; // Additional project images
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  wechat?: string;
}