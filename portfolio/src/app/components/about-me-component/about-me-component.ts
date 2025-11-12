import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../../models/about-me';
import { AboutMeService } from '../../services/about-me-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about-me-component.html',
  styleUrls: ['./about-me-component.css']
})
export class AboutMeComponent implements OnInit {
  public aboutMe?: AboutMe;
  public savedName?: string;

  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe(a => {
      this.aboutMe = a;
      this.savedName = a.name;
    });
  }

  save() {
    if (!this.aboutMe) return;
    this.aboutMeService.updateAboutMe(this.aboutMe).subscribe(() => {
      this.savedName = this.aboutMe!.name;
    });
  }
}
