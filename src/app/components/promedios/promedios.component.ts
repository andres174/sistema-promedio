import { EstudiantesInterface, ExamenInterface, NotasInterface, PromedioInterface } from './../../interfaces/promedios';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedios',
  templateUrl: './promedios.component.html',
  styleUrls: ['./promedios.component.css']
})
export class PromediosComponent implements OnInit {

  inEstudiantes:boolean = false;
  inNotas: boolean = false;
  inExamen: boolean = false;
  inPromedio: boolean = false;

  estudiantes: EstudiantesInterface[] = [];
  notas: NotasInterface[] = [];
  examen: ExamenInterface[] = [];
  promedio: PromedioInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
