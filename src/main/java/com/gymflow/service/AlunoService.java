package com.gymflow.service;

import com.gymflow.model.Aluno;
import com.gymflow.repository.AlunoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    private final AlunoRepository alunoRepository;

    public AlunoService(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    public Aluno salvar(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public List<Aluno> listarTodos() {
        return alunoRepository.findAll();
    }

    public Optional<Aluno> buscarPorId(Long id) {
        return alunoRepository.findById(id);
    }

    public Aluno atualizar(Long id, Aluno alunoAtualizado) {
        Optional<Aluno> alunoExistente = alunoRepository.findById(id);

        if (alunoExistente.isPresent()) {
            Aluno aluno = alunoExistente.get();
            aluno.setNome(alunoAtualizado.getNome());
            aluno.setEmail(alunoAtualizado.getEmail());
            aluno.setIdade(alunoAtualizado.getIdade());
            aluno.setPeso(alunoAtualizado.getPeso());
            aluno.setAltura(alunoAtualizado.getAltura());
            aluno.setObjetivo(alunoAtualizado.getObjetivo());

            return alunoRepository.save(aluno);
        }

        return null;
    }

    public void deletar(Long id) {
        alunoRepository.deleteById(id);
    }
}