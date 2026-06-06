package com.gymflow.service;

import com.gymflow.dto.AvaliacaoFisicaRequest;
import com.gymflow.model.Aluno;
import com.gymflow.model.AvaliacaoFisica;
import com.gymflow.repository.AlunoRepository;
import com.gymflow.repository.AvaliacaoFisicaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvaliacaoFisicaService {

    private final AvaliacaoFisicaRepository avaliacaoFisicaRepository;
    private final AlunoRepository alunoRepository;

    public AvaliacaoFisicaService(
            AvaliacaoFisicaRepository avaliacaoFisicaRepository,
            AlunoRepository alunoRepository
    ) {
        this.avaliacaoFisicaRepository = avaliacaoFisicaRepository;
        this.alunoRepository = alunoRepository;
    }

    public AvaliacaoFisica salvar(AvaliacaoFisicaRequest request) {
        Aluno aluno = alunoRepository.findById(request.alunoId())
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));

        AvaliacaoFisica avaliacao = new AvaliacaoFisica();
        avaliacao.setAluno(aluno);
        avaliacao.setDataAvaliacao(request.dataAvaliacao());
        avaliacao.setPeso(request.peso());
        avaliacao.setAltura(request.altura());
        avaliacao.setPercentualGordura(request.percentualGordura());
        avaliacao.setObservacoes(request.observacoes());

        return avaliacaoFisicaRepository.save(avaliacao);
    }

    public List<AvaliacaoFisica> listarTodas() {
        return avaliacaoFisicaRepository.findAll();
    }
}