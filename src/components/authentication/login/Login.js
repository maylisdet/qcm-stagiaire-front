import { useState, useCallback } from 'react';
import { Container, Stack, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { LoginButton } from 'components/authentication/LoginButton';
import AuthentificationService from 'services/AuthentificationService';
import { goToAdmin, goToTrainee } from 'utils/RouteUtils';

import toast from 'react-hot-toast';

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
  const notifyError = () => toast.error('There is a problem, check your email and password');
  const notifySucess = () => toast.success('Bienvenu dans votre application de QCM');

  const redirectToNextPage = useCallback(() => {
    const signInCallback = (data) => {
      if (data.roles[0] === 'ADMIN') {
        localStorage.setItem('auth-token', data.token);
        goToAdmin(history);
        notifySucess();
      } else {
        goToTrainee(history);
        notifySucess();
      }
    };
    const signInErrorCallback = () => {
      notifyError();
    };
    AuthentificationService.signIn({ email: email, password: password }, signInCallback, signInErrorCallback);
  }, [history, email, password]);

  return (
    <Container maxWidth="xs">
      <Stack spacing={3} mt={4}>
        <TextField label="Email" variant="outlined" type="email" value={email} onChange={handleEmailChange} />
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
