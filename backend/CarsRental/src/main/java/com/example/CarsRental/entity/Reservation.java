package com.example.CarsRental.entity;

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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="facture_id")
    @Getter
    @Setter
    Facture facture;

    @ManyToOne
    @JoinColumn(name = "vehicule_id")
    @Getter
    @Setter
    Vehicule vehicule;
}
