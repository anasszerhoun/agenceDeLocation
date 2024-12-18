package com.example.CarsRental.repository;

import com.example.CarsRental.model.Facture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface factureRepository extends JpaRepository<Facture,Long>{

}
