"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  IconButton,
  Badge,
  Box,
  Avatar
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Favoris from "./Favoris";

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
    window.location.href = "/login";
  }

  const profile = () => {
    window.location.href = "/profile";
  }

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = "/login";
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1A237E", boxShadow: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          
          <Typography  onClick={()=>{window.location.href="/home"}} variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600, color: "white",cursor:"pointer" }}>
            Car Rental
          </Typography>
        </Box>

        {/* Partie connexion et icônes */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isLogging ? (
            <>
              <Favoris />
              <IconButton color="inherit" onClick={profile} sx={{ mr: 2 }}>
                <Badge color="secondary">
                  <AccountCircleIcon sx={{ fontSize: 40, color: "#fff" }} />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={logout}>
                <Badge color="secondary">
                  <LogoutIcon sx={{ fontSize: 40, color: "#fff" }} />
                </Badge>
              </IconButton>
            </>
          ) : (
            <Button
              onClick={seConnecter}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                padding: "8px 16px",
                fontSize: "1rem",
              }}
            >
              Se connecter
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
