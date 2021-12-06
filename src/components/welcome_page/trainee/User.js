import { Button, Container, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Header } from 'components/header/Header';

const User = () => {
  const history = useHistory();

  // redirect to all the Quizzes available for a specific trainee
  // -> Quizzes Component
  const toTraineeQuizzes = (id) => {
    const url = `/trainee/${id}/quizzes`;
    history.push(url);
  };

  // redirect to all previous records for a specific trainee
  // -> QuizzesRecords component
  const toTraineeQuizzesRecords = (id) => {
    const url = `trainee/${id}/quizzes/records`;
    history.push(url);
  };

  return (
    <>
      <Container maxWidth="md">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Stack alignItems={'center'}>
            <Stack width="300px" spacing={2} mt={2}>
              <Button variant="contained" onClick={(id) => toTraineeQuizzes(1)}>
                See quizzes
              </Button>
              <Button variant="contained" onClick={(id) => toTraineeQuizzesRecords(1)}>
                Results
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { User };
