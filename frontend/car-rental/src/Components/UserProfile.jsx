import React from "react";
import PersonalInformations from "./UserProfile/PersonalInformations";
import Historique from "./UserProfile/Historique";
import Active from "./UserProfile/Active";

function UserProfile() {
  return (
    <>
      <div className="cont">
        <PersonalInformations />
        <hr />
        <Historique />
      </div>
      <div style={{ height: "50vh" }}>bbbbbbbb</div>
    </>
  );
}

export default UserProfile;
