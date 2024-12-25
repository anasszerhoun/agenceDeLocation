package com.example.CarsRental.entity;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import jakarta.persistence.*;


@Entity
@Table(name = "vehicule")
public class Vehicule {

    @Id
    @JsonProperty("idVehicule")  // Si vous voulez un nom spécifique dans le JSON
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_vehicule;

    @Column(nullable = false, unique = true)
    @JsonProperty("immatriculation")  // Si vous voulez un nom spécifique dans le JSON
    private String immatriculation;

    @Getter
    @Setter
    @JsonProperty("marque")  // Si vous voulez un nom spécifique dans le JSON
    private String marque;

    @Getter
    @Setter
    @JsonProperty("modele")  // Si vous voulez un nom spécifique dans le JSON
    private String modele;

    @Getter
    @Setter
    @JsonProperty("type")  // Si vous voulez un nom spécifique dans le JSON
    private String type;

    @Getter
    @Setter
    @JsonProperty("status")
    private String status;

    @Getter
    @Setter
    @JsonProperty("tarif")  
    private float tarif;

   /* @Id
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
    private float tarif;*/

    @ManyToMany(mappedBy = "vehiculesFavorites")
    List<Client> Fans;


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
