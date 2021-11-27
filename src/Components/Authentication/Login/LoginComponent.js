import { useState } from 'react';
import { Container, Stack, TextField, Grid } from '@mui/material';
import { LoginButton } from '../LoginButton';
import { useHistory } from 'react-router-dom';

const LoginComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState();

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const history = useHistory();

  const redirectToNextPage = () => {
    if (login === 'admin') {
      history.push('/admin');
    } else {
      history.push('/trainee');
    }
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Container maxWidth="sm">
        <Stack spacing={3} mt={4}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            value={login}
            onChange={handleLoginChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <LoginButton variant="contained" onClick={redirectToNextPage} />
        </Stack>
      </Container>
    </Grid>
  );
};

export { LoginComponent };
