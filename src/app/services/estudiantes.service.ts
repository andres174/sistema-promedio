import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private urlApi: string = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get<any>(this.urlApi + 'estudiantes');
  }

  guardar(form:any){
    /* console.log(form); */
    return this.http.post<any>(this.urlApi + 'estudiantes', form)
  }
}
