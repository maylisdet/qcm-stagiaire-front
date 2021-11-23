import * as React from 'react';
import { Container, Stack, TextField } from '@mui/material';
import { LoginButton } from '../LoginButton';

const LoginComponent = () => {
    return (
        <Container maxWidth="sm">
            <Stack spacing={3} mt={4}>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
                <LoginButton />
            </Stack>
        </Container>
    );
};

export { LoginComponent };
