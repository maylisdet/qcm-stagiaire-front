import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from 'Components/Authentication/LogoutButton';
import { useHistory } from 'react-router-dom';

const Admin = () => {
  const history = useHistory();

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <Button
            variant="contained"
            onClick={() => {
              history.push('/admin/users');
            }}
          >
            User Management
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              history.push('/admin/quizzes');
            }}
          >
            Quizzes Management
          </Button>
          <LogoutButton />
        </Stack>
      </Grid>
    </>
  );
};

export { Admin };
