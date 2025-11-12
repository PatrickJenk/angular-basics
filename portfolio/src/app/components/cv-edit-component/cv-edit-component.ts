import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cv } from '../../models/cv';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CvService } from '../../services/cv-service';

@Component({
  selector: 'app-cv-edit-component',
  imports: [ReactiveFormsModule],
  templateUrl: './cv-edit-component.html',
  styleUrl: './cv-edit-component.css'
})
export class CvEditComponent implements OnInit {
  record?: Cv;
  form: FormGroup

  constructor(
    private cvService: CvService,
    private route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      employer: [null, [Validators.required]],
      start: [null, [Validators.required]],
      end: [null],
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        console.log(id)
        this.cvService.getCV(id).subscribe(cv => {
          this.record = cv;
          this.form.patchValue(cv);
        })
      } else {
        this.record = new Cv();
      }
    })
  }

  save() {
    if (this.record?.id) {
      this.cvService.updateCV(this.record.id, this.form.value).subscribe(() => history.back())
    } else {
      this.cvService.createCV(this.form.value).subscribe(() => history.back())
    }
  }
}
