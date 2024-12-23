import AddVehicule from "./Components/AddVehicule";
import "./Style/App.css";
import React from "react";
import PersonalInformations from "./Components/UserProfile/PersonalInformations";
import UserProfile from "./Components/UserProfile";
import Reservation from "./Components/Reservation";
import Login from "./Components/authentication/Login";
import Register from "./Components/authentication/Register";

import Header from "./Components/Header";
import {createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom"


const isAuthenticated = () => {
  const token = localStorage.getItem('token'); 
  return token !== null; 
};

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <UserProfile />
          <Reservation />
        </div>
      ),
    },
    {
      path: "/profile",
      element: isAuthenticated() ? <UserProfile /> : <Navigate to="/login" />, // Rediriger si non authentifié
    },
    {
      path: "/reservation",
      element: isAuthenticated() ? <Reservation /> : <Navigate to="/login" />, // Rediriger si non authentifié
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:"/register",
      element:<Register />
    }
  ]);

  return (
    <div className="container App w-100 h-100 ">
      <RouterProvider router={router}>
      </RouterProvider>
      {/* <UserProfile /> */}
      {/* <Reservation /> */}
    </div>

  );
}

export default App;
