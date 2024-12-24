package com.example.CarsRental.repository;

import com.example.CarsRental.dto.MonthlyRentalStatsDTO;
import com.example.CarsRental.dto.reservationDTO;
import com.example.CarsRental.entity.Facture;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.CarsRental.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.CarsRental.dto.idreservationDTO ;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface reservationRepository extends JpaRepository<Reservation,Long> {

    List<Reservation> findByDateDebutLessThanEqualAndDateFinGreaterThanEqual(
            Date currentDate, Date currentDate2);

    @Query("SELECT new com.example.CarsRental.dto.idreservationDTO(r.idReservation) FROM Reservation r")
    List<idreservationDTO> findAllreservations();


    @Query("SELECT new com.example.CarsRental.dto.MonthlyRentalStatsDTO(" +
            "MONTH(r.dateDebut), YEAR(r.dateDebut), " +
            "COUNT(DISTINCT r.vehicule), SUM(f.montantPaye)) " +
            "FROM Reservation r " +
            "JOIN r.facture f " +
            "WHERE r.dateDebut IS NOT NULL " +
            "GROUP BY YEAR(r.dateDebut), MONTH(r.dateDebut) " +
            "ORDER BY YEAR(r.dateDebut) DESC, MONTH(r.dateDebut) DESC")
    List<MonthlyRentalStatsDTO> findMonthlyRentalStats();
}
