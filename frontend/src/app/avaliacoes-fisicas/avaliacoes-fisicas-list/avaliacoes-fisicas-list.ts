import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliacaoFisica } from '../../models/avaliacao-fisica';
import { AvaliacaoFisicaService } from '../../services/avaliacao-fisica.service';

@Component({
  selector: 'app-avaliacoes-fisicas-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avaliacoes-fisicas-list.html',
  styleUrl: './avaliacoes-fisicas-list.css'
})
export class AvaliacoesFisicasListComponent implements OnInit {

  avaliacoes: AvaliacaoFisica[] = [];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService) {}

  ngOnInit(): void {
    this.carregarAvaliacoes();
  }

  carregarAvaliacoes(): void {
    this.avaliacaoFisicaService.listar().subscribe((data: AvaliacaoFisica[]) => {
      this.avaliacoes = data;
    });
  }
}