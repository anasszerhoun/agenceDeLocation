package com.example.CarsRental.entity;

import java.util.Date;
import jakarta.persistence.*;


@Entity
@Table (name="reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private int idReservation;
    private Date dateDebut;
    private Date dateFin;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="facture_id")
    private Facture facture;

    @ManyToOne
    @JoinColumn(name = "vehicule_id")
    private Vehicule vehicule;


    public int getIdReservation() {
        return idReservation;
    }

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
}
