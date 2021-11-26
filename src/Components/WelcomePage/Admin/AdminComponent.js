import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from '../../Authentication/LogoutButton';
import { useHistory } from 'react-router-dom'

const AdminComponent = () => {
  const history = useHistory()

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Stack direction="column" spacing={2}  mt={2}>
                    <Button variant="contained" onClick={() => {history.push('/admin/user-management')}}>
                        User Management
                    </Button>
                    <Button variant="contained" onClick={() => {history.push('/admin/quizzes-management')}}>
                      Quizzes Management</Button>
                    <LogoutButton />
                </Stack>
            </Grid>
        </>
    );
};

export { AdminComponent };
