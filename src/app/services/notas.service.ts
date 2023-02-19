import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private urlApi: string = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) {}

  store(data: any){
    return this.http.post<any>(`${this.urlApi}notas`, data)
  }
}
