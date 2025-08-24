import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { projects } from '../../data/projects';
import { Project } from '../../types/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly projects: Project[] = projects
}
