import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { HeroComponent } from "../../sections/hero/hero.component";
import { SkillsComponent } from '../../sections/skills/skills.component';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { AboutMeComponent } from "../../sections/about-me/about-me.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent, HeroComponent, SkillsComponent, NavBarComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent{

}


