import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Aluno } from '../../models/aluno';
import { AvaliacaoFisicaRequest } from '../../models/avaliacao-fisica-request';

import { AlunoService } from '../../services/aluno';
import { AvaliacaoFisicaService } from '../../services/avaliacao-fisica.service';

@Component({
  selector: 'app-avaliacao-fisica-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avaliacao-fisica-form.html',
  styleUrl: './avaliacao-fisica-form.css'
})
export class AvaliacaoFisicaFormComponent implements OnInit {

  @Output() avaliacaoCadastrada = new EventEmitter<void>();

  alunos: Aluno[] = [];

  avaliacao: AvaliacaoFisicaRequest = {
    alunoId: 0,
    dataAvaliacao: '',
    peso: 0,
    altura: 0,
    percentualGordura: 0,
    observacoes: ''
  };

  constructor(
    private alunoService: AlunoService,
    private avaliacaoFisicaService: AvaliacaoFisicaService
  ) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.listarAlunos().subscribe((data: Aluno[]) => {
      this.alunos = data;
    });
  }

  salvar(): void {
    this.avaliacaoFisicaService.criar(this.avaliacao).subscribe(() => {
      alert('Avaliação física cadastrada com sucesso!');

      this.avaliacao = {
        alunoId: 0,
        dataAvaliacao: '',
        peso: 0,
        altura: 0,
        percentualGordura: 0,
        observacoes: ''
      };

      this.avaliacaoCadastrada.emit();
    });
  }
}