import { Button, Container, Stack } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';

import { toTraineeRecords, toTraineeQuizzes } from 'utils/RouteUtils';
import { Header } from 'components/header/Header';
import { Emoji } from 'components/Emoji';

const User = () => {
  const history = useHistory();
  const params = useParams();

  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={2} mt={2}>
        <Header />
        <Stack alignItems="center">
          <Stack width="300px" spacing={2} mt={2}>
            <Button variant="contained" onClick={() => toTraineeQuizzes(history, params.traineeId)}>
              See quizzes
              <Emoji symbol="✍🏻" label="hand_with_pen" marginLeft="5" />
            </Button>
            <Button variant="contained" onClick={() => toTraineeRecords(history, params.traineeId)}>
              See Records
              <Emoji symbol="🔎" label="magnifying_glass_tilted_right" marginLeft="5" />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export { User };
