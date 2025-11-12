import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../../models/about-me';
import { AboutMeService } from '../../services/about-me-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.css'
  
})
export class AboutMeComponent implements OnInit {
  public aboutMe?: AboutMe; 

  constructor(
    private aboutMeService: AboutMeService
  ) {}

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe(aboutMe => this.aboutMe = aboutMe)
  }

  save() {
    if (this.aboutMe?.name) {
      this.aboutMeService.updateAboutMe(this.aboutMe.name).subscribe()
    }
  }
  
}
