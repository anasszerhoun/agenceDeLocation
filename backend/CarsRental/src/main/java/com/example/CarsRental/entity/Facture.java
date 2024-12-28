package com.example.CarsRental.entity;

import lombok.*;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table (name="facture")
public class Facture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFacture;
    @Getter
    @Setter
    private float montantPaye;
    @Getter
    @Setter
    private Date datePaiement;
    @OneToOne(mappedBy = "facture")
    @Getter
    @Setter
    Reservation reservation;

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
}
