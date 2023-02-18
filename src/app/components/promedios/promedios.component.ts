import { EstudiantesInterface, ExamenInterface, NotasInterface, PromedioInterface } from './../../interfaces/promedios';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-promedios',
  templateUrl: './promedios.component.html',
  styleUrls: ['./promedios.component.css']
})
export class PromediosComponent implements OnInit {

  public formPadre: FormGroup = new FormGroup({});

  numEstudiantes!: number;
  nE: number[] = [];

  inEstudiantes:boolean = false;
  inNotas: boolean = false;
  inExamen: boolean = false;
  inPromedio: boolean = false;

  estudiantes: EstudiantesInterface[] = [];
  notas: NotasInterface[] = [];
  examen: ExamenInterface[] = [];
  promedio: PromedioInterface[] = [];

  listaEstudiante:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  initFormPadre(){
    this.formPadre = new FormGroup({
      est: new FormArray([], [Validators.required])
    });
  }

  initFormEstudiantes(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
  }

  addEstudiante(): void {
    const est = this.formPadre.get('est') as FormArray;
    est.push(this.initFormEstudiantes());
  }

  crear(){
    for (let index = 0; index < this.numEstudiantes; index++) {
      this.nE.push(index+1);
    }
    console.log(this.nE);
  }

  ver(){
    console.log(this.listaEstudiante);
  }

}
