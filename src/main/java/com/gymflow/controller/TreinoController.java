package com.gymflow.controller;

import com.gymflow.dto.TreinoRequest;
import com.gymflow.model.Treino;
import com.gymflow.service.TreinoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/treinos")
@CrossOrigin(origins = "http://localhost:4200")
public class TreinoController {

    private final TreinoService treinoService;

    public TreinoController(TreinoService treinoService) {
        this.treinoService = treinoService;
    }

    @PostMapping
    public ResponseEntity<Treino> criarTreino(@RequestBody TreinoRequest request) {
        Treino treino = treinoService.salvar(
                request.getAlunoId(),
                request.getExerciciosIds(),
                request.getNome()
        );

        return ResponseEntity.ok(treino);
    }

    @GetMapping
    public ResponseEntity<List<Treino>> listarTreinos() {
        return ResponseEntity.ok(treinoService.listarTodos());
    }
}