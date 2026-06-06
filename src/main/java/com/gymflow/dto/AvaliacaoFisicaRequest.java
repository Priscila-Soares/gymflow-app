package com.gymflow.dto;

import java.time.LocalDate;

public record AvaliacaoFisicaRequest(
        Long alunoId,
        LocalDate dataAvaliacao,
        Double peso,
        Double altura,
        Double percentualGordura,
        String observacoes
) {
}