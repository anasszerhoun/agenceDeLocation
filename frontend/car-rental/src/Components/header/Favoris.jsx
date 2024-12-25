// import React, { useState, useEffect } from "react";
// import gsap from "gsap";
// import {
//   IconButton,
//   Badge,
//   Drawer,
//   Box,
//   Button,
//   Typography,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Trash2 } from 'lucide-react';
// import apiRequest from "../../apiRequest";

// function Favoris() {
//   const initialCars = [
//     { id: 1, name: "Toyota", model: "Camry", duration: "3 days", price: 150 },
//     { id: 2, name: "Honda", model: "Civic", duration: "5 days", price: 200 },
//     { id: 3, name: "Ford", model: "Mustang", duration: "2 days", price: 300 },
//   ];

//   const [cartItems, setCartItems] = useState(initialCars);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const fetchFavoris = async () => {
//     try {
//       const response = await apiRequest("GET", "http://localhost:8080/api/car/favoris");
//       setCartItems(response.data);
//     } catch (error) {
//       console.error("Error fetching favoris:", error);
//       alert("There was an error fetching the favorites.");
//     }
//   };

//   useEffect(() => {
//     fetchFavoris();
//   }, []);

//   const removeItem = async (id) => {
//     try {
//       await apiRequest("DELETE", "http://localhost:8080/api/car/favoris/remove?id=" + id);
//       fetchFavoris();
//     } catch (error) {
//       console.error("Error removing item:", error);
//       alert("There was an error removing the item.");
//     }
//   };

//   const toggleCart = () => {
//     if (isCartOpen) {
//       // Animating the drawer out (to the right) when closing
//       gsap.to("#drawer", {
//         x: "0", // Move the drawer off screen to the right
//         duration: 5,
//         onComplete: () => {
//           setIsCartOpen(false); // After animation, close the drawer
//         },
//       });
//     } else {
//       setIsCartOpen(true);
//       gsap.to("#drawer", {
//         x: "70%", // Move the drawer to the starting position (0)
//         duration: 3,
//       });
//     }
//   };

//   return (
//     <>
//       <IconButton color="inherit" onClick={toggleCart}>
//         <Badge color="secondary" badgeContent={cartItems.length}>
//           <ShoppingCartIcon />
//         </Badge>
//       </IconButton>

//       {/* Drawer using GSAP animation */}
//       <Drawer
//         id="drawer"
//         anchor="right" // Ensure the drawer opens from the right
//         open={isCartOpen}
//         onClose={toggleCart}
//         sx={{
//           width: 450,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: 450,
//             maxHeight: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             padding: 0,
//             right: 0, // Drawer should always stay to the right by default
//             transition: "transform 0.3s ease", // Optional, for smoother default transition
//           },
//         }}
//       >
//         <Box sx={{ padding: 4 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 3, fontSize: '1.2rem' }}>
//             Your Car Reservations
//           </Typography>
//           <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
//             <div className="space-y-5">
//               {cartItems.length > 0 ? (
//                 cartItems.map((item) => (
//                   <Box
//                     key={item.idVehicule}
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       paddingBottom: 3,
//                       borderBottom: "1px solid #e0e0e0",
//                     }}
//                   >
//                     <Box>
//                       <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: '1.1rem' }}>
//                         {`${item.marque} ${item.modele}`}
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: "text.secondary", fontSize: '0.95rem' }}>
//                         {`${item.duration} - $${item.price}`}
//                       </Typography>
//                     </Box>
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                       <Button variant="outlined" size="medium" sx={{ fontSize: '0.9rem' }}>
//                         Proceed to Checkout
//                       </Button>
//                       <IconButton
//                         onClick={() => removeItem(item.idVehicule)}
//                         size="small"
//                         sx={{
//                           backgroundColor: "#f5f5f5",
//                           "&:hover": {
//                             backgroundColor: "#eeeeee",
//                           },
//                         }}
//                       >
//                         <Trash2 className="h-5 w-5" />
//                       </IconButton>
//                     </Box>
//                   </Box>
//                 ))
//               ) : (
//                 <Typography variant="body2" sx={{ textAlign: "center", color: "text.secondary", fontSize: '1rem' }}>
//                   No items in your cart.
//                 </Typography>
//               )}
//             </div>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

// export default Favoris;

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { IconButton, Badge, Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Trash2 } from "lucide-react";
import apiRequest from "../../apiRequest";

function Favoris() {
  const initialCars = [
    { id: 1, marque: "Toyota", modele: "Camry", duration: "3 days", tarif: 150 },
    { id: 2, marque: "Honda", modele: "Civic", duration: "5 days", tarif: 200 },
    { id: 3, marque: "Ford", modele: "Mustang", duration: "2 days", tarif: 300 },
  ];

  const [cartItems, setCartItems] = useState(initialCars);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchFavoris = async () => {
    try {
      const response = await apiRequest(
        "GET",
        "http://localhost:8080/api/car/favoris"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching favoris:", error);
      alert("There was an error fetching the favorites.");
    }
  };

  useEffect(() => {
    fetchFavoris();
    console.log(cartItems);
  }, []);

  const removeItem = async (id) => {
    try {
      await apiRequest(
        "DELETE",
        "http://localhost:8080/api/car/favoris/remove?id=" + id
      );
      fetchFavoris();
    } catch (error) {
      console.error("Error removing item:", error);
      alert("There was an error removing the item.");
    }
  };

  const toggleCart = () => {
    if (isCartOpen) {
      // Animating the 'div' out (to the right) when closing
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

  const handleCheckOut = () => {
    window.location.href = "/reservation";
  }

  return (
    <>
      <IconButton color="inherit" onClick={toggleCart}>
        <Badge color="secondary" badgeContent={cartItems.length}>
          <ShoppingCartIcon />
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
          // transition: "transform 0.3s ease", //removed as per instructions
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
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 3, fontSize: "1.2rem" }}
          >
            Your Car Reservations
          </Typography>
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <div className="space-y-5">
              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  // Log the item information to the console
                  console.log("Cart Item:", item);

                  return (
                    <Box
                      key={item.idVehicule}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: 3,
                        borderBottom: "1px solid #e0e0e0",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary", fontSize: "0.95rem" }}
                        >
                          {`${item.marque} - ${item.modele}`}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginLeft:"20px" ,color: "text.secondary", fontSize: "0.95rem" }}
                        >
                          {`3jours     -   ${item.tarif}`}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ fontSize: "0.7rem" }}
                          onClick={handleCheckOut}
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
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "text.secondary",
                    fontSize: "1rem",
                  }}
                >
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
