package com.gymflow.repository;

import com.gymflow.model.Exercicio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExercicioRepository extends JpaRepository<Exercicio, Long> {
}