import { Component } from '@angular/core';
import { skills } from '../../data/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillsEntries = Object.entries(skills);
}
