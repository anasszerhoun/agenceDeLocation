package com.example.CarsRental.service;

import java.util.List;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.stereotype.Service;
import com.example.CarsRental.repository.vehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class vehiculeService {
    @Autowired
    private vehiculeRepository vehiculeRepo;

    public Vehicule createVehicule(Vehicule vehicule) {
        return vehiculeRepo.save(vehicule);
    }

    public List<Vehicule> getAllVehicules() {
        return vehiculeRepo.findAll();
    }

    public Vehicule getVehicleById(Long id) {
        return vehiculeRepo.findById(id).orElse(null);
    }

    public void deleteVehicule(Long id) {
        vehiculeRepo.deleteById(id);
    }
}
