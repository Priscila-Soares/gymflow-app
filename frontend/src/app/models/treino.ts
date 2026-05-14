import { Aluno } from './aluno';
import { Exercicio } from './exercicio';

export interface Treino {
  id?: number;
  nome: string;
  aluno: Aluno;
  exercicios: Exercicio[];
}