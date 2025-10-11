import { Component } from '@angular/core';
import { AboutMe } from '../../models/about-me';
import { AboutMeService } from '../../services/about-me-service';

@Component({
  selector: 'app-about-me-component',
  imports: [],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.css'
})
export class AboutMeComponent {
  public aboutMe?: AboutMe;

  constructor(
    private aboutMeService: AboutMeService
  ) {}

  ngOnInit(): void {
    this.aboutMe = this.aboutMeService.getAboutMe()
  }
}
