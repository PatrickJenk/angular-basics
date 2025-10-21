import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  get_cvs(): Cv[] {
    return [
      new Cv('Seifenkisten Bauer', 2007, 2012),
      new Cv('Pausen-Clown', 2013, 2018),
      new Cv('Profi Handballer', 2019, 2023),
      new Cv('Chrüppu EFZ', 2024),
    ]
  }  
}
