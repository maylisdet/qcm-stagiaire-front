import { useState } from 'react';
import axios from 'axios';
import { Container, Stack, TextField, Grid } from '@mui/material';
import { LoginButton } from 'components/authentication/LoginButton';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const history = useHistory();

  const redirectToNextPage = () => {
    if (email === 'admin') {
      history.push('/admin');
    } else {
      history.push('/trainee');
    }
  };

  axios
    .post(`https://jsonplaceholder.typicode.com/users`, {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Container maxWidth="sm">
        <Stack spacing={3} mt={4}>
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

export { Login };
