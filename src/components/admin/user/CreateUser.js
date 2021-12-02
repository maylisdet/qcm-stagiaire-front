import { Container, Stack, TextField, Button } from '@mui/material';
import { Header } from 'components/header/Header';

const CreateUser = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} mt={2}>
        <Header />
        <TextField id="outlined-basic" label="Firstname" variant="outlined" />
        <TextField id="outlined-basic" label="Lastname" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField id="outlined-basic" label="Company" variant="outlined" />
        <Button variant="outlined">Create Profile</Button>
      </Stack>
    </Container>
  );
};

export { CreateUser };
