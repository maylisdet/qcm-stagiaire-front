import { Button, Container, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Header } from 'components/header/Header';

const Admin = () => {
  const history = useHistory();

  return (
    <>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Button
            variant="contained"
            onClick={() => {
              history.push('/admin/users');
            }}
          >
            User Management
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              history.push('/admin/quizzes');
            }}
          >
            Quizzes Management
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export { Admin };
