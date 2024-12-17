// import { useState } from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
//   ImageList,
//   ImageListItem,
//   Divider,
//   Box,
// } from "@mui/material";
// import {
//   CalendarToday as CalendarIcon,
//   DirectionsCar as CarIcon,
//   CreditCard as CreditCardIcon,
//   Cancel as CancelIcon,
// } from "@mui/icons-material";
// import Facture from "./Reservation/Facture.jsx";
// import Grid from "@mui/material/Grid";

// const Reservation = () => {
//   const [reservation, setReservation] = useState({
//     id: "RES12345",
//     carModel: "Renault Clio",
//     images: ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"], // Liste des images
//     dateRange: { from: new Date(2023, 6, 15), to: new Date(2023, 6, 20) },
//     price: 250,
//     details: {
//       transmission: "Manuelle",
//       fuel: "Essence",
//       seats: 5,
//     },
//   });

//   const [selectedImage, setSelectedImage] = useState(reservation.images[0]); // L'image sélectionnée pour l'affichage agrandi

//   const handleDateRangeChange = (newDateRange) => {
//     setReservation((prev) => ({
//       ...prev,
//       dateRange: {
//         from: newDateRange[0],
//         to: newDateRange[1],
//       },
//     }));
//   };

//   const handleConfirmPayment = () => {
//     console.log("Paiement confirmé pour la réservation", reservation.id);
//   };

//   const handleCancelReservation = () => {
//     console.log("Réservation annulée", reservation.id);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image); // Affiche l'image sélectionnée en grand
//   };

//   return (
//     <>
//       <Card
//       sx={{
//         width: "90%",
//         margin: "20px auto",
//         padding: 2,
//         boxShadow: 4,
//         borderRadius: 2,
//       }}
//     >
//       <CardHeader
//         title={
//           <Typography variant="h4" fontWeight="bold">
//             Détails de la réservation
//           </Typography>
//         }
//       />
//       <CardContent>
//         <Typography variant="h5" sx={{ marginBottom: 2 }}>
//           <CarIcon sx={{ marginRight: 1 }} /> {reservation.carModel}
//         </Typography>

//         {/* Image Gallery with small images */}
//         <ImageList
//           sx={{
//             display: "flex",
//             justifyContent: "start",
//             gap: 8,
//             marginBottom: 2,
//             flexWrap: "nowrap",
//             overflowX: "auto",
//           }}
//           cols={3}
//         >
//           {reservation.images.map((image, index) => (
//             <ImageListItem
//               key={index}
//               sx={{
//                 width: 100, // Taille très petite pour les images
//                 height: 100,
//                 cursor: "pointer", // Pour indiquer que l'image est cliquable
//               }}
//             >
//               <img
//                 src={image}
//                 alt={`Car ${index + 1}`}
//                 loading="lazy"
//                 style={{ borderRadius: "8px" }}
//                 onClick={() => handleImageClick(image)} // Clique pour agrandir l'image
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>

//         {/* Image agrandie */}
//         {selectedImage && (
//           <Box
//             sx={{
//               marginTop: 2,
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src={selectedImage}
//               alt="Selected Car"
//               style={{
//                 width: "80%", // Taille agrandie à 80% de la largeur
//                 maxWidth: "600px",
//                 borderRadius: "8px",
//               }}
//             />
//           </Box>
//         )}

//         <Divider sx={{ marginY: 2 }} />

//         {/* Car Details */}
//         <div className="w-100 col-12 row">
//           <div className="col-6">
//             <Typography variant="h6" sx={{ marginBottom: 1 }}>
//               Caractéristiques :
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//               <Typography variant="body1">
//                 Transmission : {reservation.details.transmission}
//               </Typography>
//               <Typography variant="body1">
//                 Carburant : {reservation.details.fuel}
//               </Typography>
//               <Typography variant="body1">
//                 Places : {reservation.details.seats}
//               </Typography>
//             </Box>

//             <Divider sx={{ marginY: 2 }} />

//             {/* Date Picker */}
//             <Typography variant="h6" sx={{ marginBottom: 1 }}>
//               Dates de réservation :
//             </Typography>
//             <div>
//               <span style={{ marginLeft: "30px" }}>
//                 17/02/2024 - 20/02/2024
//               </span>
//             </div>
//           </div>
//           <div className="col-6 facture">
//             <Grid item xs={12} sm={6}>
//               <Facture
//                 price={reservation.price}
//                 dateRange={reservation.dateRange}
//               />
//             </Grid>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<CreditCardIcon />}
//               onClick={handleConfirmPayment}
//               sx={{ position: "relative", float: "right", top: "50px" }}
//             >
//               Confirmer et payer
//             </Button>
//           </div>
//         </div>

//         <Grid container spacing={2}>
//           <Divider sx={{ marginY: 5 }} />

