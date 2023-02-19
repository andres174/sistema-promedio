import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PromediosComponent } from './components/promedios/promedios.component';
import { EstudiantesComponent } from './components/pages/estudiantes/estudiantes.component';
import { NotasComponent } from './components/pages/notas/notas.component';
import { PromedioComponent } from './components/pages/promedio/promedio.component';
import { VerCalificacionesComponent } from './components/pages/ver-calificaciones/ver-calificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    PromediosComponent,
    EstudiantesComponent,
    NotasComponent,
    PromedioComponent,
    VerCalificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
