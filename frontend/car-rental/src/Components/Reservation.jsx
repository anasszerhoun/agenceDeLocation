import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  ImageList,
  ImageListItem,
  Divider,
  Box,
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  DirectionsCar as CarIcon,
  CreditCard as CreditCardIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import Facture from "./Reservation/Facture.jsx";
import Grid from "@mui/material/Grid";

const Reservation = () => {
  const [reservation, setReservation] = useState({
    id: "RES12345",
    carModel: "Renault Clio",
    images: ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"], // Liste des images
    dateRange: { from: new Date(2023, 6, 15), to: new Date(2023, 6, 20) },
    price: 250,
    details: {
      transmission: "Manuelle",
      fuel: "Essence",
      seats: 5,
    },
  });

  const [selectedImage, setSelectedImage] = useState(reservation.images[0]); // L'image sélectionnée pour l'affichage agrandi

  const handleDateRangeChange = (newDateRange) => {
    setReservation((prev) => ({
      ...prev,
      dateRange: {
        from: newDateRange[0],
        to: newDateRange[1],
      },
    }));
  };

  const handleConfirmPayment = () => {
    console.log("Paiement confirmé pour la réservation", reservation.id);
  };

  const handleCancelReservation = () => {
    console.log("Réservation annulée", reservation.id);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Affiche l'image sélectionnée en grand
  };

  return (
    <>
      <Card
      sx={{
        width: "90%",
        margin: "20px auto",
        padding: 2,
        boxShadow: 4,
        borderRadius: 2,
      }}
    >
      <CardHeader
        title={
          <Typography variant="h4" fontWeight="bold">
            Détails de la réservation
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          <CarIcon sx={{ marginRight: 1 }} /> {reservation.carModel}
        </Typography>

        {/* Image Gallery with small images */}
        <ImageList
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: 8,
            marginBottom: 2,
            flexWrap: "nowrap",
            overflowX: "auto",
          }}
          cols={3}
        >
          {reservation.images.map((image, index) => (
            <ImageListItem
              key={index}
              sx={{
                width: 100, // Taille très petite pour les images
                height: 100,
                cursor: "pointer", // Pour indiquer que l'image est cliquable
              }}
            >
              <img
                src={image}
                alt={`Car ${index + 1}`}
                loading="lazy"
                style={{ borderRadius: "8px" }}
                onClick={() => handleImageClick(image)} // Clique pour agrandir l'image
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Image agrandie */}
        {selectedImage && (
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={selectedImage}
              alt="Selected Car"
              style={{
                width: "80%", // Taille agrandie à 80% de la largeur
                maxWidth: "600px",
                borderRadius: "8px",
              }}
            />
          </Box>
        )}

        <Divider sx={{ marginY: 2 }} />

        {/* Car Details */}
        <div className="w-100 col-12 row">
          <div className="col-6">
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              Caractéristiques :
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body1">
                Transmission : {reservation.details.transmission}
              </Typography>
              <Typography variant="body1">
                Carburant : {reservation.details.fuel}
              </Typography>
              <Typography variant="body1">
                Places : {reservation.details.seats}
              </Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Date Picker */}
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              Dates de réservation :
            </Typography>
            <div>
              <span style={{ marginLeft: "30px" }}>
                17/02/2024 - 20/02/2024
              </span>
            </div>
          </div>
          <div className="col-6 facture">
            <Grid item xs={12} sm={6}>
              <Facture
                price={reservation.price}
                dateRange={reservation.dateRange}
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              startIcon={<CreditCardIcon />}
              onClick={handleConfirmPayment}
              sx={{ position: "relative", float: "right", top: "50px" }}
            >
              Confirmer et payer
            </Button>
          </div>
        </div>

        <Grid container spacing={2}>
          <Divider sx={{ marginY: 5 }} />

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                marginTop: "30px",
              }}
            >
              <Button
                variant="outlined"
                color="error"
                startIcon={<CancelIcon />}
                onClick={handleCancelReservation}
                sx={{}}
              >
                Annuler
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
    
  );
};

export default Reservation;
