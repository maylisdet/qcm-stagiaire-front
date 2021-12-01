import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';
import { Header } from 'components/header/Header';

const Admin = () => {
  const history = useHistory();

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
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
      </Grid>
    </>
  );
};

export { Admin };
