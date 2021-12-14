import { useState } from 'react';
import { Stack, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { toUsersManagementPage } from 'utils/RouteUtils';
import { useCallback } from 'react';
import { LoadingButton } from '@mui/lab';

const UserProfile = (props) => {
  /*************************/
  /******** React Hooks *****/
  /***********************/
  const history = useHistory();
  const [isActive, setIsActive] = useState(props.user.active);
  let label = isActive ? 'active' : 'inactive';
  const [toogleLabel, setToogleLabel] = useState(label);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(props.user);

  const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const changeActiveLabel = () => {
    setIsActive(!isActive);
    setToogleLabel(!isActive ? 'active' : 'inactive');
  };

  /*************************/
  /******** API Call ******/
  /***********************/

  const updateUser = useCallback(() => {
    const callback = () => {
      setLoading(false);
      toUsersManagementPage(history);
    };
    const errorCallback = (error) => {
      setLoading(false);
    };
    // Update user
  }, [history]);

  return (
    <Stack spacing={3} mt={2} direction="column">
      <TextField
        id="outlined-basic"
        label="Firstname"
        variant="outlined"
        value={props.user.firstname}
        onChange={handleChange('firstname')}
      />

      <TextField
        id="outlined-basic"
        label="Lastname"
        variant="outlined"
        value={props.user.lastname}
        onChange={handleChange('lastname')}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        value={props.user.email}
        onChange={handleChange('email')}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={props.user.phone}
        onChange={handleChange('phone')}
      />
      <TextField
        id="outlined-basic"
        label="Company"
        variant="outlined"
        value={props.user.company}
        onChange={handleChange('company')}
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
        <LoadingButton loading={loading} style={{ width: '50%' }} variant="contained" onClick={() => updateUser}>
          Save modifications
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export { UserProfile };
