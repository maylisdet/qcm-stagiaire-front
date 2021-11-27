import * as React from 'react';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LogoutButton } from '../Authentication/LogoutButton';
import MUIDataTable from 'mui-datatables';

const QuizzesResultsComponent = () => {
  const columns = ['Quizz Name', 'Theme', 'Score', 'Duration'];

  const data = [
    ['ReactJS', 'React', '60%', '10.3'],
    ['ReactNative', 'React', '80%', '12'],
    ['Hooks', 'React', '80%', '15'],
    ['API Calls', 'React Queries', '20%', '15'],
  ];

  const options = {
    filterType: 'checkbox',
  };

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <MUIDataTable title={'Results'} data={data} columns={columns} options={options} />
          <LogoutButton />
        </Stack>
      </Grid>
    </>
  );
};

export { QuizzesResultsComponent };
