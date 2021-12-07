import { useState } from 'react';
import { Stack, TextField, Button, FormGroup, FormControlLabel, Switch } from '@mui/material';

const UserProfile = () => {
  const [isActive, setIsActive] = useState();
  const [toogleLabel, setToogleLabel] = useState('active');
  const [name, setName] = useState('Pierre');
  const [last_name, setLastName] = useState('Dupond');
  const [email, setEmail] = useState('p.dupon@email.fr');
  const [phone_number, setPhoneNumber] = useState('+33600000000');
  const [company, setCompany] = useState('Les bronzés font du ski');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const changeActiveLabel = () => {
    setIsActive(!isActive);
    setToogleLabel(isActive ? 'active' : 'inactive');
  };

  return (
    <Stack spacing={3} mt={2}>
      <TextField id="outlined-basic" label="Firstname" variant="outlined" value={name} onChange={handleNameChange} />
      <TextField
        id="outlined-basic"
        label="Lastname"
        variant="outlined"
        value={last_name}
        onChange={handleLastNameChange}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={phone_number}
        onChange={handlePhoneNumberChange}
      />
      <TextField
        id="outlined-basic"
        label="Company"
        variant="outlined"
        value={company}
        onChange={handleCompanyChange}
      />
      <TextField
        id="outlined-basic"
        label="Date of creation"
        variant="outlined"
        disabled={true}
        value="01/01/01 at 01:01"
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label={toogleLabel}
          onChange={() => changeActiveLabel()}
        />
      </FormGroup>
      <Button variant="outlined">Save modifications</Button>
    </Stack>
  );
};

export { UserProfile };
