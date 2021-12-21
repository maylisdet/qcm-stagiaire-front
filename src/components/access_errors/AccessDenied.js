import { Button, Container, Stack, AlertTitle, Alert } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { Header } from 'components/header/Header';
import { Emoji } from 'components/Emoji';

const AccesDenied = () => {
  const history = useHistory();
  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={2} mt={2}>
        <Header toBackPage={() => history.goBack()} />
        <Stack alignItems="center" spacing={2} mt={2}>
          <Alert severity="error">
            <AlertTitle>
              <Emoji symbol="❌" lable="cross_mark" marginRight="5" />
              Sorry but you don't have acces to this page
              <Emoji symbol="❌" lable="cross_mark" marginLeft="5" />
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

export { AccesDenied };
