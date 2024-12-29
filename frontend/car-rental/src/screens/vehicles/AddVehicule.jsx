import React from "react";
import { useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import AreaTop from "../../components/dashboard/areaTop/AreaTop";

function AddVehicule({ mode }) {
  
  // const [selectedImage, setSelectedImage] = useState([]);
  
  // const handleImageChange = (event) => {
  //   const files = event.target.files;
  //   const newImages = Array.from(files).map((file) =>
    //     URL.createObjectURL(file)
  //   );
  //   setSelectedImage((prevImages) => [...prevImages, ...newImages]);
  // };
  
  // const removeImage = (imageUrl) => {
    //   setSelectedImage((prevImages) =>
      //     prevImages.filter((image) => image !== imageUrl)
  //   );
  // };
  
  const location = useLocation();
  const { carData } = location.state || {};
  const navigate = useNavigate();
  const initialFormData = {
    marque: mode === 'edit' && carData ? carData.marque : '',
    modele: mode === 'edit' && carData ? carData.modele : '',
    tarif: mode === 'edit' && carData ? carData.tarif : '',
    type: mode === 'edit' && carData ? carData.type : 'essence',
    immatriculation: mode === 'edit' && carData ? carData.immatriculation : '',
    status: mode === 'edit' && carData ? carData.status : 'available',
  };
  const [formData, setFormData] = useState(initialFormData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //added for edit case to send only changed data
    const changedData = {type :initialFormData["type"],status:initialFormData["status"]};
    for (const key in formData) {
      if (formData[key] !== initialFormData[key]) {
        changedData[key] = formData[key];
      }
    }
    //console.log(changedData);
    try {
      const requestOptions = {
        method: mode === 'add' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(changedData)
      };

      const response = await fetch(`http://localhost:8080/vehicules${mode === 'edit' ? `/${carData.immatriculation}` : ''}`, requestOptions);
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // navigate('/vehicles', { state: { addCarSuccess : true } });
      const successMessage = mode === 'add' ? 'Car added successfully!' : 'Car updated successfully!';
      navigate('/vehicles', { state: { addCarSuccess: true, message: successMessage } });
      
    } catch (error) {
      const errorMessage = mode === 'add' ? 'Failed to add car.' : 'Failed to update car.';
      navigate('/vehicles', { state: { addCarSuccess: false, message: errorMessage } });
      console.error('Error saving car data:', error);
    }
  };

  return (
    <>
      <AreaTop PageTitle={mode === 'edit' ? "Edit a car" : "Add a new car"} />
      <div className="container addVehicule border rounded shadow-lg p-4 mt-5 bg-light">
        <div className="addVehicule-title mb-4 text-center">
          <h1 className="title">{mode === 'edit' ? "Edit car informations" : "New car informations"}</h1>
          <p className="text-muted">Fill in this form with the car's information.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="informations-vehicule">
            <div className="row gy-4">
              <div className="col-md-6 input-field">
                <label htmlFor="marque" className="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  name="marque"
                  className="form-control"
                  placeholder="Ex: Toyota"
                  value={formData.marque}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="modele" className="form-label">
                  Model
                </label>
                <input
                  type="text"
                  name="modele"
                  className="form-control"
                  placeholder="Ex: Corolla"
                  value={formData.modele}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="tarif" className="form-label">
                  Price (€)
                </label>
                <input
                  type="number"
                  name="tarif"
                  className="form-control"
                  placeholder="Ex: 50"
                  value={formData.tarif}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <select name="type" className="form-select" value={formData.type} onChange={handleChange}>
                  <option value="essence">Essence</option>
                  <option value="diesel">Diesel</option>
                  <option value="electrique">Electrique</option>
                  <option value="hybride">Hybride</option>
                </select>
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="plate" className="form-label">
                  Plate
                </label>
                <input
                  type="text"
                  name="immatriculation"
                  className="form-control"
                  placeholder="Ex: 1 A 1"
                  value={formData.immatriculation}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 input-field">
              <label htmlFor="status" className="form-label">
                  Type
                </label>
                <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
                  <option value="Available">Available</option>
                  <option value="Rented">Rented</option>
                  <option value="Down">Down</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-outline-danger px-4" onClick={() => navigate('/vehicles')}>Cancel</button>
            <button type="submit" className="btn btn-primary px-4">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddVehicule;

