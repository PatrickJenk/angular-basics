import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv-service';

@Component({
  selector: 'app-cv-edit-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cv-edit-component.html',
  styleUrls: ['./cv-edit-component.css']
})
export class CvEditComponent implements OnInit {
  form: FormGroup;
  index: number | null = null;

  constructor(
    private cvService: CvService,
    private route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      company: [null, [Validators.required]],
      from: [null, [Validators.required]],
      to: [null]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idx = params.get('index'); // Route z. B. /cv/edit/2
      const list = this.cvService.getCVs();

      if (idx !== null) {
        this.index = Number(idx);
        const rec = list[this.index];
        if (rec) this.form.patchValue(rec);
      }
    });
  }

  save() {
    const list = this.cvService.getCVs();

    if (this.index !== null && list[this.index]) {
      list[this.index] = this.form.value as Cv;
    } else {
      list.push(this.form.value as Cv);
    }

    this.cvService.saveCVs(list);
    history.back();
  }
}
