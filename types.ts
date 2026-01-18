export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  category: string;
  iconType: 'custom' | 'lucide'; // Helper to decide rendering strategy
  iconName: string; // Key for the custom map or lucide name
}

export interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  tags: string[];
}

export interface StrategyRequest {
  niche: string;
  goal: string;
  platform: string;
}
