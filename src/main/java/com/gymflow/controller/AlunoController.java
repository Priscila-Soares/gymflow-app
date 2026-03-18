package com.gymflow.controller;

import com.gymflow.model.Aluno;
import com.gymflow.service.AlunoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/alunos")
@CrossOrigin(origins = "http://localhost:4200")
public class AlunoController {

    private final AlunoService alunoService;

    public AlunoController(AlunoService alunoService) {
        this.alunoService = alunoService;
    }

    @PostMapping
    public ResponseEntity<Aluno> criarAluno(@RequestBody Aluno aluno) {
        Aluno novoAluno = alunoService.salvar(aluno);
        return ResponseEntity.ok(novoAluno);
    }

    @GetMapping
    public ResponseEntity<List<Aluno>> listarAlunos() {
        List<Aluno> alunos = alunoService.listarTodos();
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aluno> buscarAlunoPorId(@PathVariable Long id) {
        Optional<Aluno> aluno = alunoService.buscarPorId(id);

        return aluno.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Aluno> atualizarAluno(@PathVariable Long id, @RequestBody Aluno aluno) {
        Aluno alunoAtualizado = alunoService.atualizar(id, aluno);

        if (alunoAtualizado != null) {
            return ResponseEntity.ok(alunoAtualizado);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarAluno(@PathVariable Long id) {
        alunoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}