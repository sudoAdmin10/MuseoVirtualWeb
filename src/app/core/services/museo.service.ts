import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/museum';


  subirImagen(url: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload-image`, { url });
  }

  obtenerImagenes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/images`);
  }
}
