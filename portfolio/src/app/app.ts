import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { CvComponent } from './components/cv-component/cv-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMeComponent, CvComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
