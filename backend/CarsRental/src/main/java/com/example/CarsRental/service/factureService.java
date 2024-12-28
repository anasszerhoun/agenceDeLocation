package com.example.CarsRental.service;

import com.example.CarsRental.entity.Facture;
import com.example.CarsRental.repository.clientRepository;
import com.example.CarsRental.repository.factureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class factureService {

    @Autowired
    private factureRepository repo;
    public Facture save(Facture facture){
        return repo.save(facture);
    }
}
