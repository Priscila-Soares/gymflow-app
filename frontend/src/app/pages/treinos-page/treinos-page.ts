import { Component, ViewChild } from '@angular/core';
import { TreinoFormComponent } from '../../treinos/treino-form/treino-form';
import { TreinosListComponent } from '../../treinos/treinos-list/treinos-list';

@Component({
  selector: 'app-treinos-page',
  standalone: true,
  imports: [TreinoFormComponent, TreinosListComponent],
  templateUrl: './treinos-page.html',
  styleUrl: './treinos-page.css'
})
export class TreinosPageComponent {

  @ViewChild(TreinosListComponent) listaComponent!: TreinosListComponent;

  atualizarLista(): void {
    this.listaComponent.carregarTreinos();
  }
}