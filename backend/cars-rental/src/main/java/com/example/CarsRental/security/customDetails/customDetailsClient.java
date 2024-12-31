package com.example.CarsRental.security.customDetails;

import com.example.CarsRental.entity.Client;
import com.example.CarsRental.service.clientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class customDetailsClient implements UserDetailsService {

    private clientService service;
    @Autowired
    public customDetailsClient(clientService service){
        this.service=service;
    }
    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        Client client = (Client) service.findByEmail(mail);
        if (client == null) {
            throw new UsernameNotFoundException("Client with email " + mail + " not found.");
        }
        return new User(client.getMail(), client.getPassword(), new ArrayList<>());
    }
}
