package com.example.CarsRental.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.example.CarsRental.dto.vehiculeDTO;
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

    public vehiculeDTO getVehiculeByIm(String im) {
        Vehicule vehicule = vehiculeRepo.findByImmatriculation(im);
        return modelMapper.map(vehicule, vehiculeDTO.class);
    }

    public vehiculeDTO updateVehiculeByIm(String immatriculation, vehiculeDTO vDTO) {
        Vehicule existingVehicule = vehiculeRepo.findByImmatriculation(immatriculation);
        System.out.println(existingVehicule.getStatus());

        if (vDTO.getMarque() != null) {
            existingVehicule.setMarque(vDTO.getMarque());
        }
        if (vDTO.getModele() != null) {
            existingVehicule.setModele(vDTO.getModele());
        }
        if (vDTO.getType() != null) {
            existingVehicule.setType(vDTO.getType());
        }
        if (vDTO.getImmatriculation() != null) {
            existingVehicule.setImmatriculation(vDTO.getImmatriculation());
        }
        if (vDTO.getTarif() != 0) {
            existingVehicule.setTarif(vDTO.getTarif());
        }
        if (vDTO.getStatus() != null) {
            existingVehicule.setStatus(vDTO.getStatus());
        }

        Vehicule updatedVehicule = vehiculeRepo.save(existingVehicule);
        System.out.println(updatedVehicule.getStatus());
        return modelMapper.map(updatedVehicule, vehiculeDTO.class);
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

    public void deleteVehiculeByImmatricule(String id) {
        vehiculeRepo.deleteByImmatricule(id);
    }

}
