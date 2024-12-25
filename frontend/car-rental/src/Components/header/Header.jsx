"use client";

import React, { useState,useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import Favoris from "./Favoris";
import apiRequest from "../../apiRequest";




function Header() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  
  const theme = useTheme();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const checkLogin = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogging(true); 
    } else {
      setIsLogging(false); 
    }
  };
  useEffect(() => {
    checkLogin(); 
  }, []);

  const seConnecter = () => {
    window.location.href = "/login"
  }
  const profile = () => {
    window.location.href = "/profile"
  }

  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Car Rental
          </Typography>
            {isLogging ? (<><Favoris /><Button sx={{ color: "white" }} onClick={profile}>Profile</Button></>) : <Button onClick={seConnecter} sx={{ color: "white" }}>Se connecter</Button>}
        </Toolbar>
      </AppBar>
  );
}
export default Header;
