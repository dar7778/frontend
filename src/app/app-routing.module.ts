import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component'

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'',component:LoginpageComponent},
  {path:'admin',component:AdminHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
