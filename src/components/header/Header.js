import React from 'react';
import { Grid } from '@mui/material';
import { BackButton } from 'components/header/BackButton';
import { LogoutButton } from 'components/header/LogoutButton';

const Header = ({ toBackPage }) => {
  return (
    <>
      <Grid container direction="row" justifyContent="space-between">
        <BackButton toBackPage={toBackPage} />
        <LogoutButton />
      </Grid>
    </>
  );
};

export { Header };
