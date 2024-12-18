package com.example.CarsRental.repository;

import com.example.CarsRental.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface reservationRepository extends JpaRepository<Reservation,Long> {
}
