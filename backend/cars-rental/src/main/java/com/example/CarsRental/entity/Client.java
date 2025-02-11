package com.example.CarsRental.entity;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table (name="client")
public class Client extends User {

    private Date dateNaissance;
    private String numTelephone;
    private String cin;
    private String permisConduire;

    @JsonBackReference
    @OneToMany(mappedBy = "client")
    private List<Reservation> reservations ;

    @ManyToMany
    @JoinTable(
            name="favoris",
            joinColumns = @JoinColumn(name = "client_id"),
            inverseJoinColumns = @JoinColumn(name = "vehicle_id")
    )
    private List<Vehicule> vehiculesFavorites;

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public String getNumTelephone() {
        return numTelephone;
    }

    public void setNumTelephone(String numTelephone) {
        this.numTelephone = numTelephone;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getTelephone() {
        return numTelephone;
    }

    public void setTelephone(String telephone) {
        numTelephone = telephone;
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

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<Vehicule> getVehiculesFavorites() {
        return vehiculesFavorites;
    }

    public void setVehiculesFavorites(List<Vehicule> vehiculesFavorites) {
        this.vehiculesFavorites = vehiculesFavorites;
    }
}
