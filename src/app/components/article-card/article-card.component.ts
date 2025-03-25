import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  items = [
    {
      id: 1,
      titulo: 'Titulo1',
      autor: 'Author1',
      criacao: '24/03/2025',
    },
    {
      id: 2,
      titulo: 'Titulo2',
      autor: 'Author2',
      criacao: '22/03/2025',
    },
    {
      id: 3,
      titulo: 'Titulo3',
      autor: 'Author3',
      criacao: '22/03/2025',
    },
    {
      id: 4,
      titulo: 'Titulo4',
      autor: 'Author4',
      criacao: '20/03/2025',
    },
  ];
}
