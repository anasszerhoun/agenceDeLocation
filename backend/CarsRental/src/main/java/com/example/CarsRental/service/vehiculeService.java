package com.example.CarsRental.service;

import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.repository.vehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class vehiculeService {

    @Autowired
    private vehiculeRepository repo;
    public List<Vehicule> findAll(){
        return repo.findAll();
    }
}
