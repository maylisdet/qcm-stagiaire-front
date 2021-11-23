import * as React from 'react';
import { Button, Grid }  from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from '../../Authentication/LogoutButton';
import { UserManagement } from '../../UserManagement';

const AdminComponent = () => {

  const goToUserManagement = () => {
    return <UserManagement/>
  }

    return (
      <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <Stack direction="column" spacing={2}>
          <Button variant="contained" onClick={goToUserManagement}>User Management</Button>
          <Button variant="contained">Quizzes Management</Button>
          <LogoutButton/>
        </Stack>
      </Grid>
      </>
    )
}

export {AdminComponent}