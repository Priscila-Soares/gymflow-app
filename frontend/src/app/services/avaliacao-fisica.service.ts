import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvaliacaoFisica } from '../models/avaliacao-fisica';
import { AvaliacaoFisicaRequest } from '../models/avaliacao-fisica-request';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoFisicaService {

  private apiUrl = 'http://localhost:8080/api/v1/avaliacoes-fisicas';

  constructor(private http: HttpClient) {}

  listar(): Observable<AvaliacaoFisica[]> {
    return this.http.get<AvaliacaoFisica[]>(this.apiUrl);
  }

  criar(avaliacao: AvaliacaoFisicaRequest): Observable<AvaliacaoFisica> {
    return this.http.post<AvaliacaoFisica>(this.apiUrl, avaliacao);
  }
}