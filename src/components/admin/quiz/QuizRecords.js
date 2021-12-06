import { Container, Stack, Button } from '@mui/material';
import Search from '@mui/icons-material/Search';

import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';

const QuizRecords = () => {
  const history = useHistory();

  const toTraineeProfil = (trainee_id) => {
    const url = `/admin/users/${trainee_id}`;
    history.push(url);
  };

  const columns = [
    {
      name: 'firstName',
      label: 'First Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
    },
    {
      name: 'score',
      label: 'Score',
    },
    {
      name: 'rank',
      label: 'Rank',
    },
    {
      name: 'details',
      label: 'Details',
      options: {
        customBodyRender: () => {
          return (
            <Button onClick={() => toTraineeProfil(1)}>
              <Search />
            </Button>
          );
        },
      },
    },
  ];

  const data = [
    { firstName: 'Joe James', lastName: 'Test Corp', score: '30', rank: '4/20' },
    { firstName: 'Joe James', lastName: 'Test Corp', score: '30', rank: '4/20' },
    { firstName: 'Joe James', lastName: 'Test Corp', score: '30', rank: '4/20' },
  ];

  return (
    <>
      <Container alignitems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <MUIDataTable title={'Quiz Record'} data={data} columns={columns} />
        </Stack>
      </Container>
    </>
  );
};

export { QuizRecords };
