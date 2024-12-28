package com.example.CarsRental.entity;

import lombok.*;

import java.util.*;
import jakarta.persistence.*;

@Entity
@Table (name="client")
public class Client extends User {
    @Getter
    @Setter
    private Date dateNaissance;
    @Getter
    @Setter
    private String cin;
    @Getter
    @Setter
    private String permisConduire;
    @Getter
    @Setter
    private String numTelephone;

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getPermisConduire() {
        return permisConduire;
    }

    public void setPermisConduire(String permisConduire) {
        this.permisConduire = permisConduire;
    }

    public String getNumTelephone() {
        return numTelephone;
    }

    public void setNumTelephone(String numTelephone) {
        this.numTelephone = numTelephone;
    }

    @OneToMany
    @JoinColumn(name="id_client")
    @Getter
    private List<Reservation> reservations = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name="favoris",
            joinColumns = @JoinColumn(name = "client_id"),
            inverseJoinColumns = @JoinColumn(name = "vehicle_id")
    )
    @Getter
    List<Vehicule> vehiculesFavorites = new ArrayList<>();

    public List<Vehicule> getVehiculesFavorites() {
        return vehiculesFavorites;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }
}
