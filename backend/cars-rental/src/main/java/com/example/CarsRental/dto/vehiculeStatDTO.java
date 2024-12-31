package com.example.CarsRental.dto;

public class vehiculeStatDTO {
    public vehiculeStatDTO(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public vehiculeStatDTO() {
    }

    private String immatriculation;
    private String marque;


    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

}
