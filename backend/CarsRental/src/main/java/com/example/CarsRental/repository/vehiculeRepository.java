package com.example.CarsRental.repository;

import java.util.*;

import com.example.CarsRental.dto.vehiculeDTO;
import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.enumiration.CarStatus;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface vehiculeRepository extends JpaRepository<Vehicule,Long> {
    @Query("SELECT v FROM Vehicule v WHERE v.tarif BETWEEN :min AND :max")
    List<Vehicule> findVehiculesByPriceRange(@Param("min") float min,@Param("max") float max);

    @Query("Select v.marque,count(r) as nbr From Vehicule v join Reservation r on v.id_vehicule=r.vehicule.id_vehicule group by v.marque order by nbr desc limit 5")
    List<Object[]> getTop5RentedMarques();

    @Query("SELECT new com.example.CarsRental.dto.vehiculeDTO(r.immatriculation) FROM Vehicule r WHERE r.status = :status")
    List<vehiculeDTO> findByStatus(@Param("status") CarStatus status);


}
