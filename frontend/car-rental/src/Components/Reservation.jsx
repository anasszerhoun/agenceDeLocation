import { useState } from "react";
import {
  CalendarToday as CalendarIcon,
  DirectionsCar as CarIcon,
  CreditCard as CreditCardIcon,
  Close as CloseIcon,
  LocalGasStation as FuelIcon,
  AirlineSeatReclineNormal as SeatIcon,
  Settings as TransmissionIcon,
} from "@mui/icons-material";
import { Alert } from '@mui/material';
import Facture from "./Reservation/Facture";
import axios from "axios"

const Reservation = () => {
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

  const [reservation, setReservation] = useState({
    idVehicule: selectedCar.idVehicule,
    carModel: selectedCar.modele,
    carMarque: selectedCar.marque,
    images: ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"],
    dateRange: { from: new Date(2025, 1, 17), to: new Date(2025, 1, 23) },
    price: selectedCar.tarif,
    details: {
      transmission: "Manuelle",
      fuel: selectedCar.type,
      seats: 5,
    },
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [showFacture, setShowFacture] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [alert, setAlert] = useState(false);


  const handleConfirmPayment = () => {
    window.location.href = "/payment";
  };

  const handleCancelReservation = () => {
    console.log("Réservation annulée", reservation.id);
  };


  const handleCheckDispo = async () => {

    
    const dispo = {
      id: reservation.idVehicule,
      startDate: startDate,
      endDate: endDate
    };

    const token = localStorage.getItem("token");

    try {
      const rep = await axios.post('http://localhost:8080/api/car/disponible', dispo, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(rep.data)
      if (rep.data === true) {
        setAlert(false)
        setShowFacture(true)
      } else {
        setAlert(true)
        setShowFacture(false);
      }
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="min-h-screen mt-3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          <div className="w-full lg:w-7/12 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Détails de la réservation
            </h1>

            <div className="flex items-center text-2xl text-gray-700 mb-6">
              <CarIcon className="mr-3 text-blue-500" />
              <span className="font-semibold">{reservation.carModel}</span>{" "}
              <span className="font-semibold ml-2">
                - {reservation.carMarque}
              </span>
            </div>

            <div className="mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={reservation.images[currentImageIndex]}
                  alt={`Car ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
              </div>

              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {reservation.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 focus:outline-none ${index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
                <TransmissionIcon className="text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Transmission</span>
                <span className="font-semibold text-gray-800">
                  {reservation.details.transmission}
                </span>
              </div>
              <div className="bg-green-50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
                <FuelIcon className="text-green-500 mb-2" />
                <span className="text-sm text-gray-600">Carburant</span>
                <span className="font-semibold text-gray-800">
                  {reservation.details.fuel}
                </span>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
                <SeatIcon className="text-purple-500 mb-2" />
                <span className="text-sm text-gray-600">Places</span>
                <span className="font-semibold text-gray-800">
                  {reservation.details.seats}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12 bg-gray-50 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Choisir les dates
              </h2>
              <div className="space-y-4">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {alert && <Alert severity="error" sx={{ marginTop: 2 }}>
                  Voiture n'est pas disponible dans la date choisi veuillez choisir une autre date
                </Alert>
                }
                <button
                  onClick={handleCheckDispo}
                  className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Vérifier disponibilité
                </button>
              </div>
            </div>

            {showFacture && (
              <>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Facture
                  </h2>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <Facture
                      price={selectedCar.tarif}
                      dateRange={{from : startDate , to : endDate}}
                    />
                  </div>
                </div>
                <button
                  onClick={handleConfirmPayment}
                  className="w-full mt-4 px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
                >
                  <CreditCardIcon />
                  <span>Confirmer et payer</span>
                </button>
              </>
            )}

            <div className="space-y-4 mt-4">
              <button
                onClick={handleCancelReservation}
                className="w-full px-6 py-4 bg-white text-red-500 font-semibold rounded-xl hover:bg-red-50 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-sm border border-red-200"
              >
                <CloseIcon />
                <span>Annuler la réservation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
