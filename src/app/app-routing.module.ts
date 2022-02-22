import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:"landing", component: MainPageComponent},
  {path:"register", component: RegisterPageComponent},
  {path:"login", component: LoginPageComponent},
  {path:"home", component: HomePageComponent},
  {path:"", redirectTo:"landing", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
