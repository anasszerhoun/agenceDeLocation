package com.example.CarsRental.entity;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int idUser;
    @Getter
    @Setter
    private String nomUser;
    @Getter
    @Setter
    private String prenomUser;
    @Getter
    @Setter
    private String mail;
    @Getter
    @Setter
    private String password;


}
