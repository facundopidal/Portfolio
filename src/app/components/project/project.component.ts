import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../types/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {

  project = input.required<Project>()
}
