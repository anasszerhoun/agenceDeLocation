package com.example.CarsRental.service;

import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.repository.clientRepository;
import com.example.CarsRental.repository.reservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class reservationService {

    @Autowired
    private reservationRepository repo;

    public List<Reservation> findByVehicule(Vehicule vehicule){
        return repo.findByVehicule(vehicule);
    };

    public Reservation save(Reservation reservation){
        return repo.save(reservation);
    }
}
