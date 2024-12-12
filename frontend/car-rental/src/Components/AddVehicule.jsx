import React from "react";
import { useState } from "react";

function AddVehicule() {
    const [selectedImage, setSelectedImage] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImage((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (imageUrl) => {
    setSelectedImage((prevImages) =>
      prevImages.filter((image) => image !== imageUrl)
    );
  };
  return (
    <div className="container addVehicule border rounded shadow-lg p-4 mt-5 bg-light">
      <div className="addVehicule-title mb-4 text-center">
        <h1 className="title">Ajouter une Voiture</h1>
        <p className="text-muted">Remplissez les informations nécessaires pour ajouter une nouvelle voiture.</p>
      </div>
      <div className="informations-vehicule">
        <div className="row gy-4">
          <div className="col-md-6 input-field">
            <label htmlFor="marque" className="form-label">
              Marque
            </label>
            <input
              type="text"
              name="marque"
              className="form-control"
              placeholder="Ex : Toyota"
            />
          </div>
          <div className="col-md-6 input-field">
            <label htmlFor="model" className="form-label">
              Modèle
            </label>
            <input
              type="text"
              name="model"
              className="form-control"
              placeholder="Ex : Corolla"
            />
          </div>
          <div className="col-md-6 input-field">
            <label htmlFor="tarif" className="form-label">
              Tarif par jour (€)
            </label>
            <input
              type="number"
              name="tarif"
              className="form-control"
              placeholder="Ex : 50"
            />
          </div>
          <div className="col-md-6 input-field">
            <label htmlFor="type" className="form-label">
              Type de Carburant
            </label>
            <select name="type" className="form-select">
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
              <option value="electrique">Électrique</option>
              <option value="hybride">Hybride</option>
            </select>
          </div>
          <div className="col-12 input-field">
            <label htmlFor="image" className="form-label">
              Ajouter une image
            </label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
              
            />
          </div>
          {selectedImage.length > 0 && (
          <div className="row mt-4 ml-4">
            <p className="text-muted">Aperçu des images :</p>
            {selectedImage.map((image, index) => (
              <div
                key={index}
                className="col-md-3 position-relative mb-3 d-flex align-items-center justify-content-center"
              >
                <img
                  src={image}
                  alt={`Prévisualisation ${index}`}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "200px", width: "100%", objectFit: "cover" }}
                />
                <button
                  className="btn btn-danger btn-sm position-absolute top-0 end-0"
                  style={{ transform: "translate(50%, -50%)" }}
                  onClick={() => removeImage(image)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-danger px-4">Annuler</button>
        <button className="btn btn-primary px-4">Confirmer</button>
      </div>
    </div>
  );
}

export default AddVehicule;

