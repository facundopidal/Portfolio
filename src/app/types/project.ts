export interface Project {
    id: number,
    name: string,
    description: string,
    technologies: {id: string, name: string}[],
    url?: string,
    image: string,
    github?: string
}