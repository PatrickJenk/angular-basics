import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
 
  getAboutMe(): AboutMe {
    return new AboutMe(
      'Roy Manigley', 'https://avatars.githubusercontent.com/u/7741279?v=4'
    )
  }
}
