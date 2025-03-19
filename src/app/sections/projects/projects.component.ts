import { Component } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { projects } from '../../data/projects';
import { Project } from '../../types/project';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 projects: Project[] = projects
}
