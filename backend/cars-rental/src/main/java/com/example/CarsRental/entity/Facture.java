package com.example.CarsRental.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table (name="facture")
public class Facture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFacture;
    private float montantPaye;
    @Temporal(TemporalType.DATE)
    private Date datePaiement;

    @OneToOne(mappedBy = "facture")
    @JsonBackReference
    private Reservation reservation;

    public int getIdFacture() {
        return idFacture;
    }

    public void setIdFacture(int idFacture) {
        this.idFacture = idFacture;
    }

    public float getMontantPaye() {
        return montantPaye;
    }

    public void setMontantPaye(float montantPaye) {
        this.montantPaye = montantPaye;
    }

    public Date getDatePaiement() {
        return datePaiement;
    }

    public void setDatePaiement(Date datePaiement) {
        this.datePaiement = datePaiement;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
}
