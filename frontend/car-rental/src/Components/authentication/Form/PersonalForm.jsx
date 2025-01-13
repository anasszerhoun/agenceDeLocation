import Input from "../UI/Input";
import {Alert} from '@mui/material'


const PersonalForm = ({ formData, handleInputChange, errors ,alert}) => {
  return (
    <div>
      <Input
        label="Name"
        name="nomUser"
        value={formData.nomUser}
        onChange={handleInputChange}
        error={errors.nomUser}
      />
      <Input
        label="Last Name"
        name="prenomUser"
        value={formData.prenomUser}
        onChange={handleInputChange}
        error={errors.prenomUser}
      />
      <Input
        label="Date of Birth"
        name="dateNaissance"
        type="date"
        value={formData.dateNaissance}
        onChange={handleInputChange}
        error={errors.dateNaissance}
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
        name="numTelephone"
        type="tel"
        value={formData.numTelephone}
        onChange={handleInputChange}
        error={errors.numTelephone}
      />
      {alert && <Alert severity="error" sx={{ marginTop: 2 }}>
                  Nom d'utilisateur déjà 
                </Alert>
      }
    </div>
  );
};

export default PersonalForm;