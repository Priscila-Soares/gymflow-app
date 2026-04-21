import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercicio } from '../../models/exercicio';
import { ExercicioService } from '../../services/exercicio.service';

@Component({
  selector: 'app-exercicios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicios-list.html',
  styleUrl: './exercicios-list.css'
})
export class ExerciciosListComponent implements OnInit {

  exercicios: Exercicio[] = [];

  constructor(private exercicioService: ExercicioService) {}

  ngOnInit(): void {
    this.carregarExercicios();
  }

  carregarExercicios() {
    this.exercicioService.listar().subscribe(data => {
      this.exercicios = data;
    });
  }
}