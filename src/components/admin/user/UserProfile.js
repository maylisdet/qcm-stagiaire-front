import { useState, useCallback } from 'react';
import { Stack, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { toUsersManagementPage } from 'utils/RouteUtils';
import { LoadingButton } from '@mui/lab';
import UserService from 'services/UserService';
import { notifyError, notifySucess } from 'utils/NotifyUtils';

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
    setUser({ ...user, active: !isActive });
    setToogleLabel(!isActive ? 'active' : 'inactive');
    notifySucess('Active label modified');
  };

  /*************************/
  /******** API Call ******/
  /***********************/
  const updateUser = useCallback(() => {
    const callback = () => {
      setLoading(false);
      notifySucess('User updated');
      toUsersManagementPage(history);
    };
    const errorCallback = (error) => {
      setLoading(false);
      notifyError('There was a problem, try again');
    };
    // delete user.role
    UserService.update(user.id, user, callback, errorCallback);
  }, [history, user]);

  return (
    <Stack spacing={3} mt={2} direction="column">
      <TextField
        id="outlined-basic"
        label="Firstname"
        variant="outlined"
        defaultValue={user.firstname}
        onChange={handleChange('firstname')}
      />

      <TextField
        id="outlined-basic"
        label="Lastname"
        variant="outlined"
        defaultValue={user.lastname}
        onChange={handleChange('lastname')}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        defaultValue={user.email}
        onChange={handleChange('email')}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        defaultValue={user.phone}
        onChange={handleChange('phone')}
      />
      <TextField
        id="outlined-basic"
        label="Company"
        variant="outlined"
        defaultValue={user.company}
        onChange={handleChange('company')}
      />
      <TextField
        id="outlined-basic"
        label="Date of creation"
        variant="outlined"
        disabled={true}
        defaultValue={user.createdAt}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isActive} />}
          label={toogleLabel}
          onChange={() => changeActiveLabel()}
        />
      </FormGroup>
      <Stack alignItems="center">
        <LoadingButton loading={loading} style={{ width: '50%' }} variant="contained" onClick={updateUser}>
          Save modifications
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export { UserProfile };
