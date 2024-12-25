package com.example.CarsRental.controller;

import com.example.CarsRental.dto.checkDispoDTO;
import com.example.CarsRental.entity.Client;
import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.service.clientService;
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


    private vehiculeService service ;
    private reservationService reservationServ;
    private clientService clientSer;


    public Controller(vehiculeService service , reservationService reservationSer,clientService clientSer) {
        this.service = service;
        this.reservationServ = reservationSer;
        this.clientSer = clientSer;
    }

    @GetMapping("/search")
    public ResponseEntity<?> getData() throws ParseException, JsonProcessingException {

       // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        /*if (search.getStartDate() == null || search.getEndDate() == null ||
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
        endDate.setSeconds(59);*/

        List<Vehicule> allVehicles = service.findAll();

        /*List<Vehicule> filteredList = allVehicles.stream()
                .filter(vehicule -> {
                    List<Reservation> reservations = reservationServ.findByVehicule(vehicule);

                    boolean isAvailable = reservations.stream().noneMatch(reservation ->
                            (startDate.before(reservation.getDateFin())
                                    && (endDate.after(reservation.getDateDebut()))))
                            ;

                    return isAvailable;
                })
                .collect(Collectors.toList());*/

       /* System.out.println("Start date : " + search.getStartDate());
        System.out.println("End date : " + search.getEndDate());*/
        //System.out.println("Filtered vehicles: " + filteredList.size());

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(allVehicles);
        return ResponseEntity.ok(jsonResponse);
    }


    @PostMapping("/disponible")
    public ResponseEntity<String> checkDispo(@RequestBody checkDispoDTO dispo) throws ParseException, JsonProcessingException {

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
            System.out.println("Hellooooooooo");
            return ResponseEntity.badRequest().body("false");
        }

        List<Reservation> reservations = reservationServ.findByVehicule(vehicule.get());

        boolean isAvailable = reservations.stream().noneMatch(reservation ->
                startDate.before(reservation.getDateFin()) && endDate.after(reservation.getDateDebut())
        );

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(isAvailable);

        return ResponseEntity.ok(jsonResponse);
    }


   /* @PostMapping("/search")
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
    }*/

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/favoris")
    public ResponseEntity<?> getFavoris() throws JsonProcessingException {
        String username = getAuthenticatedUsername();
        Client client = clientSer.findByEmail(username);

        List<Vehicule> vehicules = client.getVehiculesFavorites();
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(vehicules);

        System.out.println(jsonResponse);

        return ResponseEntity.ok(jsonResponse);
    }

    @PostMapping("/favoris/add")
    public Boolean addFavoris(@RequestParam Long id){

        String username = getAuthenticatedUsername();
        Client client = clientSer.findByEmail(username);



        Optional<Vehicule> optionalReponse = service.findById(id);
        Vehicule vehicule = optionalReponse.get();
        if(!client.getVehiculesFavorites().contains(vehicule)){
            client.getVehiculesFavorites().add(vehicule);
            clientSer.save(client);
        }

        System.out.println("Favoris ajouter");
        return true;
    };
    @DeleteMapping("/favoris/remove")
    public Boolean deleteFavoris(@RequestParam Long id){

        String username = getAuthenticatedUsername();
        Client client = clientSer.findByEmail(username);

        Optional<Vehicule> optionalReponse = service.findById(id);
        Vehicule vehicule = optionalReponse.get();
        if(client.getVehiculesFavorites().contains(vehicule)){
            client.getVehiculesFavorites().remove(vehicule);
            clientSer.save(client);
        }

        System.out.println("Favoris Delete");
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
