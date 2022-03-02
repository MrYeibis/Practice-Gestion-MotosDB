import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InitialComponent } from './principal/initial/initial.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { PERSISTENCE } from '@angular/fire/compat/auth';
import { AuthGuard } from './guards/auth.guard';
import { LandingGuard } from './guards/landing.guard';
import { VerificateComponent } from './verificate/verificate.component';
import { ClienteRegistrarComponent } from './principal/cliente/cliente-registrar/cliente-registrar.component';
import { ClienteModificarComponent } from './principal/cliente/cliente-modificar/cliente-modificar.component';

const routes: Routes = [
  {path:"landing", component: MainPageComponent},
  {path:"register", component: RegisterPageComponent},
  {path:"login", component: LoginPageComponent},
  {path:"verificate", component: VerificateComponent, canActivate: [LandingGuard]},
  {path:"principal", component: PrincipalComponent, canActivate:[AuthGuard],
  children:[{path: "init", component: InitialComponent},
  {path: "cliente/registrar", component: ClienteRegistrarComponent},
  {path: "cliente/modificar", component: ClienteModificarComponent}]},
  {path:"", redirectTo:"verificate", pathMatch:"full"},
  {path:"**", redirectTo:"verificate", pathMatch:"full"}
];

@NgModule({
  providers: [{ provide: PERSISTENCE, useValue: 'session' }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
