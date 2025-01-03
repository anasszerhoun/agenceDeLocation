package com.example.CarsRental.service;

import com.example.CarsRental.dto.clientDTO;
import com.example.CarsRental.dto.reservationDTO;
import com.example.CarsRental.entity.Client;
import com.example.CarsRental.entity.Reservation;
import com.example.CarsRental.repository.clientRepository;
import com.example.CarsRental.repository.reservationRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class profileService {
    @Autowired
    private clientRepository clientRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private reservationRepository reservationRepo;

    public clientDTO getClientWithReservationHistory(String email) {
        Client client = clientRepo.findByMail(email);
        if (client == null) {
            throw new UsernameNotFoundException("Client not found");
        }
        List<Reservation> reservations = reservationRepo.findByClientEmail(email);
        List<reservationDTO> reservationDTOs = reservations.stream()
                .map(reservation -> modelMapper.map(reservation, reservationDTO.class))
                .collect(Collectors.toList());

        clientDTO cDTO = modelMapper.map(client, clientDTO.class);
        cDTO.setReservations(reservationDTOs);
        return cDTO;
    }

}
