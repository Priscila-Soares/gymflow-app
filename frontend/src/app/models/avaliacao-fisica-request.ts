export interface AvaliacaoFisicaRequest {
  alunoId: number;
  dataAvaliacao: string;
  peso: number;
  altura: number;
  percentualGordura?: number;
  observacoes?: string;
}