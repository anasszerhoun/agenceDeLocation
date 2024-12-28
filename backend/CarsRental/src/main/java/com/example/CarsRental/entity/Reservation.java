package com.example.CarsRental.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import java.util.Date;
import jakarta.persistence.*;


@Entity
@Table (name="reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idReservation;
    @Getter
    @Setter
    private Date dateDebut;
    @Getter
    @Setter
    private Date dateFin;

    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    public int getIdReservation() {
        return idReservation;
    }

    public void setIdReservation(int idReservation) {
        this.idReservation = idReservation;
    }

    public Facture getFacture() {
        return facture;
    }

    public void setFacture(Facture facture) {
        this.facture = facture;
    }

    public Vehicule getVehicule() {
        return vehicule;
    }

    public void setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="facture_id")
    @Getter
    @Setter
    Facture facture;

    @ManyToOne
    @JoinColumn(name = "vehicule_id")
    @Getter
    @Setter
    @JsonManagedReference
    Vehicule vehicule;
}
