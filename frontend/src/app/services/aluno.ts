import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiUrl = 'http://localhost:8080/api/v1/alunos';

  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  criarAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, aluno);
  }
}