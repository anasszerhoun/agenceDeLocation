package com.example.CarsRental.entity;

import java.util.*;
import lombok.*;
import jakarta.persistence.*;


@Entity
@Table(name = "vehicule")
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_vehicule;
    @Column(nullable = false,unique = true)
    @Getter
    @Setter
    private String immatriculation;
    @Getter
    @Setter
    private String marque;
    @Getter
    @Setter
    private String modele;
    @Getter
    @Setter
    private String type;
    @Getter
    @Setter
    private String status;
    @Getter
    @Setter
    private float tarif;

    @ManyToMany(mappedBy = "vehiculesFavorites")
    ArrayList<Client> Fans;



}
