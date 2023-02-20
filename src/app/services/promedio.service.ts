import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromedioService {

  private urlApi: string = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  guardar(form:any){
    /* console.log(form); */
    return this.http.post<any>(this.urlApi + 'promedios', form)
  }

}
