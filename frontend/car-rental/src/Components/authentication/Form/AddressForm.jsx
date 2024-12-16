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
        name="perme"
        value={formData.perme}
        onChange={handleInputChange}
        error={errors.perme}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
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