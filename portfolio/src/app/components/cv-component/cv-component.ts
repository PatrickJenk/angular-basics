import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv-service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cv-component.html',
  styleUrls: ['./cv-component.css']
})
export class CvComponent {
  cvs: Cv[] = [];
  isEditingAllowed = false;
  showLogin = false;
  showEditor = false;
  password = '';

  newCompany = '';
  newFrom?: number;
  newTo?: number;

  constructor(private cvService: CvService) {}
  ngOnInit() { this.cvs = this.cvService.getCVs(); }

onAddClick() {
  console.log('Add clicked');           // Debug
  if (!this.isEditingAllowed) {
    this.showLogin = true;              // Modal anzeigen
    return;
  }
  this.showEditor = true;               // sonst direkt Editor-Zeile
}

checkPassword() {
  if (this.password === '111') {
    this.isEditingAllowed = true;
    this.showLogin = false;
    this.password = '';
    this.showEditor = true;
  } else {
    alert('Falsches Passwort');
  }
}

  closeLogin() { this.showLogin = false; this.password = ''; }

 saveNew() {
  if (!this.newCompany || !this.newFrom) return;

  this.cvs.push(new Cv(this.newCompany, Number(this.newFrom), this.newTo ? Number(this.newTo) : undefined));

  // 🔹 sort newest first
  this.cvs.sort((a, b) => (b.from || 0) - (a.from || 0));

  this.cvService.saveCVs(this.cvs);
  this.newCompany = '';
  this.newFrom = undefined;
  this.newTo = undefined;
  this.showEditor = false;
}


  delete(i: number) {
    if (!this.isEditingAllowed) return;
    this.cvs.splice(i, 1);
    this.cvService.saveCVs(this.cvs);
  }
}
