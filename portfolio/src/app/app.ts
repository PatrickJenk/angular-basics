import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { CvComponent } from './components/cv-component/cv-component';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, TranslatePipe,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(
    private translate: TranslateService
  ){
    this.translate.addLangs(['de', 'en', 'jp', 'ar']);
    this.translate.setFallbackLang('en');
    this.setLanguage('en');
  }

  setLanguage(language: string): void{
    this.translate.use(language);
  }
}
