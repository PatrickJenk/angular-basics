import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { CvComponent } from './components/cv-component/cv-component';

export const routes: Routes = [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'cv', component: CvComponent},
    {path: '**', redirectTo: '/about-me'}
];
