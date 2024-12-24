package com.example.CarsRental.controller;

import com.example.CarsRental.dto.MonthlyRentalStatsDTO;
import com.example.CarsRental.dto.idreservationDTO;
import com.example.CarsRental.dto.reservationDTO;
import com.example.CarsRental.dto.vehiculeDTO;
import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.service.reservationService;
import com.example.CarsRental.service.vehiculeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired
    private reservationService reservationService;
    @Autowired
    private vehiculeService vehiculeServ;
    @Autowired
    private reservationService reservationServ;

    @GetMapping("rented_cars")
    public List<reservationDTO> getRentedVehicules() {
        return reservationService.getRantedcars();
    }

    @GetMapping("all_cars")
    public List<vehiculeDTO> getAllVehicules() {
        return vehiculeServ.getAllVehicules();
    }

    @GetMapping("all_reservations")
    public List<idreservationDTO> getAllReservations() {
        return reservationServ.getAllReservations();
    }

    @GetMapping("/marques")
    public List <Map<String,Object>> getMarques()
    {
        return vehiculeServ.getPopularMarques();
    }

    @GetMapping("/maintenance")
    public List<vehiculeDTO> getCarsUnderMaintenance() {
        return vehiculeServ.getCarsUnderMaintenance();
    }

    @GetMapping("/moi_stats")
    public List<MonthlyRentalStatsDTO> getMonthlyRentalStats() {
        return reservationServ.getMonthlyRentalStats();
    }

}


