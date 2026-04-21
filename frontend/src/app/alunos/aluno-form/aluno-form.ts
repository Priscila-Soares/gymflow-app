import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../../services/aluno';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css'
})
export class AlunoFormComponent {

@Output() alunoCadastrado = new EventEmitter<void>();

  aluno: Aluno = {
    nome: '',
    email: '',
    idade: null,
    peso: null,
    altura: null,
    objetivo: ''
  };

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) {}

  salvar(): void {
    this.alunoService.criarAluno(this.aluno).subscribe({
      next: () => {
        alert('Aluno cadastrado com sucesso!');
        this.router.navigate(['/alunos']);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar aluno:', erro);
        alert('Erro ao cadastrar aluno.');
      },
    });

    this.alunoCadastrado.emit();
  }
}