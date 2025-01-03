package com.example.CarsRental.dto;

import com.example.CarsRental.entity.Reservation;

import java.util.Date;
import java.util.List;

public class clientDTO extends userDTO{
    private Date dateNaissance;
    private String cin;
    private String permisConduire;
    private String Telephone;
    private List<reservationDTO> reservations ;

    public List<reservationDTO> getReservations() {
        return reservations;
    }

    public void setReservations(List<reservationDTO> reservations) {
        this.reservations = reservations;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getPermisConduire() {
        return permisConduire;
    }

    public void setPermisConduire(String permisConduire) {
        this.permisConduire = permisConduire;
    }

    public String getTelephone() {
        return Telephone;
    }

    public void setTelephone(String telephone) {
        Telephone = telephone;
    }
}
