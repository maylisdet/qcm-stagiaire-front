import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';
import { Header } from 'components/header/Header';

const User = () => {
  const history = useHistory();

  return (
    <>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Button
            variant="contained"
            onClick={({ id = 1 }) => {
              history.push(`/trainee/${id}/quizzes`);
            }}
          >
            See quizzes
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              history.push('/trainee/quizzes/records');
            }}
          >
            {' '}
            Results{' '}
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export { User };