//           <Grid item xs={12} sm={6}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 gap: 2,
//                 marginTop: "30px",
//               }}
//             >
//               <Button
//                 variant="outlined"
//                 color="error"
//                 startIcon={<CancelIcon />}
//                 onClick={handleCancelReservation}
//                 sx={{}}
//               >
//                 Annuler
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//     </>
    
//   );
// };

// export default Reservation;


// ----------------------- 7/10 -----------------------------

// import { useState } from "react";
// import {
//   CalendarToday as CalendarIcon,
//   DirectionsCar as CarIcon,
//   CreditCard as CreditCardIcon,
//   Cancel as CancelIcon,
// } from "@mui/icons-material";
// import Facture from "./Reservation/Facture";

// const Reservation = () => {
//   const [reservation, setReservation] = useState({
//     id: "RES12345",
//     carModel: "Renault Clio",
//     images: ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"],
//     dateRange: { from: new Date(2023, 6, 15), to: new Date(2023, 6, 20) },
//     price: 250,
//     details: {
//       transmission: "Manuelle",
//       fuel: "Essence",
//       seats: 5,
//     },
//   });

//   const [selectedImage, setSelectedImage] = useState(reservation.images[0]);

//   const handleConfirmPayment = () => {
//     console.log("Paiement confirmé pour la réservation", reservation.id);
//   };

//   const handleCancelReservation = () => {
//     console.log("Réservation annulée", reservation.id);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-8">
//       <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-blue-600 text-white p-6">
//           <h1 className="text-3xl font-bold">Détails de la réservation</h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
//           {/* Left Column */}
//           <div className="space-y-8">
//             {/* Car Model */}
//             <div className="flex items-center text-2xl text-gray-800">
//               <CarIcon className="mr-3 text-blue-500" />
//               <span className="font-semibold">{reservation.carModel}</span>
//             </div>

//             {/* Image Gallery */}
//             <div className="space-y-4">
//               <img
//                 src={selectedImage}
//                 alt="Selected Car"
//                 className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 ease-in-out"
//               />
//               <div className="flex space-x-4 overflow-x-auto py-2">
//                 {reservation.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     alt={`Car ${index + 1}`}
//                     className={`w-20 h-20 rounded-md cursor-pointer transition-all duration-200 ease-in-out ${
//                       selectedImage === image ? 'ring-2 ring-blue-500' : 'hover:opacity-80'
//                     }`}
//                     onClick={() => handleImageClick(image)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Car Details */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
//               <h2 className="text-xl font-semibold mb-4 text-gray-800">Caractéristiques</h2>
//               <ul className="space-y-3 text-gray-600">
//                 <li className="flex items-center">
//                   <span className="w-32 font-medium">Transmission :</span>
//                   <span>{reservation.details.transmission}</span>
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-32 font-medium">Carburant :</span>
//                   <span>{reservation.details.fuel}</span>
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-32 font-medium">Places :</span>
//                   <span>{reservation.details.seats}</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             {/* Reservation Dates */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
//               <h2 className="text-xl font-semibold mb-4 text-gray-800">Dates de réservation</h2>
//               <div className="flex items-center text-gray-600">
//                 <CalendarIcon className="mr-2 text-blue-500" />
//                 <span>17/02/2024 - 20/02/2024</span>
//               </div>
//             </div>

//             {/* Facture Section */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <Facture price={reservation.price} dateRange={reservation.dateRange} />
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-4">
//               <button
//                 onClick={handleConfirmPayment}
//                 className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//               >
//                 <CreditCardIcon />
//                 <span>Confirmer et payer</span>
//               </button>
//               <button
//                 onClick={handleCancelReservation}
//                 className="w-full px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//               >
//                 <CancelIcon />
//                 <span>Annuler la réservation</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reservation;


// ----------------------- 6/10 -----------------------------

// import { useState } from "react";
// import {
//   CalendarToday as CalendarIcon,
//   DirectionsCar as CarIcon,
//   CreditCard as CreditCardIcon,
//   Cancel as CancelIcon,
//   LocalGasStation as FuelIcon,
//   AirlineSeatReclineNormal as SeatIcon,
//   Settings as TransmissionIcon,
// } from "@mui/icons-material";
// import Facture from "./Reservation/Facture";

// const Reservation = () => {
//   const [reservation, setReservation] = useState({
//     id: "RES12345",
//     carModel: "Renault Clio",
//     images: ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"],
//     dateRange: { from: new Date(2023, 6, 15), to: new Date(2023, 6, 20) },
//     price: 250,
//     details: {
//       transmission: "Manuelle",
//       fuel: "Essence",
//       seats: 5,
//     },
//   });

//   const [selectedImage, setSelectedImage] = useState(reservation.images[0]);

//   const handleConfirmPayment = () => {
//     console.log("Paiement confirmé pour la réservation", reservation.id);
//   };

//   const handleCancelReservation = () => {
//     console.log("Réservation annulée", reservation.id);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
//           <h1 className="text-4xl font-bold tracking-tight">Détails de la réservation</h1>
//           <p className="mt-2 text-blue-100">Réservation #{reservation.id}</p>
//         </div>

