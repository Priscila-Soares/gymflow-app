package com.gymflow.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "exercicios")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Exercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(name = "grupo_muscular", nullable = false)
    private String grupoMuscular;

    private String descricao;
}
