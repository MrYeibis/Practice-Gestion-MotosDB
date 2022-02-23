import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InitialComponent } from './principal/initial/initial.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { PERSISTENCE} from '@angular/fire/compat/auth';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"landing", component: MainPageComponent},
  {path:"register", component: RegisterPageComponent},
  {path:"login", component: LoginPageComponent},
  
  {path:"principal", component: PrincipalComponent, canActivate:[AuthGuard],
  children:[{path: 'init', component: InitialComponent}]},
  {path:"", redirectTo:"landing", pathMatch:"full"}
];

@NgModule({
  providers: [{ provide: PERSISTENCE, useValue: 'session' }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
