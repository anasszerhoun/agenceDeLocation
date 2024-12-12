import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function PersonalInformations() {
  return (
    <div className="w-100 personal-informations-container">
      <div className="header d-flex ">
        <div className="photo-profile col-4"></div>
        <div className="profile-name-date col-4">
          <h3>ANAS ZERHOUN</h3>
          <h4>Depuis 10/12/2024</h4>
        </div>
      </div>
      <div className="center">
        <div className="ligne d-flex">
          <div className="colone col-6">
            <label htmlFor="" className="label">
              Nom
            </label>
            <div className="d-flex">
              <i class="bi bi-file-earmark-person"></i>
              <span className="val">ZERHOUN</span>
            </div>
          </div>
          <div className="colone col-6">
            <label htmlFor="" className="label">
              Prenom
            </label>
            <div className="d-flex">
              <i class="bi bi-file-earmark-person"></i>
              <span className="val">ANAS</span>
            </div>
          </div>
        </div>
        <div className="ligne d-flex">
          <div className="colone col-6">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="d-flex">
              <i class="bi bi-envelope-at-fill"></i>
              <span className="val">ZERHOUN</span>
            </div>
          </div>
          <div className="colone col-6">
            <label htmlFor="" className="label">
              Telephone
            </label>
            <div className="d-flex">
              <i class="bi bi-telephone-fill"></i>
              <span className="val">ANAS</span>
            </div>
          </div>
        </div>
        <div className="addresse">
          <label htmlFor="" className="label">
            Addresse
          </label>
          <div className="d-flex">
            <i class="bi bi-geo-alt-fill"></i>
            <span className="val">HHHHHHHHHHHHHHHHHHHHHHHHHHHHH</span>
          </div>
        </div>
        <div className="ligne d-flex">
          <div className="colone col-6">
            <label htmlFor="" className="label">
              Permis
            </label>
            <div className="d-flex">
              <i class="bi bi-person-vcard-fill"></i>
              <span className="val">BBBB</span>
            </div>
          </div>
          <div className="colone col-6">
            <label htmlFor="" className="label">
              CIN
            </label>
            <div className="d-flex">
              <i class="bi bi-person-vcard-fill"></i>
              <span className="val">HHHHHH</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#editProfileModal"
        >
          Modifier Le profile
        </button>
        <button className="btn btn-danger">Supprimer Compte</button>
      </div>
      {/* Modal Bootstrap */}
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
        aria-labelledby="editProfileModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "1000px" }} // Largeur personnalisée
        >
          <div
            className="modal-content"
            style={{ width: "100%", height: "600px", display: "flex" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="editProfileModalLabel">
                Modifier Le Profil
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="lign d-flex col-12">
                  <div className="mb-3 col-5 ms-5">
                    <label htmlFor="nom" className="form-label">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      defaultValue="ZERHOUN"
                    />
                  </div>
                  <div className="mb-3 col-5 ms-5">
                    <label htmlFor="prenom" className="form-label">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="prenom"
                      defaultValue="ANAS"
                    />
                  </div>
                </div>
                <div className="lign d-flex col-12">
                  <div className="mb-3 col-5 ms-5">
                    <label htmlFor="mail" className="form-label">
                      Mail
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mail"
                      defaultValue="anas@gmail.com"
                    />
                  </div>
                  <div className="mb-3 col-5 ms-5">
                    <label htmlFor="telephone" className="form-label">
                      Telephone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="telephone"
                      defaultValue="0654453243"
                    />
                  </div>
                </div>
                <div className="lign d-flex col-12">
                  <div className="mb-3 col-5 ms-5">
                    <label htmlFor="cin" className="form-label">
                      Cin
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cin"
                      defaultValue="Bbbbb"
                    />
                  </div>
                  <div className="mb-3 col-5 ms-5">
                    <label htmlFor="permis" className="form-label">
                      Permis
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="permis"
                      defaultValue="Gggggg"
                    />
                  </div>
                </div>
                <div className="lign ms-5  col-10">
                  <label htmlFor="email" className="form-label">
                    Addresse
                  </label>
                  <textarea
                    type="email"
                    className="form-control"
                    id="email"
                    defaultValue="HHHHHHHHHHHHHHHHHHHH"
                    style={{ height: "100px" }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
              <button type="button" className="btn btn-primary">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformations;
