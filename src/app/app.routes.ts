import { ResolveFn, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { AppComponent } from './app.component';

const resolvedChildATitle: ResolveFn<string> = () =>
  Promise.resolve('article-page');

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'article-page/:id',
    title: resolvedChildATitle,
    component: ArticlePageComponent,
  },
];
