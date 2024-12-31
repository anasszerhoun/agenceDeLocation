const ConfirmationForm = ({ formData }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Review Your Information
      </h2>
      <div className="space-y-4 text-gray-700">
        <p>
          <strong className="block font-medium text-gray-900">Name:</strong>
          {formData.prenomUser || "Not provided"}
        </p>
        <p>
          <strong className="block font-medium text-gray-900">Last Name:</strong>
          {formData.nomUser || "Not provided"}
        </p>
        <p>
          <strong className="block font-medium text-gray-900">Date of Birth:</strong>
          {formData.dateNaissance || "Not provided"}
        </p>
        <p>
          <strong className="block font-medium text-gray-900">Address:</strong>
          {formData.address || "Not provided"}
        </p>
        <p>
          <strong className="block font-medium text-gray-900">Phone:</strong>
          {formData.numTelephone || "Not provided"}
        </p>
        <p>
          <strong className="block font-medium text-gray-900">CIN:</strong>
          {formData.cin || "Not provided"}
        </p>
        <p>
          <strong className="block font-medium text-gray-900">Driving License:</strong>
          {formData.permisConduire || "Not provided"}
        </p>
        <p>
          <strong className="block font-medium text-gray-900">Email:</strong>
          {formData.mail || "Not provided"}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationForm;