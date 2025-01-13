import AddVehicule from "./Components/AddVehicule";
import "./Style/App.css";
import React from "react";
import PersonalInformations from "./Components/UserProfile/PersonalInformations";
import UserProfile from "./Components/UserProfile";
import Reservation from "./Components/Reservation";
import Login from "./Components/authentication/Login";
import Register from "./Components/authentication/Register";
import Home from "./Components/Home/Home";
import CarPreview from "./Components/Home/CarPreview";
import CheckoutPage from "./Components/Payment/CheckoutPage";
import Success from "./Components/Payment/Success";

import Header from "./Components/header/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
        </div>
      ),
    },
    {
      path: "/profile",
      element: isAuthenticated() ? <><Header/><UserProfile /></> : <Navigate to="/login" />, // Rediriger si non authentifié
    },
    {
      path: "/reservation",
      element: isAuthenticated() ? (
        <div>
          <Header />
          <Reservation />
        </div>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/login",
      element: isAuthenticated() ? <Navigate to="/home" /> : <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: (
        <div>
          <Header />
          <Home />
        </div>
      )
    },
    {
      path: "/carPreview",
      element:  ( 
              <div>
                <Header />
                <CarPreview />
              </div>
            )
    },
    {
      path: "/payment",
      element: (
          isAuthenticated() ? 
        <div>
          <Header />
          <CheckoutPage />
        </div>
       : <Navigate to="/login" />
      ),
    },{
      path:"/addCar",
      element:<AddVehicule />
    },{
      path:"/success",
      element:(
        isAuthenticated() ? 
        <div>
          <Header />
          <Success />
        </div>
       : <Navigate to="/login" />
      )
    }
  ]);

  return (
    <div className="container App w-100 h-100 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
