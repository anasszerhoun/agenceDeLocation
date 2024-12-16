import AddVehicule from "./Components/AddVehicule";
import "./Style/App.css";
import React from "react";
import PersonalInformations from "./Components/UserProfile/PersonalInformations";
import UserProfile from "./Components/UserProfile";
import Reservation from "./Components/Reservation";
import Header from "./Components/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Style/global.scss';
import './index.css';
import Home from "./Components/Home/Home";
import Login from "./Components/authentication/Login";
import Register from "./Components/authentication/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarPreview from "./Components/Home/CarPreview";
import CheckoutPage from "./Components/Pay/CheckoutPage";

function App() {

const router = createBrowserRouter([
  {
    path:"",
    element:<div><Header></Header><UserProfile></UserProfile><Reservation></Reservation></div>
  },
  {
  path:"/profile",
  element:<UserProfile />
},{
  path:"/reservation",
  element:<Reservation />
}])

  return (
    <div className="container App w-100 h-100 ">
      <RouterProvider router={router}>
      </RouterProvider>
      {/* <UserProfile /> */}
      {/* <Reservation /> */}
    </div>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/carpreview" element={<CarPreview />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/pay" element={<CheckoutPage />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
