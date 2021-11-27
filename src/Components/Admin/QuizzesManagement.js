import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from '../Authentication/LogoutButton';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';

const QuizzesManagement = () => {
  const history = useHistory();
  const columns = [
    {
      name: 'Quizz',
    },
    {
      name: 'Theme',
    },
    {
      name: 'Number of records',
    },
    {
      name: 'Edit quizz',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <Button>Edit</Button>;
        },
      },
    },
  ];

  const data = [
    ['Intro JEE', 'Back', '8'],
    ['Intro React', 'Front', '57'],
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
              New quizz
            </Button>
          </Stack>
          <Stack spacing={8} bottom={2}>
            <MUIDataTable title={'Active quizzes'} data={data} columns={columns} />
            <MUIDataTable title={'Inactive quizzes'} data={data} columns={columns} />
          </Stack>
        </Stack>
      </Grid>
    </>
  );
};

export { QuizzesManagement };
