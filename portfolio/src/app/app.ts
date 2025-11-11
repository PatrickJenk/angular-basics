import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { CvComponent } from './components/cv-component/cv-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AboutMeComponent, CvComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // <-- plural + Array
})
export class App {
  protected readonly title = signal('portfolio');
}
