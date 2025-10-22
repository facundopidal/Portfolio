export interface Experience {
  role: string;
  company: string;
  date: string;
  achievements: string[];
  technologies: { id: string; name: string }[];
}

export const experience: Experience[] = [
  {
    role: "Creador y Desarrollador de Producto",
    company: "Multi WhatsApp (Proyecto Propio / SaaS)",
    date: "2025",
    achievements: [
      "Arquitectura y desarrollo de una aplicación de Windows utilizando Tauri y Rust.",
      "Implementación de un sistema para gestionar múltiples sesiones de WhatsApp de forma concurrente y aislada.",
      "Diseño de una interfaz de usuario intuitiva con Angular y Tailwind CSS para una gestión centralizada y eficiente.",
      "Actualmente iniciando el desarrollo de una nueva aplicación para la gestión de entrenadores personales.",
    ],
    technologies: [
      { id: "html", name: "HTML" },
      { id: "angular", name: "Angular" },
      { id: "typescript", name: "TypeScript" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "tauri", name: "Tauri" },
      { id: "rust", name: "Rust" },
    ],
  },
  {
    role: "Desarrollador Web Freelance",
    company: "Instituto Salvador Dalí",
    date: "2025",
    achievements: [
      "Diseño y desarrollo integral del sitio web institucional para mejorar la comunicación con la comunidad educativa.",
      "Implementación de un diseño responsive adaptado a dispositivos móviles, aumentando el alcance y la accesibilidad.",
      "Creación de secciones dinámicas para noticias y eventos, permitiendo al personal de la institución actualizar el contenido de forma autónoma.",
      'Ver el sitio web en <a href="http://www.institutosalvadordali.com.ar" target="_blank" rel="noopener noreferrer" class="text-light-accent dark:text-dark-accent hover:underline">www.institutosalvadordali.com.ar</a>',
    ],
    technologies: [
      { id: "html", name: "HTML" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "javascript", name: "JavaScript" },
      { id: "astro", name: "Astro" },
    ],
  },
];
