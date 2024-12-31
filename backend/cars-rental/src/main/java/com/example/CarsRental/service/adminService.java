package com.example.CarsRental.service;

import com.example.CarsRental.dto.vehiculeDTO;
import com.example.CarsRental.entity.Admin;

import java.util.List;
import org.modelmapper.ModelMapper;
import java.util.stream.Collectors;
import com.example.CarsRental.dto.adminDTO;
import org.springframework.stereotype.Service;
import com.example.CarsRental.repository.adminRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class adminService {

    @Autowired
    private adminRepository adminRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<adminDTO> getAdmins() {
        return adminRepo.findAll().stream()
                .map(admin -> modelMapper.map(admin, adminDTO.class))
                .collect(Collectors.toList());
    }
    public adminDTO createAdmin(Admin admin) {
        admin = adminRepo.save(admin);
        return modelMapper.map(admin, adminDTO.class);
    }
}
