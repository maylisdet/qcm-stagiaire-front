import React from 'react';
import { Grid } from '@mui/material';
import { BackButton } from './BackButton';
import { LogoutButton } from './LogoutButton';

const Header = () => {
  return (
    <>
      <Grid container direction="row" justifyContent="space-between">
        <BackButton />
        <LogoutButton />
      </Grid>
    </>
  );
};

export { Header };
