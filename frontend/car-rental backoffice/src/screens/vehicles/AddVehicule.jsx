import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AreaTop from "../../components/dashboard/areaTop/AreaTop";

function AddVehicule({ mode }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
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
    imageUrls: mode === 'edit' && carData ? carData.imageUrls : []
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles(prev => [...prev, ...files]);
    const newImages = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('vehicule', JSON.stringify(formData));

      imageFiles.forEach((file) => {
        formDataToSend.append('images', file);
      });

      const url = `http://localhost:8080/vehicules${mode === 'edit' ? `/${carData.immatriculation}` : ''}`;
      const method = mode === 'add' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method: method,
        body: formDataToSend
      });

      if (!response.ok) throw new Error('Network response was not ok');

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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="informations-vehicule">
            <div className="row gy-4">
              <div className="col-12 mb-4">
                <label htmlFor="images" className="form-label">Car Images</label>
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  className="form-control mb-3"
                  onChange={handleImageChange}
                />
                <div className="d-flex flex-wrap gap-3">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="position-relative">
                      <img
                        src={image}
                        alt={`Car preview ${index + 1}`}
                        style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                        className="rounded"
                      />
                      <button
                        type="button"
                        className="btn btn-danger btn-sm position-absolute top-0 end-0"
                        onClick={() => removeImage(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {mode === 'edit' && carData?.imageUrls?.map((url, index) => (
                    <div key={`existing-${index}`} className="position-relative">
                      <img
                        src={url}
                        alt={`Existing car image ${index + 1}`}
                        style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-6 input-field">
                <label htmlFor="marque" className="form-label">Brand</label>
                <input
                  type="text"
                  name="marque"
                  className="form-control"
                  placeholder="Ex: Toyota"
                  value={formData.marque}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="modele" className="form-label">Model</label>
                <input
                  type="text"
                  name="modele"
                  className="form-control"
                  placeholder="Ex: Corolla"
                  value={formData.modele}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="tarif" className="form-label">Price (€)</label>
                <input
                  type="number"
                  name="tarif"
                  className="form-control"
                  placeholder="Ex: 50"
                  value={formData.tarif}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="type" className="form-label">Type</label>
                <select
                  name="type"
                  className="form-select"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="essence">Essence</option>
                  <option value="diesel">Diesel</option>
                  <option value="electrique">Electrique</option>
                  <option value="hybride">Hybride</option>
                </select>
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="immatriculation" className="form-label">Plate</label>
                <input
                  type="text"
                  name="immatriculation"
                  className="form-control"
                  placeholder="Ex: 1 A 1"
                  value={formData.immatriculation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 input-field">
                <label htmlFor="status" className="form-label">Status</label>
                <select
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="available">Available</option>
                  <option value="rented">Rented</option>
                  <option value="down">Down</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-outline-danger px-4" onClick={() => navigate('/vehicles')}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary px-4">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddVehicule;