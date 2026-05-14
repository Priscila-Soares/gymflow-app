import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Treino } from '../models/treino';
import { TreinoRequest } from '../models/treino-request';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  private apiUrl = 'http://localhost:8080/api/v1/treinos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Treino[]> {
    return this.http.get<Treino[]>(this.apiUrl);
  }

  criar(treino: TreinoRequest): Observable<Treino> {
    return this.http.post<Treino>(this.apiUrl, treino);
  }
}