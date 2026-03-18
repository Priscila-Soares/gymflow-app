import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlunoService } from '../../services/aluno';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alunos-list.html',
  styleUrl: './alunos-list.css'
})
export class AlunosListComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.listarAlunos().subscribe({
      next: (dados) => {
        this.alunos = dados;
      },
      error: (erro) => {
        console.error('Erro ao listar alunos:', erro);
      }
    });
  }
}