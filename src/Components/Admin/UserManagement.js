import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from '../Authentication/LogoutButton';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';

const UserManagement = () => {
  const history = useHistory();
  const columns = [
    {
      name: 'First Name',
    },
    {
      name: 'Last Name',
    },
    {
      name: 'Company',
    },
    {
      name: 'Action',
      options: {
        customBodyRender: () => {
          return (
            <Button
              onClick={({ id = 1 }) => {
                history.push(`/admin/user/${id}/profile`);
              }}
            >
              See profile
            </Button>
          );
        },
      },
    },
  ];

  const data = [
    ['Michel', 'Dupont', 'Les bronzés font du ski'],
    ['Pierre', 'Durant', 'UTC'],
  ];
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={2} mt={2} alignItems={'flex-end'}>
          <Stack direction="column" alignItems={'flex-end'} spacing={2}>
            <LogoutButton />
            <Button
              variant="contained"
              onClick={() => {
                history.push('/admin/create-user');
              }}
            >
              {' '}
              New trainee{' '}
            </Button>
          </Stack>
          <MUIDataTable title={'Trainees'} data={data} columns={columns} />
        </Stack>
      </Grid>
    </>
  );
};

export { UserManagement };
