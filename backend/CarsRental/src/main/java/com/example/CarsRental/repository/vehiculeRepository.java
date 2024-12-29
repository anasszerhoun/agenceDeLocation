package com.example.CarsRental.repository;

import java.util.*;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface vehiculeRepository extends JpaRepository<Vehicule,Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM Vehicule v WHERE v.immatriculation = :im")
    void deleteByImmatricule(String im);

    @Query("Select v.marque,count(r) as nbr From Vehicule v join Reservation r on v.id_vehicule=r.vehicule.id_vehicule group by v.marque order by nbr desc limit 5")
    List<Object[]> getTop5RentedMarques();

    Vehicule findByImmatriculation(String im);


}
