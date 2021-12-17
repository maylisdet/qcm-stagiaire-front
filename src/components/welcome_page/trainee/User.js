import { Button, Container, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { toTraineeRecords, toTraineeQuizzes } from 'utils/RouteUtils';

import { Header } from 'components/header/Header';

const User = () => {
  const history = useHistory();

  return (
    <>
      <Container maxWidth="md">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Stack alignItems="center">
            <Stack width="300px" spacing={2} mt={2}>
              <Button variant="contained" onClick={(id) => toTraineeQuizzes(history, 1)}>
                See quizzes
              </Button>
              <Button variant="contained" onClick={(id) => toTraineeRecords(history, 1)}>
                See Records
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { User };
