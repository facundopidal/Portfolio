import { Project } from "../types/project";

export const projects: Project[] = [
    {
      id: 1,
      name: "SuplyMardel",
      description: "Proyecto final de la tecnicatura. E-commerce de suplementos que implementa pagos con Mercado Pago y servicios de email.",
      technologies: [{id: "html", name: 'HTML'}, {id: "css", name: 'CSS'}, {id: "javascript", name: 'JavaScript'}, {id: "angular", name: 'Angular'}, {id: "node", name: 'Node.js'}, {id: "express", name: 'Express'}],
      image: "images/suplymardel.jpg",
      github: "https://github.com/facundopidal/ProyectoLab4-SuplyMardel"
    },
    {
      id: 2,
      name: "Gestor de Gastos",
      description: "Aplicación de escritorio para gestionar gastos e ingresos. Con la posibilidad de crear movimientos periodicos y agregar rubros. Permite asignar imagenes a los rubros mediante el sistema de archivos.",
      technologies: [{id: "html", name: 'HTML'}, {id: "css", name: 'CSS'}, {id: "javascript", name: 'JavaScript'}, {id: "angular", name: 'Angular'}, {id: "tauri", name: 'Tauri'}, {id: "sqlite", name: 'SQLite'}],
      image: "images/gestor.jpg",   
      github: "https://github.com/facundopidal/Gestor-de-gastos-tauri"
    },
    {
      id: 3,
      name: "Nonogram",
      description: "El juego Nonogram adaptado a la web.",
      technologies: [{id: "html", name: 'HTML'}, {id: "css", name: 'CSS'}, {id: "javascript", name: 'JavaScript'}],
      url: "https://aesthetic-jelly-cfe12b.netlify.app",
      image: "images/nonogram.jpg",     
      github: "https://github.com/facundopidal/Juego-Nonogram"
    }
  ];
  