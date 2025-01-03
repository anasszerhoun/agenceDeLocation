package com.example.CarsRental.controller;

import com.example.CarsRental.dto.clientDTO;
import com.example.CarsRental.service.profileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class profileController {
    @Autowired
    private profileService profileServ;
    private String getAuthenticatedUsername() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof User) {
            return ((User) principal).getUsername();
        }
        return null;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/profile")
    public clientDTO getProfile(){
        String username=getAuthenticatedUsername();
        System.out.print(username);
        return profileServ.getClientWithReservationHistory(username);

    }

}
