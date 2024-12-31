package com.example.CarsRental.repository;

import com.example.CarsRental.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface clientRepository extends JpaRepository<Client,Long> {
    public Client findByMail(String mail);
}
