package com.example.CarsRental.service;

import com.example.CarsRental.entity.Client;
import com.example.CarsRental.repository.clientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class clientService {
    @Autowired
    private  clientRepository repo;

    public Client findByEmail(String mail){
        return repo.findByMail(mail);
    }
    public  Client save(Client client){
        return repo.save(client);
    }
}
