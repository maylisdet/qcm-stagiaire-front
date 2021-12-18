import { Button, Container, Stack } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';

import { toTraineeRecords, toTraineeQuizzes } from 'utils/RouteUtils';

import { Header } from 'components/header/Header';

const User = () => {
  const history = useHistory();
  const params = useParams();

  return (
    <>
      <Container maxWidth="md">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Stack alignItems="center">
            <Stack width="300px" spacing={2} mt={2}>
              <Button variant="contained" onClick={() => toTraineeQuizzes(history, params.traineeId)}>
                See quizzes
              </Button>
              <Button variant="contained" onClick={() => toTraineeRecords(history, params.traineeId)}>
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
