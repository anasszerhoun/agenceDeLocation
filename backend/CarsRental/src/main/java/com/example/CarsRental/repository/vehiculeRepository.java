package com.example.CarsRental.repository;

import com.example.CarsRental.model.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface vehiculeRepository extends JpaRepository<Vehicule,Long> {

}
