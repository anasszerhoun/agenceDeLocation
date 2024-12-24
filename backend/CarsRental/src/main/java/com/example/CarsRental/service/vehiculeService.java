package com.example.CarsRental.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.example.CarsRental.dto.vehiculeDTO;
import com.example.CarsRental.enumiration.CarStatus;
import org.modelmapper.ModelMapper;
import com.example.CarsRental.entity.Vehicule;
import org.springframework.stereotype.Service;
import com.example.CarsRental.repository.vehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class vehiculeService {
    @Autowired
    private vehiculeRepository vehiculeRepo;

    @Autowired
    private ModelMapper modelMapper;

    public vehiculeDTO createVehicule(vehiculeDTO vDTO) {
        Vehicule vehicule = modelMapper.map(vDTO, Vehicule.class);
        vehicule = vehiculeRepo.save(vehicule);
        return modelMapper.map(vehicule, vehiculeDTO.class);
    }

    public List<vehiculeDTO> getAllVehicules() {
        return vehiculeRepo.findAll().stream()
                .map(vehicule -> modelMapper.map(vehicule, vehiculeDTO.class))
                .collect(Collectors.toList());
    }

    public List<vehiculeDTO> getVehiculesByPriceRange(float min,float max) {
        return vehiculeRepo.findVehiculesByPriceRange(min,max).stream()
                .map(vehicule -> modelMapper.map(vehicule, vehiculeDTO.class))
                .collect(Collectors.toList());
    }

    public Vehicule getVehicleById(Long id) {
        return vehiculeRepo.findById(id).orElse(null);
    }

    public void deleteVehicule(Long id) {
        vehiculeRepo.deleteById(id);
    }

    public List<Map<String, Object>> getPopularMarques() {
        List<Object[]> result = vehiculeRepo.getTop5RentedMarques();
        List<Map<String, Object>> response = new ArrayList<>();
        for (Object[] row : result) {
            Map<String, Object> rowMap = new HashMap<>();
            rowMap.put("numberOfRent", row[1]);
            rowMap.put("marque", row[0]);
            response.add(rowMap);
        }
        return response.stream().limit(5).collect(Collectors.toList());
    }

    public List<vehiculeDTO> getCarsUnderMaintenance() {
        return vehiculeRepo.findByStatus(CarStatus.UNDER_MAINTENANCE);
    }

}
