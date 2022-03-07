import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NavbarComponent } from './principal/navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HotToastModule } from '@ngneat/hot-toast';
import { PrincipalComponent } from './principal/principal.component';
import { InitialComponent } from './principal/initial/initial.component';
import { VerificateComponent } from './verificate/verificate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteRegistrarComponent } from './principal/cliente/cliente-registrar/cliente-registrar.component';
import { ClienteModificarComponent } from './principal/cliente/cliente-modificar/cliente-modificar.component';
import { DocumentoComponent } from './principal/cliente/documento/documento.component';
import { ActividadComponent } from './principal/cliente/actividad/actividad.component';
import { Select2Module } from 'ng-select2-component';
import { EstadoComponent } from './principal/cliente/estado/estado.component';
import { AgregarDocumentoComponent } from './principal/cliente/crudsTipos/documento-crud/agregar-documento/agregar-documento.component';
import { ModificarDocumentoComponent } from './principal/cliente/crudsTipos/documento-crud/modificar-documento/modificar-documento.component';
import { AgregarActividadComponent } from './principal/cliente/crudsTipos/actividad-crud/agregar-actividad/agregar-actividad.component';
import { ModificarActividadComponent } from './principal/cliente/crudsTipos/actividad-crud/modificar-actividad/modificar-actividad.component';
import { AgregarEstadoComponent } from './principal/cliente/crudsTipos/estado-crud/agregar-estado/agregar-estado.component';
import { ModificarEstadoComponent } from './principal/cliente/crudsTipos/estado-crud/modificar-estado/modificar-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PrincipalComponent,
    InitialComponent,
    VerificateComponent,
    ClienteRegistrarComponent,
    ClienteModificarComponent,
    DocumentoComponent,
    ActividadComponent,
    EstadoComponent,
    AgregarDocumentoComponent,
    ModificarDocumentoComponent,
    AgregarActividadComponent,
    ModificarActividadComponent,
    AgregarEstadoComponent,
    ModificarEstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Select2Module,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
