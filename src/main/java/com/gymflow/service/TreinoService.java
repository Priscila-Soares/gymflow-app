package com.gymflow.service;

import com.gymflow.model.Aluno;
import com.gymflow.model.Exercicio;
import com.gymflow.model.Treino;
import com.gymflow.repository.AlunoRepository;
import com.gymflow.repository.ExercicioRepository;
import com.gymflow.repository.TreinoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreinoService {

    private final TreinoRepository treinoRepository;
    private final AlunoRepository alunoRepository;
    private final ExercicioRepository exercicioRepository;

    public TreinoService(
            TreinoRepository treinoRepository,
            AlunoRepository alunoRepository,
            ExercicioRepository exercicioRepository
    ) {
        this.treinoRepository = treinoRepository;
        this.alunoRepository = alunoRepository;
        this.exercicioRepository = exercicioRepository;
    }

    public Treino salvar(Long alunoId, List<Long> exerciciosIds, String nome) {
        Aluno aluno = alunoRepository.findById(alunoId)
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));

        List<Exercicio> exercicios = exercicioRepository.findAllById(exerciciosIds);

        Treino treino = new Treino();
        treino.setNome(nome);
        treino.setAluno(aluno);
        treino.setExercicios(exercicios);

        return treinoRepository.save(treino);
    }

    public List<Treino> listarTodos() {
        return treinoRepository.findAll();
    }
}