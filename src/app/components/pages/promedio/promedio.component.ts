import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {

  constructor(private apiEstudiantes: EstudiantesService) { }

  estudiantesNota:any[] = [];

  estudiantesProm:any[] = [];

  isAdd:boolean = false;

  ngOnInit(): void {
    this.getEstudiantesConNota();
  }


  getEstudiantesConNota(){
    this.apiEstudiantes.getEstudiantesConNota().subscribe({
      next: (res) => {
        this.estudiantesNota = res;
        console.log(res);
      }
    });
  }

  calcularPromedios(){
    
  }

  addNota(id:number){

  }

}
