import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
 
  getAboutMe(): AboutMe {
    return new AboutMe(
      'Patrick Jenk', 'https://lh3.googleusercontent.com/proxy/NlxjO6z4xOja8k0Upzy4T1oDjwtXT2eO8MtVwYnSpJwbtKYcuZvggFKqxkgqx9n7-N5FwO17Qm7EBCIaJRWHfZknFqYn'
    )
  }
}
