import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercicio } from '../models/exercicio';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  private apiUrl = 'http://localhost:8080/api/v1/exercicios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Exercicio[]> {
    return this.http.get<Exercicio[]>(this.apiUrl);
  }

  criar(exercicio: Exercicio): Observable<Exercicio> {
    return this.http.post<Exercicio>(this.apiUrl, exercicio);
  }
}