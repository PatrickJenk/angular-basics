import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  get_cvs(): Cv[] {
    return [
      new Cv('Grundschule, Schule Spiegel', 2007, 20018),
      new Cv('Lehre, Elektroinstallateur:in EFZ', 2018, 2022),
      new Cv('Zivildienst, Beeinträchtigtenheim', 2022, 2023),
      new Cv('Projektmitarbeiter und Betriebsleiter', 2023),
    ]
  }  
}
