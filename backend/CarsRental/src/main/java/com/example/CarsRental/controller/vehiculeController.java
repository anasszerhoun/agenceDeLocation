package com.example.CarsRental.controller;

import java.util.List;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.web.bind.annotation.*;
import com.example.CarsRental.service.vehiculeService;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/vehicules")
public class vehiculeController {
    @Autowired
    private vehiculeService vehiculeServ;

    @PostMapping
    public Vehicule createVehicule(@RequestBody Vehicule vehicule) {
        return vehiculeServ.createVehicule(vehicule);
    }

    @GetMapping
    public List<Vehicule> getAllVehicules() {
        return vehiculeServ.getAllVehicules();
    }

    @GetMapping("/{id}")
    public Vehicule getVehiculeById(@PathVariable Long id) {
        return vehiculeServ.getVehicleById(id);
    }

//    @PutMapping("/{id}")
//    public Vehicule updateVehicule(@PathVariable Long id, @RequestBody Vehicule vehicule) {
//        return vehiculeServ.updateVehicule(id, vehicule);
//    }

    @DeleteMapping("/{id}")
    public void deleteVehicule(@PathVariable Long id) {
        vehiculeServ.deleteVehicule(id);
    }

}
