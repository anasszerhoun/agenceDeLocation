package com.example.CarsRental.entity;

import java.util.*;

import com.example.CarsRental.enumiration.CarStatus;
import jakarta.persistence.*;

@Entity
@Table(name = "vehicule")
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private int id_vehicule;

    @Column(nullable = false,unique = true)
    private String immatriculation;

    private String marque;
    private String modele;
    private String type;

    @Enumerated(EnumType.STRING)
    private CarStatus status;

    private float tarif;

    @ManyToMany(mappedBy = "vehiculesFavorites")
    private  List<Client> Fans;

    public int getId_vehicule() {
        return id_vehicule;
    }

    public void setId_vehicule(int id_vehicule) {
        this.id_vehicule = id_vehicule;
    }

    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public CarStatus getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = CarStatus.valueOf(status);
    }

    public float getTarif() {
        return tarif;
    }

    public void setTarif(float tarif) {
        this.tarif = tarif;
    }

    public List<Client> getFans() {
        return Fans;
    }

    public void setFans(List<Client> fans) {
        Fans = fans;
    }
}
