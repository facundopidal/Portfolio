import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skills } from '../../data/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly skillsEntries = Object.entries(skills);
}
