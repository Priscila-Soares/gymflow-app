import { Routes } from '@angular/router';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form';
import { AlunosListComponent } from './alunos/alunos-list/alunos-list';

export const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunosListComponent },
  { path: 'alunos/novo', component: AlunoFormComponent }
];