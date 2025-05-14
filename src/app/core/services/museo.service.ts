import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/items.model';

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
    return this.http.get<any[]>(`${this.baseUrl}/get-images`);
  }

  obtenerItems(): Observable<Item[]> {
    const resp = this.http.get<any[]>(`${this.baseUrl}/get-items`);
    console.log('respuesta de servicio Items: ' + JSON.stringify(resp));
    return resp;
  }

  editarItems(id: number, data: any): Observable<any[]> {
    console.log('ITEM UPDATE: ' + id + JSON.stringify(data))
    return this.http.patch<any[]>(`${this.baseUrl}/item/${id}`, data);
  }

  deleteItems(id: number): Observable<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/delete-item/${id}`);
  }



}
