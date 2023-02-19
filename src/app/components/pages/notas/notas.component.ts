import { EstudiantesInterface } from 'src/app/interfaces/promedios';
import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  public formNota!: FormGroup;

  estudiantes: EstudiantesInterface[] = [];

  estudiantesNota: any[] = [];

  isAdd: boolean = false;

  estSelect!: any;

  constructor(private apiEstudiantes: EstudiantesService,
    private formBuilder: FormBuilder,
    private  apiNotas: NotasService) {

    this.formNota = formBuilder.group({
      n1: ['', [Validators.required]],
      n2: ['', [Validators.required]],
      n3: ['', [Validators.required]],
      n4: ['', [Validators.required]],
      ex: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.getEstudiantesSinNota();
    this.getEstudiantesConNota();
  }

  getEstudiantesSinNota(){
    this.apiEstudiantes.getEstudiantesSinNota().subscribe({
      next: (res) => {
        this.estudiantes = res;
        console.log(res);
      }
    });
  }
  getEstudiantesConNota(){
    this.apiEstudiantes.getEstudiantesConNota().subscribe({
      next: (res) => {
        this.estudiantesNota = res;
        console.log(res);
      }
    });
  }

  addNota(id: number){
    
    this.estSelect = this.estudiantes.find(e => e.id == id);

    this.isAdd = true;

  }
  
  guardar(){

    if(this.formNota.valid){

      let cal = `${this.formNota.value.n1},${this.formNota.value.n2},${this.formNota.value.n3},${this.formNota.value.n4},${this.formNota.value.ex}`

      let data = {
        calificaciones: cal,
        id_estudiante: this.estSelect.id
      }

      this.apiNotas.store(data).subscribe({
        next: (res) => {
          console.log(res);
          this.getEstudiantesSinNota();
          this.getEstudiantesConNota();
        },
        error: (err) => {
          console.log(err);
        }
      });
      
      this.isAdd = false;
      this.estSelect = null;
      
    } else {
      this.formNota.markAllAsTouched();
    }


  }


}
