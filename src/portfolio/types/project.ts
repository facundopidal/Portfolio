export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: { id: string; name: string }[];
  image?: string;
  github?: string;
  url?: string; // Optional, as not all projects have it
  download?: string;
}
