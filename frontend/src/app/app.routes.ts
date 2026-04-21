import { Routes } from '@angular/router';
import { AlunosPageComponent } from './pages/alunos-page/alunos-page';
import { ExerciciosPageComponent } from './pages/exercicios-page/exercicios-page';

export const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunosPageComponent },
  { path: 'exercicios', component: ExerciciosPageComponent }
];