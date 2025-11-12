import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({ providedIn: 'root' })
export class CvService {
  private key = 'cv_data';

  getCVs(): Cv[] {
    const data = localStorage.getItem(this.key);
    if (data) return JSON.parse(data);

    const defaults = [
      new Cv('Nasa', 2002, 2005),
      new Cv('Youtube', 2006, 2009),
      new Cv('Cop', 2010, 2017),
      new Cv('Autist', 2017, 2022),
      new Cv('Clown', 2002) // bis heute
    ];
    localStorage.setItem(this.key, JSON.stringify(defaults));
    return defaults;
  }

  saveCVs(cvs: Cv[]) {
    localStorage.setItem(this.key, JSON.stringify(cvs));
  }
}
