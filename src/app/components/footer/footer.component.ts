import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
})
export class FooterComponent {
  socialMedia = [
    {
      id: 1,
      nome: 'linkedin',
      url: '#',
    },
    {
      id: 2,
      nome: 'instagram',
      url: '#',
    },
    {
      id: 3,
      nome: 'email',
      url: '#',
    },
  ];

  categories = [
    {
      id: 1,
      nome: 'CSS',
      url: '#',
    },
    {
      id: 2,
      nome: 'Java',
      url: '#',
    },
    {
      id: 3,
      nome: 'Javascript',
      url: '#',
    },
    {
      id: 4,
      nome: 'Python',
      url: '#',
    },
  ];
}
