import * as React from 'react';
import Button from '@mui/material/Button';

const LoginButton = ({onClick}) => {
    return (
        <Button variant="contained" onClick={onClick}>
            Login
        </Button>
    );
};

export { LoginButton };
