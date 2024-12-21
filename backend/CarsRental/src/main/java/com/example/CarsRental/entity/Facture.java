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

}
