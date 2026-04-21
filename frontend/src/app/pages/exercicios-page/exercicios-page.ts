import { Component, ViewChild } from '@angular/core';
import { ExercicioFormComponent } from '../../exercicios/exercicio-form/exercicio-form';
import { ExerciciosListComponent } from '../../exercicios/exercicios-list/exercicios-list';

@Component({
  selector: 'app-exercicios-page',
  standalone: true,
  imports: [ExercicioFormComponent, ExerciciosListComponent],
  templateUrl: './exercicios-page.html',
  styleUrl: './exercicios-page.css'
})
export class ExerciciosPageComponent {

  @ViewChild(ExerciciosListComponent) listaComponent!: ExerciciosListComponent;

  atualizarLista() {
    this.listaComponent.carregarExercicios();
 }
}