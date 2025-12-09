import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { IndexComponent } from './app/components/index/index.component';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./app/components/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./app/components/projects/projects.component')
      .then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./app/components/contact/contact.component')
      .then(m => m.ContactComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./app/components/project-details/project-details.component')
      .then(m => m.ProjectDetailsComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./app/components/page-not-found/page-not-found.component')
      .then(m => m.PageNotFoundComponent)
  }
];
bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
}).then(() => console.log('Bootstrap Successful!'));
