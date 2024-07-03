import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  // Route for the default path (empty path)
  { path: '', component: NotFoundPageComponent, data: { title: 'Not Found', favicon: 'images/favicon.png' } },

  // Route for the 'home' path
  { path: 'home', component: HomePageComponent, data: { title: 'Home', favicon: 'images/home_favicon.png' } },

  // Wildcard route for all other paths that don't match the above routes
  { path: '**', component: NotFoundPageComponent, data: { title: 'Not Found', favicon: 'images/favicon.png' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
