import { Button, Container, Stack, AlertTitle, Alert } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { Header } from 'components/header/Header';
import { Emoji } from 'components/Emoji';

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={2} mt={2}>
        <Header toBackPage={() => history.goBack()} />
        <Stack alignItems="center" spacing={2} mt={2}>
          <Alert severity="error">
            <AlertTitle spacing={2}>
              <Emoji symbol="🥲" label="simling_face_with_tear" marginRight="5" />
              Sorry but this page does not exist
              <Emoji symbol="🥲" label="simling_face_with_tear" marginLeft="5" />
            </AlertTitle>
          </Alert>
          <Button variant="contained" onClick={() => history.goBack()}>
            Go to previous page
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export { PageNotFound };
