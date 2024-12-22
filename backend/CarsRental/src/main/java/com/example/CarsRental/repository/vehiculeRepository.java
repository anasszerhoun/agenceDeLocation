package com.example.CarsRental.repository;

import java.util.*;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface vehiculeRepository extends JpaRepository<Vehicule,Long> {
    @Query("SELECT v FROM Vehicule v WHERE v.tarif BETWEEN :min AND :max")
    List<Vehicule> findVehiculesByPriceRange(@Param("min") float min,@Param("max") float max);
}
