package com.example.CarsRental.repository;

import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface vehiculeRepository extends JpaRepository<Vehicule,Long> {
}
