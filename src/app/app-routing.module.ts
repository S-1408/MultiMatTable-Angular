import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TestingComponent } from './testing/testing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'testing',
    component: TestingComponent
  },
  {
    path: '' ,
    redirectTo: 'home' ,
    pathMatch: 'full'
  },
  {
    path: 'header' ,
   component: HeaderComponent
  },
  {
    path: 'footer' ,
    component: FooterComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
