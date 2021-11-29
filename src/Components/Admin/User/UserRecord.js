import * as React from 'react';
import { Grid, Stack, Button } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { LogoutButton } from 'Components/Authentication/LogoutButton';

const UserRecord = () => {
  const columns = [
    {
      name: 'Quizz Name',
    },
    {
      name: 'Theme',
    },
    {
      name: 'Score',
    },
    {
      name: 'Best Score of the quizz',
      options: {
        setCellProps: () => ({ style: { minWidth: '200px', maxWidth: '500px' } }),
      },
    },
    {
      name: 'Rank',
    },
    {
      name: 'Action',
      options: {
        customBodyRender: () => {
          return <Button>See profile</Button>;
        },
      },
    },
  ];

  const data = [
    ['Intro to Java EE', 'Java EE', '80% in 10:15', '90% in 9:21', '3/8'],
    ['Intro React', 'React', '80% in 10:15', '90% in 9:21', '3/8'],
  ];

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Stack direction="column" alignItems={'flex-end'} spacing={2}>
        <LogoutButton />
      </Stack>
      <MUIDataTable title={'Trainees'} data={data} columns={columns} />
    </Grid>
  );
};

export { UserRecord };
