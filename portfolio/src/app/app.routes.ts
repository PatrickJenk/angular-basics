import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { CvComponent } from './components/cv-component/cv-component';
import { CvEditComponent } from './components/cv-edit-component/cv-edit-component';

export const routes: Routes = [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'cv', component: CvComponent},
    {path: 'cv/new', component: CvEditComponent},
    {path: 'cv/:id', component: CvEditComponent},
    {path: '**', redirectTo: '/about-me'}
];
