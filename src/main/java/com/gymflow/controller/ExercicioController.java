package com.gymflow.controller;

import com.gymflow.model.Exercicio;
import com.gymflow.service.ExercicioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/exercicios")
@CrossOrigin(origins = "http://localhost:4200")
public class ExercicioController {

    private final ExercicioService exercicioService;

    public ExercicioController(ExercicioService exercicioService) {
        this.exercicioService = exercicioService;
    }

    @PostMapping
    public ResponseEntity<Exercicio> criarExercicio(@RequestBody Exercicio exercicio) {
        Exercicio novoExercicio = exercicioService.salvar(exercicio);
        return ResponseEntity.ok(novoExercicio);
    }

    @GetMapping
    public ResponseEntity<List<Exercicio>> listarExercicios() {
        List<Exercicio> exercicios = exercicioService.listarTodos();
        return ResponseEntity.ok(exercicios);
    }
}