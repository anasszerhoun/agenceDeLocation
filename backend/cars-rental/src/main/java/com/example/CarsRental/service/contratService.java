package com.example.CarsRental.service;

import com.example.CarsRental.entity.Client;
import com.example.CarsRental.entity.Facture;
import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.entity.Vehicule;
import com.example.CarsRental.repository.*;
import com.example.CarsRental.dto.contratDTO;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class contratService {
    @Autowired
    private reservationRepository reservationRepo;

    @Autowired
    private clientRepository clientRepo;

    @Autowired
    private factureRepository factureRepo;

    public contratDTO generateContrat(Long idReservation){
        Reservation reservation = reservationRepo.findById(idReservation)
                .orElseThrow(() -> new IllegalArgumentException("Reservation not found"));

        Client client = reservation.getClient();
        Facture facture = reservation.getFacture();
        Vehicule vehicule = reservation.getVehicule();
        contratDTO contrat = new contratDTO();

        contrat.setIdContrat(reservation.getIdReservation());

        contrat.setNomClient(client.getNomUser());
        contrat.setPrenomClient(client.getPrenomUser());
        contrat.setTelephone(client.getTelephone());
        contrat.setPermis(client.getPermisConduire());

        contrat.setDateDebut(reservation.getDateDebut());
        contrat.setDateFin(reservation.getDateFin());

        contrat.setImmatriculation(vehicule.getImmatriculation());
        contrat.setMarque(vehicule.getMarque());
        contrat.setModele(vehicule.getModele());

        contrat.setDatePaiement(facture.getDatePaiement());
        contrat.setMontantPaye(facture.getMontantPaye());
        return contrat;
    }
}
