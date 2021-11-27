import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const history = useHistory();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        history.push('/login');
      }}
    >
      Logout
    </Button>
  );
};

export { LogoutButton };
