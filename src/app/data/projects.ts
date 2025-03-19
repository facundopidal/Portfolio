import { Project } from "../types/project";

export const projects: Project[] = [
    {
      id: 1,
      name: "Portfolio Web",
      description: "Mi portafolio personal con Angular y Tailwind.",
      technologies: ["Angular", "Tailwind", "TypeScript"],
      url: "https://miportfolio.com",
      image: "images/portfolio.png",
    },
    {
      id: 2,
      name: "E-commerce",
      description: "Tienda online con integración de pagos.",
      technologies: ["React", "Node.js", "MongoDB"],
      url: "https://mistienda.com",
      image: "images/ecommerce.png",   
      github: "https://github.com/facundopidal/ProyectoLab4-SuplyMardel"
    },
  ];
  