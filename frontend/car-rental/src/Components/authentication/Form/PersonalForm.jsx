import Input from "../UI/Input";

const PersonalForm = ({ formData, handleInputChange, errors }) => {
  return (
    <div>
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        error={errors.name}
      />
      <Input
        label="Last Name"
        name="lastname"
        value={formData.lastname}
        onChange={handleInputChange}
        error={errors.lastname}
      />
      <Input
        label="Date of Birth"
        name="date_naissance"
        type="date"
        value={formData.date_naissance}
        onChange={handleInputChange}
        error={errors.date_naissance}
      />
      <Input
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        error={errors.address}
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        error={errors.phone}
      />
    </div>
  );
};

export default PersonalForm;