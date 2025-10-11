import { Component } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv-service';

@Component({
  selector: 'app-cv-component',
  imports: [],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css'
})
export class CvComponent {

  cvs: Cv[] = [];

  constructor(
    private cvService: CvService
  ) {}
  
  ngOnInit(): void {
    this.cvs = this.cvService.get_cvs()
  }

}
