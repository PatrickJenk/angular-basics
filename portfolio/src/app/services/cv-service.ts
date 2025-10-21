import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  get_cvs(): Cv[] {
    return [
      new Cv('Seiffenkisten Bauer', 2007, 20012),
      new Cv('Pausen-Clown', 2013, 2018),
      new Cv('Profi Handballer', 2018, 2023),
      new Cv('Chrüppu EFZ', 2023),
    ]
  }  
}
