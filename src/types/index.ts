export interface Skill {
  img: string;
  caption: string;
}

export interface Contact {
  img: string;
  link: string;
  alt: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Project {
  name: string;
  description?: string;
  images: string[];
  associated?: string;
}

export interface ScrollTopProps {
  window?: () => Window;
  children: React.ReactElement;
}
