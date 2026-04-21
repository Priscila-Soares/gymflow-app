import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exercicio } from '../../models/exercicio';
import { ExercicioService } from '../../services/exercicio.service';

@Component({
  selector: 'app-exercicio-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercicio-form.html',
  styleUrl: './exercicio-form.css'
})
export class ExercicioFormComponent {

  @Output() exercicioCadastrado = new EventEmitter<void>();

  exercicio: Exercicio = {
    nome: '',
    grupoMuscular: '',
    descricao: ''
  };

  constructor(private exercicioService: ExercicioService) {}

  salvar() {

    this.exercicioService.criar(this.exercicio).subscribe(() => {
      alert('Exercício cadastrado com sucesso!');
      this.exercicio = {
        nome: '',
        grupoMuscular: '',
        descricao: ''
      };

      this.exercicioCadastrado.emit();
    });
  }
}