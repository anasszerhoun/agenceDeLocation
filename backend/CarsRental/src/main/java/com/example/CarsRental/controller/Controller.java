package com.example.CarsRental.controller;

import com.example.CarsRental.entity.Client;
import com.example.CarsRental.service.clientService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    private clientService service;

    @Autowired
    public Controller(clientService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Client client) {

        if (service.findByEmail(client.getMail()) == null) {
            System.out.println("Nom : " + client.getNomUser());
            System.out.println("Prénom : " + client.getPrenomUser());
            System.out.println("Email : " + client.getMail());
            System.out.println("Mot de passe : " + client.getPassword());
            System.out.println("Permis : " + client.getPermisConduire());
            System.out.println("Numéro de Téléphone : " + client.getNumTelephone());
            System.out.println("Date Naissance : " + client.getDateNaissance());

            service.save(client);
            return ResponseEntity.ok().body(true);
        } else {
            return ResponseEntity.ok().body(false);
        }
    }
}
