import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from './Authentication/LogoutButton';

const UserManagement = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Stack direction="column" spacing={2}>
                    <Button variant="contained" href="/admin/create-user">
                        {' '}
                        New trainee{' '}
                    </Button>
                    <LogoutButton />
                </Stack>
            </Grid>
        </>
    );
};

export { UserManagement };
