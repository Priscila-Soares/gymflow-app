package com.gymflow.dto;

import java.util.List;

public class TreinoRequest {

    private String nome;
    private Long alunoId;
    private List<Long> exerciciosIds;

    public String getNome() {
        return nome;
    }

    public Long getAlunoId() {
        return alunoId;
    }

    public List<Long> getExerciciosIds() {
        return exerciciosIds;
    }
}