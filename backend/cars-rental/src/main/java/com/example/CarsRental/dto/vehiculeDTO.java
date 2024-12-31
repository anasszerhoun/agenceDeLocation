package com.example.CarsRental.dto;
import java.util.List;
import com.example.CarsRental.entity.Client;

public class vehiculeDTO {
    private String immatriculation;
    private String marque;
    private String modele;
    private String type;
    private String status;
    private float tarif;
    private String imageUrl;

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
//    private List<Client> fans;

    public vehiculeDTO(String immatriculation) {
        this.immatriculation = immatriculation;
    }
    public vehiculeDTO() {
    }

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

    public String getModele() {
        return modele;
    }


    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public float getTarif() {
        return tarif;
    }

    public void setTarif(float tarif) {
        this.tarif = tarif;
    }

//    public List<Client> getFans() {
//        return fans;
//    }
//
//    public void setFans(List<Client> fans) {
//        this.fans = fans;
//    }
}
