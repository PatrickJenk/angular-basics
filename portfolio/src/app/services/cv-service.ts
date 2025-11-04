import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  get_cvs(): Cv[] {
    return [
      new Cv('Nasa', 2000, 2004),
      new Cv('FBI', 2004, 2010),
      new Cv('CIA', 2010, 2023),
      new Cv('Eutima', 2024),
    ]
  }  
}