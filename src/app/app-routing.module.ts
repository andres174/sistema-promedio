import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './components/pages/estudiantes/estudiantes.component';
import { VerCalificacionesComponent } from './components/pages/ver-calificaciones/ver-calificaciones.component';
import { NotasComponent } from './components/pages/notas/notas.component';
import { PromedioComponent } from './components/pages/promedio/promedio.component';

const routes: Routes = [
  {
    path: '',
    component: VerCalificacionesComponent
  },
  {
    path: 'estudiantes',
    component: EstudiantesComponent
  },
  {
    path: 'notas',
    component: NotasComponent
  },
  {
    path: 'promedios',
    component: PromedioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
