package com.example.CarsRental.service;

import com.example.CarsRental.dto.MonthlyRentalStatsDTO;
import com.example.CarsRental.dto.idreservationDTO;
import com.example.CarsRental.dto.reservationDTO;
import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.repository.reservationRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class reservationService {

    private final reservationRepository reservationRepository;

    public reservationService(reservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public List<reservationDTO> getRantedcars() {
        Date today = new Date(); // Gets current date

        // Find all reservations where today is between dateDebut and dateFin
        List<Reservation> activeReservations = reservationRepository.findByDateDebutLessThanEqualAndDateFinGreaterThanEqual(
                today, today);

        // Convert to DTO
        return activeReservations.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private reservationDTO convertToDTO(Reservation reservation) {
        reservationDTO dto = new reservationDTO();
        dto.setIdReservation(reservation.getIdReservation());
        dto.setDateDebut(reservation.getDateDebut());
        dto.setDateFin(reservation.getDateFin());
        return dto;
    }
    public List<idreservationDTO> getAllReservations() {
        return reservationRepository.findAllreservations();
    }

    public List<MonthlyRentalStatsDTO> getMonthlyRentalStats() {
        return reservationRepository.findMonthlyRentalStats();
    }

}