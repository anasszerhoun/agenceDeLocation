import React from "react";

function Historique() {
  return (
    <div className="historique-location">
      <div className="header">
        <h4>Historique de Location : </h4>
      </div>
      <div className="list-historique">
        <div className="reservation d-flex">
          <div className="voiture col-3">
            <img src="/car.svg" alt="" style={{width:"70px",height:"70px"}}/>
          </div>
          <div className="info col-6">
            <div className="nom-voiture">
              <h2>Renault Clio</h2>
            </div>
            <div className="date d-flex">
              <span>De : 10/12/2024 - </span>
              <span>3 jours</span>
            </div>
          </div>
          <div className="prix col-3">
              <span>900 DH</span>
          </div>
        </div>
        <div className="reservation d-flex">
          <div className="voiture col-3">
            <img src="/car.svg" alt="" style={{width:"70px",height:"70px"}}/>
          </div>
          <div className="info col-6">
            <div className="nom-voiture">
              <h2>Renault Clio</h2>
            </div>
            <div className="date d-flex">
              <span>De : 10/12/2024 - </span>
              <span>3 jours</span>
            </div>
          </div>
          <div className="prix col-3">
              <span>900 DH</span>
          </div>
        </div><div className="reservation d-flex">
          <div className="voiture col-3">
            <img src="/car.svg" alt="" style={{width:"70px",height:"70px"}}/>
          </div>
          <div className="info col-6">
            <div className="nom-voiture">
              <h2>Renault Clio</h2>
            </div>
            <div className="date d-flex">
              <span>De : 10/12/2024 - </span>
              <span>3 jours</span>
            </div>
          </div>
          <div className="prix col-3">
              <span>900 DH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historique;
