import { useState } from 'react';
import axios from 'axios';
import { Container, Stack, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { LoginButton } from 'components/authentication/LoginButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      redirectToNextPage();
    }
  };

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
    <Container maxWidth="xs">
      <Stack spacing={3} mt={4}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          onKeyPress={handleEnter}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleEnter}
        />
        <LoginButton variant="contained" onClick={() => redirectToNextPage()} />
      </Stack>
    </Container>
  );
};

export { Login };
