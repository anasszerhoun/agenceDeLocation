package com.example.CarsRental.model;

import java.util.Date;

public class Facture {

    private int idFacture;
    private float montantPaye;
    private Date datePaiement;

    public int getIdFacture() {
        return idFacture;
    }

    public void setIdFacture(int idFacture) {
        this.idFacture = idFacture;
    }

    public float getMontantPaye() {
        return montantPaye;
    }

    public void setMontantPaye(float montantPaye) {
        this.montantPaye = montantPaye;
    }

    public Date getDatePaiement() {
        return datePaiement;
    }

    public void setDatePaiement(Date datePaiement) {
        this.datePaiement = datePaiement;
    }
}
