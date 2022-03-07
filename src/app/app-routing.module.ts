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
import { DocumentoComponent } from './principal/cliente/documento/documento.component';
import { ActividadComponent } from './principal/cliente/actividad/actividad.component';
import { EstadoComponent } from './principal/cliente/estado/estado.component';
import { AgregarDocumentoComponent } from './principal/cliente/crudsTipos/documento-crud/agregar-documento/agregar-documento.component';
import { ModificarDocumentoComponent } from './principal/cliente/crudsTipos/documento-crud/modificar-documento/modificar-documento.component';
import { AgregarActividadComponent } from './principal/cliente/crudsTipos/actividad-crud/agregar-actividad/agregar-actividad.component';
import { ModificarActividadComponent } from './principal/cliente/crudsTipos/actividad-crud/modificar-actividad/modificar-actividad.component';
import { AgregarEstadoComponent } from './principal/cliente/crudsTipos/estado-crud/agregar-estado/agregar-estado.component';
import { ModificarEstadoComponent } from './principal/cliente/crudsTipos/estado-crud/modificar-estado/modificar-estado.component';

const routes: Routes = [
  {path:"landing", component: MainPageComponent},
  {path:"register", component: RegisterPageComponent},
  {path:"login", component: LoginPageComponent},
  {path:"verificate", component: VerificateComponent, canActivate: [LandingGuard]},
  {path:"principal", component: PrincipalComponent, canActivate:[AuthGuard],
  children:[{path: "init", component: InitialComponent},
  {path: "cliente/registrar", component: ClienteRegistrarComponent},
  {path: "cliente/modificar", component: ClienteModificarComponent},
  {path: "cliente/modificar/documento", component: DocumentoComponent},
  {path: "cliente/modificar/actividad", component: ActividadComponent},
  {path: "cliente/modificar/estado", component: EstadoComponent},
  {path: "cliente/documento/agregar", component: AgregarDocumentoComponent},
  {path: "cliente/documento/modificar", component: ModificarDocumentoComponent},
  {path: "cliente/actividad/agregar", component: AgregarActividadComponent},
  {path: "cliente/actividad/modificar", component: ModificarActividadComponent},
  {path: "cliente/estado/agregar", component: AgregarEstadoComponent},
  {path: "cliente/estado/modificar", component: ModificarEstadoComponent}
  
]},
  {path:"", redirectTo:"verificate", pathMatch:"full"},
  {path:"**", redirectTo:"verificate", pathMatch:"full"}
];

@NgModule({
  providers: [{ provide: PERSISTENCE, useValue: 'session' }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
