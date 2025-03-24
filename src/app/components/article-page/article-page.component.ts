import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css',
})

export class ArticlePageComponent implements OnInit {
  id: number | null = null;
  article: any | null = null;

  articles = [
    {
      id: 1,
      titulo: 'Titulo1',
      autor: 'Author1',
      criacao: '24/03/2025',
      conteudo: [
        {
          p: 1,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto rem atque praesentium, iure tempora sint quae, laborum nesciunt asperiores totam eligendi accusamus neque sit itaque maioressed, repudiandae fuga.',
        },
        {
          p: 2,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto rem atque praesentium, iure tempora sint quae, laborum nesciunt asperiores totam eligendi accusamus neque sit itaque maioressed, repudiandae fuga.',
        },
        {
          p: 3,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto rem atque praesentium, iure tempora sint quae, laborum nesciunt asperiores totam eligendi accusamus neque sit itaque maioressed, repudiandae fuga.',
        },
      ],
    },
    {
      id: 2,
      titulo: 'Titulo2',
      autor: 'Author2',
      criacao: '25/03/2025',
      conteudo: [
        {
          p: 1,
          text: 'Conteúdo do artigo 2, parágrafo 1.',
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.loadArticle();
    });
  }

  loadArticle(): void {
    if (this.id !== null) {
      this.article = this.articles.find((article) => article.id === this.id);
    }
  }
}
