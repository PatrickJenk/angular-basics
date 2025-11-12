import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutMe } from '../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  private storageKey = 'aboutMeData';

  getAboutMe(): Observable<AboutMe> {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      return of(JSON.parse(saved));
    }
    // Fallback beim ersten Start
    return of({
      name: 'Pädi',
      imagePath: '/me.jpg.jpg'
    });
  }

  updateAboutMe(data: AboutMe): Observable<AboutMe> {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return of(data);
  }
}
