import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  items = [
    {
      id: 1,
      nome: 'CSS',
    },
    {
      id: 2,
      nome: 'Java',
    },
    {
      id: 3,
      nome: 'Javascript',
    },
    {
      id: 4,
      nome: 'Python',
    },
  ];
}
