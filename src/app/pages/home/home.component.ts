import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { ExperienceComponent } from "../../sections/experience/experience.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { HeroComponent } from "../../sections/hero/hero.component";
import { SkillsComponent } from '../../sections/skills/skills.component';

@Component({
  selector: 'app-home',
  imports: [ExperienceComponent, ProjectsComponent, HeroComponent, SkillsComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent{

}


