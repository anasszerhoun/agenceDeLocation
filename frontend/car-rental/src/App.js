import AddVehicule from "./Components/AddVehicule";
import "./Style/App.css";
import React from "react";
import UserPr from "./Components/UserPr"
import PersonalInformations from "./Components/UserProfile/PersonalInformations";
import UserProfile from "./Components/UserProfile";


function App() {
  return (
    <div className="container App w-100 h-100 ">
      <UserProfile />
    </div>
  );
}

export default App;
