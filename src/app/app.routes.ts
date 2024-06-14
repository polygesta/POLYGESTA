import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TumacoProjectComponent } from './pages/tumaco-project/tumaco-project.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'project', component: TumacoProjectComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home' }
];
