import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { ExperienceComponent } from "../../sections/experience/experience.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { HeroComponent } from "../../sections/hero/hero.component";
import { SkillsComponent } from '../../sections/skills/skills.component';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { ThemeSwitchComponent } from "../../components/theme-switch/theme-switch.component";

@Component({
  selector: 'app-home',
  imports: [ExperienceComponent, ProjectsComponent, HeroComponent, SkillsComponent, NavBarComponent, ThemeSwitchComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent{

}


