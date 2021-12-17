import { Alert, AlertTitle, Button, Container, Stack, LinearProgress } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';

import { Header } from 'components/header/Header';
import { useEffect, useState } from 'react';

import RecordService from 'services/RecordService';
import { QuizResume } from 'components/trainee/QuizResume';

import { toTraineeRecord } from 'utils/RouteUtils';

const QuizFinished = () => {
  const history = useHistory();
  const params = useParams();

  const [record, setRecord] = useState({});
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const errorCallback = () => {
    setIsLoaded(true);
    setError(true);
  };

  useEffect(() => {
    const successCallback = (record) => {
      setRecord(record);
      setIsLoaded(true);
    };

    RecordService.get(params.recordId, successCallback, errorCallback);
  }, [params.recordId]);

  if (error) {
    return (
      <Alert color="error">
        <AlertTitle>Erreur de chargement des données</AlertTitle>
        Les données n'ont pas pu être chargée.
      </Alert>
    );
  } else if (!isLoaded) {
    return <LinearProgress />;
  } else {
    return (
      <Container maxWidth="md">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <QuizResume record={record} />
        </Stack>
        <Stack alignItems="center" mt={3}>
          <Button variant="outlined" size="large" onClick={() => toTraineeRecord(history, record.user.id, record.id)}>
            See more details
          </Button>
        </Stack>
      </Container>
    );
  }
};

export { QuizFinished };
