import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from './shoe.model';
@Injectable({
  providedIn: 'root'
})
export class ShoesHttpService {

  baseUrl= "http://localhost:9090/api/shoes";

  constructor(private http: HttpClient) { }

  getAllShoesService(): Observable<Shoe[]>{
    return this.http.get<Shoe[]>(this.baseUrl);
}
}
