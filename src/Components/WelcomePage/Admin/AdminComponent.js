import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from '../../Authentication/LogoutButton';

const AdminComponent = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Stack direction="column" spacing={2}  mt={2}>
                    <Button variant="contained" href="/admin/user-management">
                        User Management
                    </Button>
                    <Button variant="contained">Quizzes Management</Button>
                    <LogoutButton />
                </Stack>
            </Grid>
        </>
    );
};

export { AdminComponent };
