import { Component, input } from '@angular/core';
import { Project } from '../../types/project';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html'
})
export class ProjectComponent {

  project = input.required<Project>()
}
