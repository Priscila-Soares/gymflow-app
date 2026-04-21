import { Component, ViewChild } from '@angular/core';
import { AlunoFormComponent } from '../../alunos/aluno-form/aluno-form';
import { AlunosListComponent } from '../../alunos/alunos-list/alunos-list';

@Component({
  selector: 'app-alunos-page',
  standalone: true,
  imports: [AlunoFormComponent, AlunosListComponent],
  templateUrl: './alunos-page.html',
  styleUrl: './alunos-page.css'
})
export class AlunosPageComponent {

  @ViewChild(AlunosListComponent) listaComponent!: AlunosListComponent;

  atualizarLista() {
    this.listaComponent.carregarAlunos();
  }
}