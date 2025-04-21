import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://tu-api.com/api/museos';


  subirImagen(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', file);

    return this.http.post(`${this.baseUrl}/subir-imagen`, formData);
  }

  obtenerImagenes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/imagenes`);
  }
}
