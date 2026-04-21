package com.gymflow.service;

import com.gymflow.model.Exercicio;
import com.gymflow.repository.ExercicioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExercicioService {

    private final ExercicioRepository exercicioRepository;

    public ExercicioService(ExercicioRepository exercicioRepository) {
        this.exercicioRepository = exercicioRepository;
    }

    public Exercicio salvar(Exercicio exercicio) {
        return exercicioRepository.save(exercicio);
    }

    public List<Exercicio> listarTodos() {
        return exercicioRepository.findAll();
    }
}