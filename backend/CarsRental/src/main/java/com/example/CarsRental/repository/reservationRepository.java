package com.example.CarsRental.repository;

import com.example.CarsRental.entity.Facture;
import org.springframework.stereotype.Repository;
import com.example.CarsRental.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

@Repository
public interface reservationRepository extends JpaRepository<Reservation,Long> {

}
