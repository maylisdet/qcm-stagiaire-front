import { useState } from 'react';
import { Stack, TextField, Button, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { toUsersManagementPage } from 'utils/RouteUtils';

const UserProfile = (props) => {
  /*************************/
  /******** React Hooks *****/
  /***********************/
  const history = useHistory();
  const [isActive, setIsActive] = useState(props.user.active);
  let label = isActive ? 'active' : 'inactive';
  const [toogleLabel, setToogleLabel] = useState(label);
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
    setToogleLabel(!isActive ? 'active' : 'inactive');
  };

  return (
    <Stack spacing={3} mt={2} direction="column">
      <TextField
        id="outlined-basic"
        label="Firstname"
        variant="outlined"
        value={props.user.firstname}
        onChange={handleNameChange}
      />

      <TextField
        id="outlined-basic"
        label="Lastname"
        variant="outlined"
        value={props.user.lastname}
        onChange={handleLastNameChange}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        value={props.user.email}
        onChange={handleEmailChange}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={props.user.phone}
        onChange={handlePhoneNumberChange}
      />
      <TextField
        id="outlined-basic"
        label="Company"
        variant="outlined"
        value={props.user.company}
        onChange={handleCompanyChange}
      />
      <TextField
        id="outlined-basic"
        label="Date of creation"
        variant="outlined"
        disabled={true}
        value={props.user.createdAt}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isActive} />}
          label={toogleLabel}
          onChange={() => changeActiveLabel()}
        />
      </FormGroup>
      <Stack alignItems="center">
        <Button style={{ width: '50%' }} variant="contained" onClick={() => toUsersManagementPage(history)}>
          Save modifications
        </Button>
      </Stack>
    </Stack>
  );
};

export { UserProfile };
