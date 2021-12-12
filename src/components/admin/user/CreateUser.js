import { useState, useCallback } from 'react';
import { Container, Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useHistory } from 'react-router-dom';

import { toUsersManagementPage } from 'utils/RouteUtils';

import { Header } from 'components/header/Header';
import UserService from 'services/UserService';

const CreateUser = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    company: '',
    password: '',
    role: {
      id: '2',
      label: 'TRAINEE',
    },
  });

  const handleChange = (prop) => (event) => {
    setNewUser({ ...newUser, [prop]: event.target.value });
  };

  /*************************/
  /******** API Call ******/
  /***********************/

  const errorCallback = (error) => {
    setLoading(false);
  };

  const createTrainee = useCallback(() => {
    const callback = () => {
      setLoading(false);
      toUsersManagementPage(history);
    };
    console.log(newUser);
    UserService.new_user(newUser, callback, errorCallback);
  }, [newUser, history]);

  return (
    <Container maxWidth="md">
      <Stack spacing={2} mt={2}>
        <Header />
        <Stack alignItems="center">
          <Stack width="600px" spacing={2} mt={2}>
            <TextField label="Firstname" variant="outlined" required onChange={handleChange('firstname')} />
            <TextField label="Lastname" variant="outlined" required onChange={handleChange('lastname')} />
            <TextField label="Email" variant="outlined" type="email" required onChange={handleChange('email')} />
            {/* pattern for type="tel" not tested yet but should work */}
            <TextField
              label="Phone Number"
              variant="outlined"
              type="tel"
              pattern="[0-9]{10}"
              required
              onChange={handleChange('phone')}
            />
            <TextField label="Company" variant="outlined" required onChange={handleChange('company')} />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
              onChange={handleChange('password')}
            />
            <LoadingButton {...loading} variant="outlined" onClick={() => createTrainee()}>
              Create Profile
            </LoadingButton>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export { CreateUser };
