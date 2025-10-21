import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
 
  getAboutMe(): AboutMe {
    return new AboutMe(
      'Patrick Jenk', 'https://static.wikitide.net/loathsomecharacterswiki/thumb/f/f6/C--Users-cleme-Downloads-527-5274029_patrick-star-clipart-patrick-star-drooling-png-download.png/300px-C--Users-cleme-Downloads-527-5274029_patrick-star-clipart-patrick-star-drooling-png-download.png'
    )
  }
}
