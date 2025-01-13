import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";
import ContractButton from "./../Contract";

const Success = () => {

  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

  const [contratDownloaded, setContratDownloaded] = useState(false);

  const handleSaveReservation = async (event) => {

    
    const { from, to } = selectedCar.dateRange;

    const startDate = new Date(from);
    const endDate = new Date(to);

    const dailyRate = selectedCar.tarif;
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
    const totalPrice = dailyRate * totalDays;


    const reservation = {
      totalPrice: totalPrice,
      startDate: startDate,
      endDate: endDate,
      idVehicule: selectedCar.idVehicule,
    };


    const token = localStorage.getItem("token");

    try {
      const rep = await axios.post('http://localhost:8080/api/car/reservation', reservation, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(rep.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(localStorage.getItem("ReservationAdded") === "false"){
      handleSaveReservation();
      localStorage.setItem("ReservationAdded","true"); 
    }
  },[])

  const handleDownloadContract = () => {
    setContratDownloaded(true);
    console.log("Contrat téléchargé");

  };

  return (
    <div className="min-h-screen mt-3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Informations sur la voiture */}
          <div className="w-full lg:w-7/12 p-8">
            <div className="bg-gray-100 rounded-2xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Détails du véhicule
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Marque : </strong> {selectedCar.marque}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Modèle : </strong> {selectedCar.modele}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Type : </strong> {selectedCar.type}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Immatriculation : </strong> {selectedCar.immatriculation}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Tarif : </strong> {selectedCar.tarif} MAD/jour
              </p>
            </div>
          </div>

          {/* Message de confirmation et bouton */}
          <div className="w-full lg:w-5/12 bg-gray-50 p-8 flex flex-col items-center">
            <Alert
              severity="success"
              sx={{
                marginTop: 2,
                width: "100%",
                height: "15vh", // Hauteur agrandie
                fontSize: "1.25rem", // Taille du texte agrandie
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Centrer le texte verticalement et horizontalement
              }}
            >
              Félicitations ! Votre réservation a été confirmée.
            </Alert>
            <ContractButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
