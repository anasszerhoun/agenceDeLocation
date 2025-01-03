import React from "react";
import PersonalInformations from "./UserProfile/PersonalInformations";
import Historique from "./UserProfile/Historique";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8080/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
          
        });
        setUser(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUserProfile();
  },[]);
  

  

  return (
    <>
      <div className="cont w-100">
        <PersonalInformations info={user}/>
        <hr />
        <Historique res={user.reservations} />
      </div>
      <div style={{ height: "50vh" }}>bbbbbbbb</div>
    </>
  );
}

export default UserProfile;
