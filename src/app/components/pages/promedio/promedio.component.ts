import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { PromedioService } from 'src/app/services/promedio.service';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {

  constructor(private apiEstudiantes: EstudiantesService, private apiPromedios: PromedioService) { }

  estudiantesNota:any[] = [];

  estudiantesProm:any[] = [];

  isAdd:boolean = false;

  estudianteSelect:any;
  promEstSelect: number = 0;

  ngOnInit(): void {
    this.getEstudiantesConNota();
  }


  getEstudiantesConNota(){
    this.apiEstudiantes.getEstudiantesSinProm().subscribe({
      next: (res) => {
        this.estudiantesNota = res;
        console.log(res);
      }
    });
  }

  calcularPromedio(e:any){
    this.estudianteSelect = e;
    console.log(this.estudianteSelect);

    let aux = parseFloat(this.estudianteSelect.calificaciones[0].n1) + parseFloat(this.estudianteSelect.calificaciones[0].n2) + parseFloat(this.estudianteSelect.calificaciones[0].n3) + parseFloat(this.estudianteSelect.calificaciones[0].n4) + parseFloat(this.estudianteSelect.calificaciones[0].examen)

    this.promEstSelect = aux/5;

    console.log(this.promEstSelect);
    
    this.isAdd = true;
  }

  guardar(){
    let data = {
      promedio: this.promEstSelect,
      id_notas: this.estudianteSelect.id_notas
    }
    console.log(data);
    this.apiPromedios.guardar(data).subscribe({
      next: (res) => {
        console.log(res);
        this.estudianteSelect = null;
        this.promEstSelect = 0;
        this.isAdd = false;
      }, 
      error: (err) => {
        console.log(err);
      }
    });
  }

}
