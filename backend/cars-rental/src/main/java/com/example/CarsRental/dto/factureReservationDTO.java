package com.example.CarsRental.dto;

public class factureReservationDTO {

    private Long idVehicule;
    private String startDate;
    private String endDate;
    private Float totalPrice;

    public Long getIdVehicule() {
        return idVehicule;
    }

    public String getStartDate() {
        return startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public Float getTotalPrice() {
        return totalPrice;
    }
}
