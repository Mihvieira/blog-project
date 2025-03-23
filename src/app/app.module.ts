import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ArticleCardComponent,
    HeroComponent,
    SkillCardComponent
  ],
  providers: [],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule {}
