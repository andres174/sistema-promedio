import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-ver-calificaciones',
  templateUrl: './ver-calificaciones.component.html',
  styleUrls: ['./ver-calificaciones.component.css']
})
export class VerCalificacionesComponent implements OnInit {

  constructor(private apiEstudiantes: EstudiantesService) { }

  estudiantes: any[] = [];

  ngOnInit(): void {
    this.index();
  }

  index(){
    this.apiEstudiantes.getEstudiantesConProm().subscribe({
      next: (res) => {
        this.estudiantes = res;
        console.log(this.estudiantes);
      },
      error: (err) => {

      }
    });
  }



}
