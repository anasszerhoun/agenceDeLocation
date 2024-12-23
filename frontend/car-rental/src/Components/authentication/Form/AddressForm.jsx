import Input from "../UI/Input";

const AddressForm = ({ formData, handleInputChange, errors }) => {
  return (
    <div>
      <Input
        label="CIN"
        name="cin"
        value={formData.cin}
        onChange={handleInputChange}
        error={errors.cin}
      />
      <Input
        label="Driving License"
        name="permisConduire"
        value={formData.permisConduire}
        onChange={handleInputChange}
        error={errors.permisConduire}
      />
      <Input
        label="Email"
        name="mail"
        type="email"
        value={formData.mail}
        onChange={handleInputChange}
        error={errors.mail}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        error={errors.password}
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        error={errors.confirmPassword}
      />
    </div>
  );
};

export default AddressForm;