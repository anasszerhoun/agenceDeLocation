import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { IconButton, Badge, Box, Button, Typography, Card, CardContent, CardMedia, CardActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Trash2 } from "lucide-react";
import apiRequest from "../../apiRequest";
import axios from "axios";

function Favoris() {
  const initialCars = [
  ];

  const [cartItems, setCartItems] = useState(initialCars);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchFavoris = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:8080/api/car/favoris", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCartItems(response.data);
    } catch (error) {
      console.log(error);
      alert("There was an error fetching the favorites.");
    }
  };

  useEffect(() => {
    fetchFavoris();
  }, []);

  const removeItem = async (id) => {
    try {
      await apiRequest("DELETE", "http://localhost:8080/api/car/favoris/remove?id=" + id);
      fetchFavoris();
    } catch (error) {
      console.error("Error removing item:", error);
      alert("There was an error removing the item.");
    }
  };

  const toggleCart = () => {
    if (isCartOpen) {
      gsap.to("#cartDiv", {
        x: "100%", // Move the 'div' out of view to the right
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setIsCartOpen(false); // After animation, close the cart
        },
      });
    } else {
      setIsCartOpen(true);
      gsap.fromTo(
        "#cartDiv",
        { x: "100%" }, // Start from off-screen
        {
          x: "0", // Move the 'div' into view
          duration: 0.5,
          ease: "power2.out", // Smoother easing for opening
        }
      );
    }
  };

  const handleCheckOut = (index) => {
    const selectedCar = cartItems.find(item => item.idVehicule === index);
    console.log(selectedCar);
    localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
    window.location.href = "/reservation";
  };

  return (
    <>
      <IconButton color="inherit" style={{ marginTop: "6px" }} onClick={toggleCart}>
        <Badge color="secondary" badgeContent={cartItems.length}>
          <ShoppingCartIcon style={{ fontSize: 30 }} />
        </Badge>
      </IconButton>

      {/* Custom 'div' to act as the sidebar (drawer) */}
      <div
        id="cartDiv"
        style={{
          position: "fixed",
          top: 0,
          right: "0",
          height: "100%",
          width: "450px",
          backgroundColor: "#fff",
          boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.2)",
          transform: "translateX(100%)", // Initially off-screen to the right
          zIndex: 1000,
          overflowY: "auto",
          padding: "20px", // Added padding for better spacing
        }}
      >
        {/* Close Button (X) */}
        <IconButton
          onClick={toggleCart}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "50%",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#eeeeee",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            X
          </Typography>
        </IconButton>

        <Box sx={{ padding: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 3, fontSize: "1.2rem", textAlign: "center" }}>
            Your Car Reservations
          </Typography>
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <div className="space-y-5">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <Card
                    key={item.idVehicule}
                    sx={{
                      width: 280, // Réduire la largeur de la carte
                      marginBottom: 3,
                      borderRadius: 3, // Bordure arrondie
                      boxShadow: 3, // Ombre plus marquée
                      display: 'flex',
                      flexDirection: 'column', // Aligner les éléments verticalement
                      alignItems: 'center', // Centrer horizontalement
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160" // Hauteur réduite de l'image
                      image={item.imageUrl} 
                      alt={`${item.marque} ${item.modele}`}
                      sx={{
                        objectFit: "cover",
                        borderRadius: "10px 10px 0 0", // Ajouter une bordure arrondie à l'image
                        width: '100%', // Assurer que l'image occupe toute la largeur de la carte
                      }}
                    />
                    <CardContent sx={{ paddingBottom: "16px", textAlign: "center" }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                        {`${item.marque} - ${item.modele}`}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {`${item.duration} - ${item.tarif}DH`}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", padding: "8px" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          fontSize: "0.7rem",
                          textAlign: "center",
                          margin: "0 8px",
                        }}
                        onClick={() => handleCheckOut(item.idVehicule)}
                      >
                        Proceed to Checkout
                      </Button>
                      <IconButton
                        onClick={() => removeItem(item.idVehicule)}
                        size="small"
                        sx={{
                          backgroundColor: "#f5f5f5",
                          "&:hover": {
                            backgroundColor: "#eeeeee",
                          },
                        }}
                      >
                        <Trash2 className="h-5 w-5" />
                      </IconButton>
                    </CardActions>
                  </Card>
                ))
              ) : (
                <Typography sx={{ textAlign: "center", color: "text.secondary", fontSize: "1rem" }}>
                  No items in your cart.
                </Typography>
              )}
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Favoris;
