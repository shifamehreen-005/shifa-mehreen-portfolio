export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'ML/AI' | 'Full-Stack';
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  project?: string;
  image?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}
