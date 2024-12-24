package com.example.CarsRental.controller;

import com.example.CarsRental.dto.searchDTO;
import com.example.CarsRental.entity.Client;
import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.service.clientService;
import com.example.CarsRental.service.reservationService;
import com.example.CarsRental.service.vehiculeService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/car")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {


    private vehiculeService service ;
    private reservationService reservationServ;

    public Controller(vehiculeService service , reservationService reservationSer) {
        this.service = service;
        this.reservationServ = reservationSer;
    }
    @PostMapping("/search")
    public ResponseEntity<?> searchByDate(@RequestBody searchDTO search) throws ParseException, JsonProcessingException {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        if (search.getStartDate() == null || search.getEndDate() == null ||
                search.getStartDate().isEmpty() || search.getEndDate().isEmpty()) {
            return ResponseEntity.badRequest().body("Les dates de recherche sont obligatoires.");
        }
            Date startDate = dateFormat.parse(search.getStartDate());
            Date endDate = dateFormat.parse(search.getEndDate());

            // Définir l'heure pour la date de début et la date de fin
            // Pour la date de début : 00:00:00
            // Pour la date de fin : 23:59:59
            startDate.setHours(0);
            startDate.setMinutes(0);
            startDate.setSeconds(0);

            endDate.setHours(23);
            endDate.setMinutes(59);
            endDate.setSeconds(59);

        List<Vehicule> allVehicles = service.findAll();

        List<Vehicule> filteredList = allVehicles.stream()
                .filter(vehicule -> {
                    List<Reservation> reservations = reservationServ.findByVehicule(vehicule);

                    boolean isAvailable = reservations.stream().noneMatch(reservation ->
                            (startDate.before(reservation.getDateFin())
                                    && (endDate.after(reservation.getDateDebut()))))
                    ;

                    return isAvailable;
                })
                .collect(Collectors.toList());

        System.out.println("Start date : " + search.getStartDate());
        System.out.println("End date : " + search.getEndDate());
        System.out.println("Filtered vehicles: " + filteredList.size());

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(filteredList);



        return ResponseEntity.ok(jsonResponse);
    }

}
