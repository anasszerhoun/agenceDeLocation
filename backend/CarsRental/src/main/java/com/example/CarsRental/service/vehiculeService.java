package com.example.CarsRental.service;

import java.util.List;
import java.util.stream.Collectors;

import com.example.CarsRental.dto.vehiculeDTO;
import org.modelmapper.ModelMapper;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.stereotype.Service;
import com.example.CarsRental.repository.vehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class vehiculeService {
    @Autowired
    private vehiculeRepository vehiculeRepo;

    @Autowired
    private ModelMapper modelMapper;

    public vehiculeDTO createVehicule(vehiculeDTO vDTO) {
        Vehicule vehicule = modelMapper.map(vDTO, Vehicule.class);
        vehicule = vehiculeRepo.save(vehicule);
        return modelMapper.map(vehicule, vehiculeDTO.class);
    }

    public List<vehiculeDTO> getAllVehicules() {
        return vehiculeRepo.findAll().stream()
                .map(vehicule -> modelMapper.map(vehicule, vehiculeDTO.class))
                .collect(Collectors.toList());
    }

    public List<vehiculeDTO> getVehiculesByPriceRange(float min,float max) {
        return vehiculeRepo.findVehiculesByPriceRange(min,max).stream()
                .map(vehicule -> modelMapper.map(vehicule, vehiculeDTO.class))
                .collect(Collectors.toList());
    }

    public Vehicule getVehicleById(Long id) {
        return vehiculeRepo.findById(id).orElse(null);
    }

    public void deleteVehicule(Long id) {
        vehiculeRepo.deleteById(id);
    }

}
