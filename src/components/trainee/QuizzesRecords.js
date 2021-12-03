import { Container, Button, Stack } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { Header } from 'components/header/Header';
import { useHistory } from 'react-router-dom';

const QuizzesRecords = () => {
  const history = useHistory();

  const columns = [
    {
      name: 'quizLabel',
      label: 'Quiz Name',
    },
    {
      name: 'theme',
      label: 'Theme',
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
      name: 'duration',
      label: 'Duration',
    },
    {
      name: 'details',
      label: 'Details',
      options: {
        customBodyRender: () => {
          return (
            <Button
              onClick={({ quizz_id = 1, trainee_id = 3 }) => {
                history.push(`/trainee/${trainee_id}/quizzes/${quizz_id}/result`);
              }}
            >
              Detail
            </Button>
          );
        },
      },
    },
  ];

  const data = [
    { quizLabel: 'Joe James', theme: 'Test Corp', score: '30', rank: '4/20', duration: '3 hours' },
    { quizLabel: 'Joe James', theme: 'Test Corp', score: '30', rank: '4/20', duration: '3 hours' },
    { quizLabel: 'Joe James', theme: 'Test Corp', score: '30', rank: '4/20', duration: '3 hours' },
  ];

  const options = {
    filterType: 'checkbox',
  };

  return (
    <>
      <Container maxWidth="md" justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <MUIDataTable title={'Results'} data={data} columns={columns} options={options} />
        </Stack>
      </Container>
    </>
  );
};

export { QuizzesRecords };
