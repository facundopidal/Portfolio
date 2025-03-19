export interface Project {
    id: number,
    name: string,
    description: string,
    technologies: string[],
    url: string,
    image: string,
    github?: string
}