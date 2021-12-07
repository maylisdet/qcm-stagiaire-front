import { Container, Stack, TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { Header } from 'components/header/Header';

const CreateUser = () => {
  const history = useHistory();

  const toUsersManagementPage = () => {
    const url = '/admin/users';
    history.push(url);
  };

  return (
    <Container maxWidth="md">
      <Stack spacing={2} mt={2}>
        <Header />
        <Stack alignItems="center">
          <Stack width="600px" spacing={2} mt={2}>
            <TextField id="outlined-basic" label="Firstname" variant="outlined" required />
            <TextField id="outlined-basic" label="Lastname" variant="outlined" required />
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required />
            {/* pattern for type="tel" not tested yet but should work */}
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type="tel"
              pattern="[0-9]{10}"
              required
            />
            <TextField id="outlined-basic" label="Company" variant="outlined" required />
            <Button variant="contained" onClick={toUsersManagementPage}>
              Create Profile
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export { CreateUser };
