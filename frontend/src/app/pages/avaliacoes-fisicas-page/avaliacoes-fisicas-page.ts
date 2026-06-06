import { Component, ViewChild } from '@angular/core';

import { AvaliacaoFisicaFormComponent } from '../../avaliacoes-fisicas/avaliacao-fisica-form/avaliacao-fisica-form';
import { AvaliacoesFisicasListComponent } from '../../avaliacoes-fisicas/avaliacoes-fisicas-list/avaliacoes-fisicas-list';

@Component({
  selector: 'app-avaliacoes-fisicas-page',
  standalone: true,
  imports: [AvaliacaoFisicaFormComponent, AvaliacoesFisicasListComponent],
  templateUrl: './avaliacoes-fisicas-page.html',
  styleUrl: './avaliacoes-fisicas-page.css'
})
export class AvaliacoesFisicasPageComponent {

  @ViewChild(AvaliacoesFisicasListComponent)
  listaComponent!: AvaliacoesFisicasListComponent;

  atualizarLista(): void {
    this.listaComponent.carregarAvaliacoes();
  }
}