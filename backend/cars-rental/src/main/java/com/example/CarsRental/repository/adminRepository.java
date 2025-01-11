package com.example.CarsRental.repository;

import com.example.CarsRental.entity.Admin;
import com.example.CarsRental.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface adminRepository extends JpaRepository<Admin,Long> {
    public Admin findByMail(String mail);

}
