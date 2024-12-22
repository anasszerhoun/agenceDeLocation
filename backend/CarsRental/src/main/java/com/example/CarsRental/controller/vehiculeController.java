package com.example.CarsRental.controller;

import java.util.List;

import com.example.CarsRental.dto.contratDTO;
import com.example.CarsRental.dto.vehiculeDTO;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.web.bind.annotation.*;
import com.example.CarsRental.service.vehiculeService;
import com.example.CarsRental.service.contratService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/vehicules")
public class vehiculeController {

    @Autowired
    private vehiculeService vehiculeServ;

    @Autowired
    private contratService contratServ;


    @PostMapping
    public vehiculeDTO createVehicule(@RequestBody vehiculeDTO vehicule) {
        return vehiculeServ.createVehicule(vehicule);
    }

    @GetMapping
    public List<vehiculeDTO> getAllVehicules() {
        return vehiculeServ.getAllVehicules();
    }
    @GetMapping("/search")
    public List<vehiculeDTO> getVehiculesByPriceRange( @RequestParam(required = true) float min,
                                                       @RequestParam(required = true) float max)
    {
        return vehiculeServ.getVehiculesByPriceRange(min, max);
    }
    @GetMapping("/contrat/{id}")
    public contratDTO getContrat(@PathVariable Long id )
    {
        return contratServ.generateContrat(id);
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
