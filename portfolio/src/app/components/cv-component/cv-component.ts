import { Component } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cv-component',
  imports: [RouterModule],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css'
})
export class CvComponent {

  cvs: Cv[] = [];

  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvService.getCVs().subscribe(cvs => this.cvs = cvs)
  }

  delete(cv: Cv) {
    if (confirm('Do you realy want to delete this record?')) {
      this.cvService.deleteCV(cv.id!).subscribe(() => this.ngOnInit())
    }
  }
}
