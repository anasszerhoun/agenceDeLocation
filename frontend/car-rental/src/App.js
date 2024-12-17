import AddVehicule from "./Components/AddVehicule";
import "./Style/App.css";
import React from "react";
import PersonalInformations from "./Components/UserProfile/PersonalInformations";
import UserProfile from "./Components/UserProfile";
import Reservation from "./Components/Reservation";
import Header from "./Components/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

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

  );
}

export default App;
