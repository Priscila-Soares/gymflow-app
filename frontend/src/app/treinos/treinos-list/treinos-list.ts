import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Treino } from '../../models/treino';
import { TreinoService } from '../../services/treino';

@Component({
  selector: 'app-treinos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treinos-list.html',
  styleUrl: './treinos-list.css'
})
export class TreinosListComponent implements OnInit {

  treinos: Treino[] = [];

  constructor(private treinoService: TreinoService) {}

  ngOnInit(): void {
    this.carregarTreinos();
  }

  carregarTreinos(): void {
    this.treinoService.listar().subscribe(data => {
      this.treinos = data;
    });
  }
}