//         <div className="p-8">
//           {/* Car Model and Image */}
//           <div className="flex flex-col md:flex-row gap-8 mb-12">
//             <div className="w-full md:w-2/3">
//               <div className="relative rounded-2xl overflow-hidden shadow-lg">
//                 <img
//                   src={selectedImage}
//                   alt="Selected Car"
//                   className="w-full h-80 object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
//                   <h2 className="text-3xl font-bold text-white flex items-center">
//                     <CarIcon className="mr-3 text-blue-400" />
//                     {reservation.carModel}
//                   </h2>
//                 </div>
//               </div>
//               <div className="flex mt-4 space-x-4 overflow-x-auto py-2">
//                 {reservation.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     alt={`Car ${index + 1}`}
//                     className={`w-24 h-16 rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
//                       selectedImage === image ? 'ring-4 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'
//                     }`}
//                     onClick={() => handleImageClick(image)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Car Details and Dates */}
//             <div className="w-full md:w-1/3 space-y-6">
//               <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
//                 <h3 className="text-xl font-semibold mb-4 text-gray-800">Caractéristiques</h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-center text-gray-700">
//                     <TransmissionIcon className="mr-2 text-blue-500" />
//                     <span className="font-medium mr-2">Transmission:</span>
//                     <span>{reservation.details.transmission}</span>
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <FuelIcon className="mr-2 text-blue-500" />
//                     <span className="font-medium mr-2">Carburant:</span>
//                     <span>{reservation.details.fuel}</span>
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <SeatIcon className="mr-2 text-blue-500" />
//                     <span className="font-medium mr-2">Places:</span>
//                     <span>{reservation.details.seats}</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-purple-50 rounded-2xl p-6 shadow-inner">
//                 <h3 className="text-xl font-semibold mb-4 text-gray-800">Dates de réservation</h3>
//                 <div className="flex items-center text-gray-700">
//                   <CalendarIcon className="mr-2 text-purple-500" />
//                   <span>17/02/2024 - 20/02/2024</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Facture and Actions */}
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="w-full md:w-2/3">
//               <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
//                 <Facture price={reservation.price} dateRange={reservation.dateRange} />
//               </div>
//             </div>

//             <div className="w-full md:w-1/3 space-y-4">
//               <button
//                 onClick={handleConfirmPayment}
//                 className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
//               >
//                 <div className="flex items-center justify-center">
//                   <CreditCardIcon className="mr-2" />
//                   <span>Confirmer et payer</span>
//                 </div>
//               </button>
//               <button
//                 onClick={handleCancelReservation}
//                 className="w-full px-6 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//               >
//                 <CancelIcon className="mr-2" />
//                 <span>Annuler la réservation</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reservation;


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
import Facture from "./Reservation/Facture";

const Reservation = () => {
  const [reservation, setReservation] = useState({
    id: "RES12345",
    carModel: "Renault Clio",
    images: ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"],
    dateRange: { from: new Date(2023, 6, 15), to: new Date(2023, 6, 20) },
    price: 250,
    details: {
      transmission: "Manuelle",
      fuel: "Essence",
      seats: 5,
    },
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleConfirmPayment = () => {
    console.log("Paiement confirmé pour la réservation", reservation.id);
  };

  const handleCancelReservation = () => {
    console.log("Réservation annulée", reservation.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Car Images and Details */}
          <div className="w-full lg:w-7/12 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Détails de la réservation</h1>
            
            {/* Car Model */}
            <div className="flex items-center text-2xl text-gray-700 mb-6">
              <CarIcon className="mr-3 text-blue-500" />
              <span className="font-semibold">{reservation.carModel}</span>
            </div>
            
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={reservation.images[currentImageIndex]}
                  alt={`Car ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {reservation.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 focus:outline-none ${
                      index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Car Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
                <TransmissionIcon className="text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Transmission</span>
                <span className="font-semibold text-gray-800">{reservation.details.transmission}</span>
              </div>
              <div className="bg-green-50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
                <FuelIcon className="text-green-500 mb-2" />
                <span className="text-sm text-gray-600">Carburant</span>
                <span className="font-semibold text-gray-800">{reservation.details.fuel}</span>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
                <SeatIcon className="text-purple-500 mb-2" />
                <span className="text-sm text-gray-600">Places</span>
                <span className="font-semibold text-gray-800">{reservation.details.seats}</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Reservation Details and Actions */}
          <div className="w-full lg:w-5/12 bg-gray-50 p-8">
            {/* Reservation Dates */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dates de réservation</h2>
              <div className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                <CalendarIcon className="text-blue-500 mr-3" />
                <span className="text-gray-700">17/02/2024 - 20/02/2024</span>
              </div>
            </div>
            
            {/* Facture */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Facture</h2>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <Facture price={reservation.price} dateRange={reservation.dateRange} />
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleConfirmPayment}
                className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
              >
                <CreditCardIcon />
                <span>Confirmer et payer</span>
              </button>
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


