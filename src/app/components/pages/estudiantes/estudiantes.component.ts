import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudiantesInterface } from 'src/app/interfaces/promedios';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public formEstudiantes!: FormGroup;

  estudiantes: EstudiantesInterface[] = [];

  constructor(private formBuilder: FormBuilder,
    private apiEstudiantes: EstudiantesService) {
    this.formEstudiantes = formBuilder.group({
      nombre: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.index();
  }
  
  index(){
    this.apiEstudiantes.index().subscribe({
      next: (res) => {
        this.estudiantes = res;
        console.log(res);
      }
    });
  }

  guardar(){
    if(this.formEstudiantes.valid){
      console.log(this.formEstudiantes.value);
      this.apiEstudiantes.guardar(this.formEstudiantes.value).subscribe({
        next: (res) => {
          console.log(res);
          this.index();
        }, 
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.formEstudiantes.markAllAsTouched();
    }
  }

}
