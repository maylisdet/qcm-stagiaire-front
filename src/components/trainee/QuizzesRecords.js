import { Container, Button, Stack } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import { Header } from 'components/header/Header';

const QuizzesRecords = () => {
  const history = useHistory();

  const toTraineeQuizResult = (trainee_id, quiz_id) => {
    const url = `/trainee/${trainee_id}/quizzes/${quiz_id}/result`;
    history.push(url);
  };

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
            <Button onClick={(trainee_id, quiz_id) => toTraineeQuizResult(1, 3)}>
              <SearchIcon />
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
