package com.example.CarsRental.controller;

import com.example.CarsRental.dto.checkDispoDTO;
import com.example.CarsRental.dto.factureReservationDTO;
import com.example.CarsRental.entity.Client;
import com.example.CarsRental.entity.Facture;
import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.service.clientService;
import com.example.CarsRental.service.factureService;
import com.example.CarsRental.service.reservationService;
import com.example.CarsRental.service.vehiculeService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/car")
public class Controller {

    private vehiculeService service;
    private reservationService reservationServ;
    private clientService clientSer;

    private factureService factureSer;

    public Controller(vehiculeService service, reservationService reservationSer, clientService clientSer,
            factureService factureSer) {
        this.service = service;
        this.reservationServ = reservationSer;
        this.clientSer = clientSer;
        this.factureSer = factureSer;
    }

    @GetMapping("/search")
    public ResponseEntity<?> getData() throws ParseException, JsonProcessingException {

        List<Vehicule> allVehicles = service.findAll();

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(allVehicles);
        return ResponseEntity.ok(jsonResponse);
    }

    @PostMapping("/disponible")
    public ResponseEntity<String> checkDispo(@RequestBody checkDispoDTO dispo)
            throws ParseException, JsonProcessingException {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        if (dispo.getStartDate() == null || dispo.getEndDate() == null ||
                dispo.getStartDate().isEmpty() || dispo.getEndDate().isEmpty()) {
            return ResponseEntity.badRequest().body("false");
        }
        Date startDate = dateFormat.parse(dispo.getStartDate());
        Date endDate = dateFormat.parse(dispo.getEndDate());

        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);

        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        Optional<Vehicule> vehicule = service.findById(dispo.getId());

        if (!vehicule.isPresent()) {
            return ResponseEntity.badRequest().body("false");
        }

        List<Reservation> reservations = reservationServ.findByVehicule(vehicule.get());

        boolean isAvailable = reservations.stream().noneMatch(
                reservation -> startDate.before(reservation.getDateFin()) && endDate.after(reservation.getDateDebut()));

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(isAvailable);

        return ResponseEntity.ok(jsonResponse);
    }

    @PostMapping("/reservation")
    public ResponseEntity<?> addReservation(@RequestBody factureReservationDTO factReserv) throws ParseException {

        Facture facture = new Facture();

        Date date = new Date();
        facture.setDatePaiement(date);
        facture.setMontantPaye(factReserv.getTotalPrice());

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        factureSer.save(facture);

        Optional<Vehicule> vehicule = service.findById(factReserv.getIdVehicule());

        Date startDate = dateFormat.parse(factReserv.getStartDate());
        Date endDate = dateFormat.parse(factReserv.getEndDate());

        Reservation reservation = new Reservation();
        reservation.setDateDebut(startDate);
        reservation.setDateFin(endDate);
        reservation.setVehicule(vehicule.get());
        reservation.setFacture(facture);

        String username = getAuthenticatedUsername();
        Client client = clientSer.findByEmail(username);

        reservation.setClient(client);
        //client.getReservations().add(reservation);


        reservationServ.save(reservation);
        clientSer.save(client);

        return ResponseEntity.ok(true);
    }
    

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/favoris")
    public ResponseEntity<?> getFavoris() throws JsonProcessingException {
        String username = getAuthenticatedUsername();
        Client client = clientSer.findByEmail(username);

        List<Vehicule> vehicules = client.getVehiculesFavorites();
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(vehicules);


        return ResponseEntity.ok(jsonResponse);
    }

    @PostMapping("/favoris/add")
    public Boolean addFavoris(@RequestParam Long id) {

        String username = getAuthenticatedUsername();
        Client client = clientSer.findByEmail(username);

        Optional<Vehicule> optionalReponse = service.findById(id);
        Vehicule vehicule = optionalReponse.get();
        if (!client.getVehiculesFavorites().contains(vehicule)) {
            client.getVehiculesFavorites().add(vehicule);
            clientSer.save(client);
        }

        return true;
    };

    @DeleteMapping("/favoris/remove")
    public Boolean deleteFavoris(@RequestParam Long id) {

        String username = getAuthenticatedUsername();
        Client client = clientSer.findByEmail(username);

        Optional<Vehicule> optionalReponse = service.findById(id);
        Vehicule vehicule = optionalReponse.get();
        if (client.getVehiculesFavorites().contains(vehicule)) {
            client.getVehiculesFavorites().remove(vehicule);
            clientSer.save(client);
        }

        return true;
    };

    private String getAuthenticatedUsername() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof User) {
            return ((User) principal).getUsername();
        }
        return null;
    }

}
