import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/authentication/Login";
import Register from "./Components/authentication/Register";
import UserProfile from "./Components/UserProfile";
import PersonalInformations from "./Components/UserProfile/PersonalInformations";
import Reservation from "./Components/Reservation";
import CarPreview from "./Components/Home/CarPreview";
import CheckoutPage from "./Components/Pay/CheckoutPage";
import AddVehicule from "./Components/AddVehicule";

// Import styles
import "./Style/App.css";
import "./Style/global.scss";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="container App w-100 h-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />

          <Route path="/profile" element={<UserProfile />}>
            <Route path="personal-info" element={<PersonalInformations />} />
          </Route>

          <Route path="/reservation" element={<Reservation />} />
          <Route path="/car-preview" element={<CarPreview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pay" element={<CheckoutPage />} />
          <Route path="/add-vehicle" element={<AddVehicule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;