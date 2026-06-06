package com.gymflow.controller;

import com.gymflow.dto.AvaliacaoFisicaRequest;
import com.gymflow.model.AvaliacaoFisica;
import com.gymflow.service.AvaliacaoFisicaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/avaliacoes-fisicas")
@CrossOrigin(origins = "http://localhost:4200")
public class AvaliacaoFisicaController {

    private final AvaliacaoFisicaService avaliacaoFisicaService;

    public AvaliacaoFisicaController(AvaliacaoFisicaService avaliacaoFisicaService) {
        this.avaliacaoFisicaService = avaliacaoFisicaService;
    }

    @PostMapping
    public ResponseEntity<AvaliacaoFisica> criarAvaliacao(@RequestBody AvaliacaoFisicaRequest request) {
        AvaliacaoFisica avaliacao = avaliacaoFisicaService.salvar(request);
        return ResponseEntity.ok(avaliacao);
    }

    @GetMapping
    public ResponseEntity<List<AvaliacaoFisica>> listarAvaliacoes() {
        return ResponseEntity.ok(avaliacaoFisicaService.listarTodas());
    }
}