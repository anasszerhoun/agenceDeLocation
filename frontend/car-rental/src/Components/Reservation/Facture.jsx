import React from 'react';
import { Card, CardContent, Typography, Box } from "@mui/material";

const Facture = ({ price, dateRange }) => {
  const dailyRate = 50;  
  const totalDays = Math.ceil((dateRange.to - dateRange.from) / (1000 * 3600 * 24));
  const totalPrice = dailyRate * totalDays;  

  return (
    <Card sx={{ width: "100%", boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Facture</Typography>
        
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1">Tarif journalier : {dailyRate} €</Typography>
          <Typography variant="body1">Durée : {totalDays} jour(s)</Typography>
        </Box>

        <Box sx={{ marginTop: 2, display: "flex", justifyContent: "space-between", fontWeight: 'bold' }}>
          <Typography variant="body1">Prix total :</Typography>
          <Typography variant="body1">{totalPrice} €</Typography>
        </Box>

      </CardContent>
    </Card>
  );
};

export default Facture;
