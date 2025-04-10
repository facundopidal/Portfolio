import { Project } from "../types/project";

export const projects: Project[] = [
    {
      id: 1,
      name: "Portfolio Web",
      description: "Mi portafolio personal con Angular y Tailwind.",
      technologies: [{id: "angular", name: 'Angular'}, {id: "angular", name: 'Angular'}, {id: "angular", name: 'Angular'}],
      url: "https://miportfolio.com",
      image: "images/portfolio.png",
    },
    {
      id: 2,
      name: "E-commerce",
      description: "Tienda online con integración de pagos.",
      technologies: [{id: "angular", name: 'Angular'}, {id: "angular", name: 'Angular'}, {id: "angular", name: 'Angular'}],
      url: "https://mistienda.com",
      image: "images/ecommerce.png",   
      github: "https://github.com/facundopidal/ProyectoLab4-SuplyMardel"
    },
  ];
  