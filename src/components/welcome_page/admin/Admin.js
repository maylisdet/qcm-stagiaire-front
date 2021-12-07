import { Button, Container, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { Header } from 'components/header/Header';

const Admin = () => {
  const history = useHistory();

  const toUserManagement = () => {
    const url = '/admin/users';
    history.push(url);
  };

  const toQuizzesManagement = () => {
    const url = '/admin/quizzes';
    history.push(url);
  };

  return (
    <>
      <Container maxWidth="md">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Stack alignItems="center">
            <Stack width="300px" spacing={2} mt={2}>
              <Button variant="contained" onClick={() => toUserManagement()}>
                User Management
              </Button>
              <Button variant="contained" onClick={() => toQuizzesManagement()}>
                Quizzes Management
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { Admin };
