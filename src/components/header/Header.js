import React from 'react';
import { Grid } from '@mui/material';
import { BackButton } from 'components/header/BackButton';
import { LogoutButton } from 'components/header/LogoutButton';
import { useHistory } from 'react-router-dom';

const Header = ({ toBackPage }) => {
  const history = useHistory();

  const toLoginPage = () => {
    history.push('/login');
  };
  return (
    <>
      <Grid container direction="row" justifyContent="space-between">
        <BackButton toBackPage={toBackPage} />
        <LogoutButton onClick={() => toLoginPage()} />
      </Grid>
    </>
  );
};

export { Header };
