// import React from "react";

// function Historique() {
//   return (
//     <div className="historique-location">
//       <div className="header">
//         <h4>Réservations : </h4>
//       </div>
//       <div className="list-historique">
//         <div className="reservation d-flex">
//           <div className="voiture col-3">
//             <img src="/car.svg" alt="" style={{width:"70px",height:"70px"}}/>
//           </div>
//           <div className="info col-6">
//             <div className="nom-voiture">
//               <h2>Renault Clio</h2>
//             </div>
//             <div className="date d-flex">
//               <span>De : 10/12/2024 - </span>
//               <span>3 jours</span>
//             </div>
//             <div className="status active d-flex">
//               <span>Active </span>
//             </div>
//           </div>
//           <div className="prix col-3">
//               <span>900 DH</span>
//           </div>
//         </div>
//         <div className="reservation d-flex">
//           <div className="voiture col-3">
//             <img src="/car.svg" alt="" style={{width:"70px",height:"70px"}}/>
//           </div>
//           <div className="info col-6">
//             <div className="nom-voiture">
//               <h2>Renault Clio</h2>
//             </div>
//             <div className="date d-flex">
//               <span>De : 10/12/2024 - </span>
//               <span>3 jours</span>
//             </div>
//             <div className="status Nonactive d-flex">
//               <span>NonActive</span>
//             </div>
//           </div>
//           <div className="prix col-3">
//               <span>900 DH</span>
//           </div>
//         </div><div className="reservation d-flex">
//           <div className="voiture col-3">
//             <img src="/car.svg" alt="" style={{width:"70px",height:"70px"}}/>
//           </div>
//           <div className="info col-6">
//             <div className="nom-voiture">
//               <h2>Renault Clio</h2>
//             </div>
//             <div className="date d-flex">
//               <span>De : 10/12/2024 - </span>
//               <span>3 jours</span>
//             </div>
//             <div className="status active d-flex">
//               <span>Active </span>
//             </div>
//           </div>
//           <div className="prix col-3">
//               <span>900 DH</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Historique;

import React from "react";
import { Car, Calendar, CheckCircle, XCircle, CreditCard, Sparkles, Star } from 'lucide-react';

const reservations = [
  { id: 1, carName: "Renault Clio", startDate: "2024-12-10", duration: 3, status: "active", price: 900 },
  { id: 2, carName: "Peugeot 208", startDate: "2024-11-15", duration: 5, status: "inactive", price: 1200 },
  { id: 3, carName: "Volkswagen Golf", startDate: "2024-12-20", duration: 2, status: "active", price: 800 },
  { id: 4, carName: "Dacia Duster", startDate: "2025-01-05", duration: 7, status: "active", price: 1500 },
];

function ReservationHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-br  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 relative">
          Historique des Réservations
      
        </h1>
        <div className="space-y-8">
          {reservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReservationCard({ reservation }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6 relative">
        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-blue-500 rounded-full p-2">
          <Star className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="bg-blue-100 p-3 rounded-full">
              <Car className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{reservation.carName}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(reservation.startDate).toLocaleDateString('fr-FR')} - {reservation.duration} jours</span>
              </div>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${reservation.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {reservation.status === 'active' ? (
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Active
              </span>
            ) : (
              <span className="flex items-center">
                <XCircle className="w-4 h-4 mr-1" />
                Inactive
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-end items-center mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-gray-600" />
            <span className="text-2xl font-bold text-gray-800">{reservation.price} DH</span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2"></div>
    </div>
  );
}

export default ReservationHistory;

