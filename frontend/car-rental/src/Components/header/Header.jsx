"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  IconButton,
  Badge
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
    window.location.href = "/login"
  }
  const profile = () => {
    window.location.href = "/profile"
  }
  const logout = () => {
    window.location.href = "/login"
    localStorage.removeItem('token');

  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Car Rental
        </Typography>
        {isLogging ? (
          <>
            <Favoris />
            <IconButton color="inherit" onClick={profile}>
              <Badge color="secondary">
                <AccountCircleIcon style={{ fontSize: 40 }} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={logout}>
              <Badge color="secondary">
                <LogoutIcon style={{ fontSize: 40 }} />
              </Badge>
            </IconButton>
          </>
        ) : <Button onClick={seConnecter} sx={{ color: "white" }}>Se connecter</Button>}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
