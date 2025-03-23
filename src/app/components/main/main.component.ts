import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent,
    SkillCardComponent,
    ArticleCardComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: true,
})
export class MainComponent {}
