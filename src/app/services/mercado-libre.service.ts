import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  private apiUrl: string = `${environment.mercadolibreApi}sites/MCO`;

  constructor(private http: HttpClient) { }

  findProducts(text: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?q=${text}`, {});
  }
  
}
