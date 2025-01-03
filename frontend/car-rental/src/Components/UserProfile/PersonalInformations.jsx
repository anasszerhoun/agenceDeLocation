import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function PersonalInformations({info}) {
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-r p-8">
      {/* Container */}
      <div className="bg-white shadow-xl rounded-xl max-w-6xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-white">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-500 shadow-lg">
            {/* {info.prenomUser.charAt(0)}{info.nomUser.charAt(0)} */}
            #
          </div>
          <div className="ml-8">
            <h1 className="text-3xl font-bold">{info.prenomUser} {info.nomUser}</h1>
            <p className="text-lg ml-5">Membre depuis : 10/12/2024</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          {/* Informations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Nom</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-file-earmark-person text-blue-500 text-lg"></i>
                <span className="ml-4 text-gray-800">{info.nomUser}</span>
              </div>
            </div>
            {/* Prénom */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Prénom</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-file-earmark-person text-blue-500 text-lg"></i>
                <span className="ml-4 text-gray-800">{info.prenomUser}</span>
              </div>
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Email</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-envelope-at-fill text-green-500 text-lg"></i>
                <span className="ml-4 text-gray-800">{info.mail}</span>
              </div>
            </div>
            {/* Téléphone */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Téléphone</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-telephone-fill text-yellow-500 text-lg"></i>
                <span className="ml-4 text-gray-800">{info.telephone}</span>
              </div>
            </div>
            {/* Adresse */}
            <div className="md:col-span-2">
              <label className="block text-gray-600 font-medium mb-2">Date de naissance</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi  bi-cake-fill text-red-500 text-lg"></i>
                <span className="ml-4 text-gray-800">
                  {new Date(info.dateNaissance).toLocaleDateString('fr-FR')}
                </span>
              </div>
            </div>
            {/* Permis */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Permis</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-person-vcard-fill text-indigo-500 text-lg"></i>
                <span className="ml-4 text-gray-800">{info.permisConduire}</span>
              </div>
            </div>
            {/* CIN */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">CIN</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-person-vcard-fill text-indigo-500 text-lg"></i>
                <span className="ml-4 text-gray-800">{info.cin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 flex justify-between">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            data-bs-toggle="modal"
            data-bs-target="#editProfileModal"
          >
            Modifier le profil
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
            Supprimer le compte
          </button>
        </div>

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
                      defaultValue={info.nomUser}
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
                      defaultValue={info.prenomUser}
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
                      defaultValue={info.mail}
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
                      defaultValue={info.telephone}
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
                      defaultValue={info.cin}
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
                      defaultValue={info.permisConduire}
                    />
                  </div>
                </div>
                <div className="lign ms-5  col-10">
                  <label htmlFor="dateNaissance" className="form-label">
                   Date de naissance
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    defaultValue={new Date(info.dateNaissance).toLocaleDateString('fr-FR')}
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

    </div >
  );
}

export default PersonalInformations;
