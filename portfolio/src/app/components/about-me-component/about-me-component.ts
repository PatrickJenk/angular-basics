import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutMe } from '../../models/about-me';
import { AboutMeService } from '../../services/about-me-service';

@Component({
  selector: 'app-about-me-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about-me-component.html',
  styleUrls: ['./about-me-component.css']
})
export class AboutMeComponent implements OnInit {

  // Initialwert, damit ngModel nicht auf undefined zeigt
  public aboutMe: AboutMe = {
    name: 'About Me',
    imagePath: '/images/100.jpg'
  };

  public draftAboutMe: AboutMe = { ...this.aboutMe };

  // ✅ Hier Service richtig injizieren!
  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe({
      next: (data: AboutMe) => {
        // Merge: falls Backend nicht alle Felder liefert
        this.aboutMe = { ...this.aboutMe, ...(data ?? {}) };
        this.draftAboutMe = { ...this.aboutMe };
      },
      error: (err) => console.error('getAboutMe failed:', err)
    });
  }

  submit(): void {
    const name = (this.draftAboutMe.name ?? '').trim();
    if (!name) return;

    this.aboutMeService.updateAboutMe(name).subscribe({
      next: (updated: AboutMe) => {
        // Update Name lokal, Bildpfad bleibt
        this.aboutMe = { ...this.aboutMe, name };
        this.draftAboutMe = { ...this.aboutMe };
      },
      error: (err) => console.error('updateAboutMe failed:', err)
    });
  }
}
