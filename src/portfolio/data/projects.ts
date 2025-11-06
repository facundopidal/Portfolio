import type { Project } from "../types/project.ts";

export const projects: Project[] = [
  {
    id: 4,
    name: "Multi WhatsApp",
    description:
      "Aplicación de escritorio para gestionar múltiples cuentas de WhatsApp de forma centralizada. Cuenta con una landing page informativa y un sistema de gestión de licencias desarrollado con Express y PostgreSQL.",
    technologies: [
      { id: "html", name: "HTML" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "typescript", name: "TypeScript" },
      { id: "angular", name: "Angular" },
      { id: "tauri", name: "Tauri" },
      { id: "rust", name: "Rust" },
      { id: "express", name: "Express" },
      { id: "postgres", name: "PostgreSQL" },
    ],
    image: "/images/multiw.png",
    url: "https://multiwa.netlify.app",
    download:
      "https://github.com/facundopidal/MW-Updates/raw/refs/heads/main/downloads/Multi%20WhatsApp_0.1.9_x64_en-US.msi",
  },
  {
    id: 1,
    name: "App de Notas (Full-Stack)",
    description:
      "Aplicación full-stack para gestionar notas con autenticación JWT. Cada usuario puede organizar sus notas y grupos de notas, utilizando un web component para edición en Markdown.",
    technologies: [
      { id: "html", name: "HTML" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "typescript", name: "TypeScript" },
      { id: "angular", name: "Angular" },
      { id: "nestjs", name: "NestJS" },
      { id: "postgres", name: "PostgreSQL" },
      { id: "docker", name: "Docker" },
    ],
    image: "images/noteapp.png", // Placeholder image
    url: "https://noteapp-facundopidal.netlify.app",
    github: "https://github.com/facundopidal/NoteApp",
  },
  {
    id: 2,
    name: "SuplyMardel",
    description:
      "Proyecto final de la tecnicatura. E-commerce de suplementos que implementa pagos con Mercado Pago y servicios de email.",
    technologies: [
      { id: "html", name: "HTML" },
      { id: "css", name: "CSS" },
      { id: "typescript", name: "TypeScript" },
      { id: "angular", name: "Angular" },
      { id: "node", name: "Node.js" },
      { id: "express", name: "Express" },
    ],
    image: "images/suplymardel.jpg",
    github: "https://github.com/facundopidal/ProyectoLab4-SuplyMardel",
  },
  {
    id: 3,
    name: "Gestor de Gastos",
    description:
      "Aplicación de escritorio para gestionar gastos e ingresos. Con la posibilidad de crear movimientos periodicos y agregar rubros. Permite asignar imagenes a los rubros mediante el sistema de archivos.",
    technologies: [
      { id: "html", name: "HTML" },
      { id: "css", name: "CSS" },
      { id: "typescript", name: "TypeScript" },
      { id: "angular", name: "Angular" },
      { id: "tauri", name: "Tauri" },
      { id: "sqlite", name: "SQLite" },
    ],
    image: "images/gestor.jpg",
    github: "https://github.com/facundopidal/Gestor-de-gastos-tauri",
  },
];
