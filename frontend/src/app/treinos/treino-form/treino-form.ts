import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Aluno } from '../../models/aluno';
import { Exercicio } from '../../models/exercicio';
import { TreinoRequest } from '../../models/treino-request';
import { AlunoService } from '../../services/aluno';
import { ExercicioService } from '../../services/exercicio.service';
import { TreinoService } from '../../services/treino';

@Component({
  selector: 'app-treino-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './treino-form.html',
  styleUrl: './treino-form.css'
})
export class TreinoFormComponent implements OnInit {

  @Output() treinoCadastrado = new EventEmitter<void>();

  alunos: Aluno[] = [];
  exercicios: Exercicio[] = [];

  treino: TreinoRequest = {
    nome: '',
    alunoId: 0,
    exerciciosIds: []
  };

  constructor(
    private alunoService: AlunoService,
    private exercicioService: ExercicioService,
    private treinoService: TreinoService
  ) {}

  ngOnInit(): void {
    this.carregarAlunos();
    this.carregarExercicios();
  }

  carregarAlunos(): void {
    this.alunoService.listarAlunos().subscribe(data => {
      this.alunos = data;
    });
  }

  carregarExercicios(): void {
    this.exercicioService.listar().subscribe(data => {
      this.exercicios = data;
    });
  }

  selecionarExercicio(exercicioId: number, event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.checked) {
      this.treino.exerciciosIds.push(exercicioId);
    } else {
      this.treino.exerciciosIds = this.treino.exerciciosIds.filter(id => id !== exercicioId);
    }
  }

  salvar(): void {
    this.treinoService.criar(this.treino).subscribe(() => {
      alert('Treino cadastrado com sucesso!');

      this.treino = {
        nome: '',
        alunoId: 0,
        exerciciosIds: []
      };

      this.treinoCadastrado.emit();
    });
  }
}