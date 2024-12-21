package com.example.CarsRental.entity;

import java.util.*;
import jakarta.persistence.*;

@Entity
@Table (name="client")
public class Client extends User {

    private Date dateNaissance;
    private String cin;
    private String permisConduire;

    @OneToMany
    @JoinColumn(name="id_client")
    private ArrayList<Reservation> reservations ;

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

    public ArrayList<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(ArrayList<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<Vehicule> getVehiculesFavorites() {
        return vehiculesFavorites;
    }

    public void setVehiculesFavorites(List<Vehicule> vehiculesFavorites) {
        this.vehiculesFavorites = vehiculesFavorites;
    }
}
