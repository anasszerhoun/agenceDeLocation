package com.example.CarsRental.controller;

import com.example.CarsRental.dto.adminDTO;
import com.example.CarsRental.entity.Admin;
import com.example.CarsRental.service.adminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admins")
public class adminController {

    @Autowired
    private adminService adminServ;

    @GetMapping
    public List<adminDTO> getAdmins() {
        return adminServ.getAdmins();
    }
    @PostMapping
    public adminDTO createAdmin(@RequestBody Admin admin) {
        return adminServ.createAdmin(admin);
    }

}
