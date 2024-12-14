"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

const initialCars = [
  { id: 1, name: "Toyota", model: "Camry", duration: "3 days", price: 150 },
  { id: 2, name: "Honda", model: "Civic", duration: "5 days", price: 200 },
  { id: 3, name: "Ford", model: "Mustang", duration: "2 days", price: 300 },
];

function Header() {
  const [cartItems, setCartItems] = useState(initialCars);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const theme = useTheme();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"gray"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Car Rental
          </Typography>
          <IconButton color="inherit" onClick={toggleCart}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        className="container"
        open={isCartOpen}
        onClose={toggleCart}
        PaperProps={{
          sx: {
            position: "relative",
            top: 56,
            width: 500,
            maxHeight: "55%",
            float: "right",
            borderRadius: 2,
            boxShadow: theme.shadows[5],
            transition: "transform 0.6s ease-in-out, opacity 0.3s ease-in-out", 
            transform: isCartOpen ? "translateY(0)" : "translateY(100%)",
            opacity: isCartOpen ? 1 : 0,
          },
        }}
        ModalProps={{
          BackdropProps: {
            invisible: true,
          },
        }}
      >
        <Box sx={{ p: 2, fontSize: "0.9rem" }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: "1.1rem" }}>
            Your Car Reservations
          </Typography>
          <List dense>
            {cartItems.map((item) => (
              <ListItem
                key={item.id}
                divider
                sx={{ alignItems: "center", height: "100px" }}
              >
                <div className="row col-12">
                  <div className="col-5">
                    <ListItemText
                      primary={`${item.name} ${item.model}`}
                      secondary={`${item.duration} - $${item.price}`}
                    />
                  </div>
                  <div className="col-7">
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        mt: 1,
                      }}
                      className="col-12"
                    >
                      <div className="col-10">
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          sx={{ fontSize: "0.7rem", width: "200px",padding:"10px" }}
                        >
                          Proceed to Checkout
                        </Button>
                      </div>
                      <div className="col-2">
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => removeItem(item.id)}
                          size="small"
                          sx={{ marginLeft: "40px" }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </div>
                    </Box>
                  </div>
                </div>
              </ListItem>
            ))}
          </List>
          
        </Box>
      </Drawer>
    </Box>
  );
}
export default Header;
