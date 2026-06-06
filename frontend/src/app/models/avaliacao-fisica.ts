import { Aluno } from './aluno';

export interface AvaliacaoFisica {
  id?: number;
  dataAvaliacao: string;
  peso: number;
  altura: number;
  percentualGordura?: number;
  observacoes?: string;
  aluno: Aluno;
}