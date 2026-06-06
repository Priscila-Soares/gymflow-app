import { Routes } from '@angular/router';
import { AlunosPageComponent } from './pages/alunos-page/alunos-page';
import { ExerciciosPageComponent } from './pages/exercicios-page/exercicios-page';
import { TreinosPageComponent } from './pages/treinos-page/treinos-page';
import { AvaliacoesFisicasPageComponent } from './pages/avaliacoes-fisicas-page/avaliacoes-fisicas-page';

export const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunosPageComponent },
  { path: 'exercicios', component: ExerciciosPageComponent },
  { path: 'treinos', component: TreinosPageComponent },
  { path: 'avaliacoes-fisicas', component: AvaliacoesFisicasPageComponent }
];