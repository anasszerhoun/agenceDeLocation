// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// function PersonalInformations() {
//   return (
//     <div className="w-100 personal-informations-container">
//       <div className="header d-flex ">
//         <div className="photo-profile col-4"></div>
//         <div className="profile-name-date col-4">
//           <h3>ANAS ZERHOUN</h3>
//           <h4>Depuis 10/12/2024</h4>
//         </div>
//       </div>
//       <div className="center">
//         <div className="ligne d-flex">
//           <div className="colone col-6">
//             <label htmlFor="" className="label">
//               Nom
//             </label>
//             <div className="d-flex">
//               <i class="bi bi-file-earmark-person"></i>
//               <span className="val">ZERHOUN</span>
//             </div>
//           </div>
//           <div className="colone col-6">
//             <label htmlFor="" className="label">
//               Prenom
//             </label>
//             <div className="d-flex">
//               <i class="bi bi-file-earmark-person"></i>
//               <span className="val">ANAS</span>
//             </div>
//           </div>
//         </div>
//         <div className="ligne d-flex">
//           <div className="colone col-6">
//             <label htmlFor="" className="label">
//               Email
//             </label>
//             <div className="d-flex">
//               <i class="bi bi-envelope-at-fill"></i>
//               <span className="val">ZERHOUN</span>
//             </div>
//           </div>
//           <div className="colone col-6">
//             <label htmlFor="" className="label">
//               Telephone
//             </label>
//             <div className="d-flex">
//               <i class="bi bi-telephone-fill"></i>
//               <span className="val">ANAS</span>
//             </div>
//           </div>
//         </div>
//         <div className="addresse">
//           <label htmlFor="" className="label">
//             Addresse
//           </label>
//           <div className="d-flex">
//             <i class="bi bi-geo-alt-fill"></i>
//             <span className="val">HHHHHHHHHHHHHHHHHHHHHHHHHHHHH</span>
//           </div>
//         </div>
//         <div className="ligne d-flex">
//           <div className="colone col-6">
//             <label htmlFor="" className="label">
//               Permis
//             </label>
//             <div className="d-flex">
//               <i class="bi bi-person-vcard-fill"></i>
//               <span className="val">BBBB</span>
//             </div>
//           </div>
//           <div className="colone col-6">
//             <label htmlFor="" className="label">
//               CIN
//             </label>
//             <div className="d-flex">
//               <i class="bi bi-person-vcard-fill"></i>
//               <span className="val">HHHHHH</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer">
//         <button
//           type="button"
//           className="btn btn-primary"
//           data-bs-toggle="modal"
//           data-bs-target="#editProfileModal"
//         >
//           Modifier Le profile
//         </button>
//         <button className="btn btn-danger">Supprimer Compte</button>
//       </div>
//       {/* Modal Bootstrap */}
//       <div
//         className="modal fade"
//         id="editProfileModal"
//         tabIndex="-1"
//         aria-labelledby="editProfileModalLabel"
//         aria-hidden="true"
//       >
//         <div
//           className="modal-dialog modal-dialog-centered"
//           style={{ maxWidth: "1000px" }} // Largeur personnalisée
//         >
//           <div
//             className="modal-content"
//             style={{ width: "100%", height: "600px", display: "flex" }}
//           >
//             <div className="modal-header">
//               <h5 className="modal-title" id="editProfileModalLabel">
//                 Modifier Le Profil
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form>
//                 <div className="lign d-flex col-12">
//                   <div className="mb-3 col-5 ms-5">
//                     <label htmlFor="nom" className="form-label">
//                       Nom
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="nom"
//                       defaultValue="ZERHOUN"
//                     />
//                   </div>
//                   <div className="mb-3 col-5 ms-5">
//                     <label htmlFor="prenom" className="form-label">
//                       Prénom
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="prenom"
//                       defaultValue="ANAS"
//                     />
//                   </div>
//                 </div>
//                 <div className="lign d-flex col-12">
//                   <div className="mb-3 col-5 ms-5">
//                     <label htmlFor="mail" className="form-label">
//                       Mail
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="mail"
//                       defaultValue="anas@gmail.com"
//                     />
//                   </div>
//                   <div className="mb-3 col-5 ms-5">
//                     <label htmlFor="telephone" className="form-label">
//                       Telephone
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="telephone"
//                       defaultValue="0654453243"
//                     />
//                   </div>
//                 </div>
//                 <div className="lign d-flex col-12">
//                   <div className="mb-3 col-5 ms-5">
//                     <label htmlFor="cin" className="form-label">
//                       Cin
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="cin"
//                       defaultValue="Bbbbb"
//                     />
//                   </div>
//                   <div className="mb-3 col-5 ms-5">
//                     <label htmlFor="permis" className="form-label">
//                       Permis
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="permis"
//                       defaultValue="Gggggg"
//                     />
//                   </div>
//                 </div>
//                 <div className="lign ms-5  col-10">
//                   <label htmlFor="email" className="form-label">
//                     Addresse
//                   </label>
//                   <textarea
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     defaultValue="HHHHHHHHHHHHHHHHHHHH"
//                     style={{ height: "100px" }}
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Annuler
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Enregistrer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PersonalInformations;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function PersonalInformations() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r p-8">
      {/* Container */}
      <div className="bg-white shadow-xl rounded-xl max-w-6xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-white">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-500 shadow-lg">
            AZ
          </div>
          <div className="ml-8">
            <h1 className="text-3xl font-bold">ANAS ZERHOUN</h1>
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
                <span className="ml-4 text-gray-800">ZERHOUN</span>
              </div>
            </div>
            {/* Prénom */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Prénom</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-file-earmark-person text-blue-500 text-lg"></i>
                <span className="ml-4 text-gray-800">ANAS</span>
              </div>
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Email</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-envelope-at-fill text-green-500 text-lg"></i>
                <span className="ml-4 text-gray-800">anas@gmail.com</span>
              </div>
            </div>
            {/* Téléphone */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Téléphone</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-telephone-fill text-yellow-500 text-lg"></i>
                <span className="ml-4 text-gray-800">0654453243</span>
              </div>
            </div>
            {/* Adresse */}
            <div className="md:col-span-2">
              <label className="block text-gray-600 font-medium mb-2">Adresse</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-geo-alt-fill text-red-500 text-lg"></i>
                <span className="ml-4 text-gray-800">
                  HHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
                </span>
              </div>
            </div>
            {/* Permis */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Permis</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-person-vcard-fill text-indigo-500 text-lg"></i>
                <span className="ml-4 text-gray-800">BBBB</span>
              </div>
            </div>
            {/* CIN */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">CIN</label>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <i className="bi bi-person-vcard-fill text-indigo-500 text-lg"></i>
                <span className="ml-4 text-gray-800">HHHHHH</span>
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

    </div >
  );
}

export default PersonalInformations;
