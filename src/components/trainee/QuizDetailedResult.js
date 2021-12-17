import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Alert, AlertTitle, Container, LinearProgress, Stack, Typography } from '@mui/material';
import { Header } from 'components/header/Header';
import { AnswerDetailed } from 'components/trainee/AnswersDetailed';

import 'styles/answer.css';

import { QuizResume } from 'components/trainee/QuizResume';
import RecordService from 'services/RecordService';

const QuizDetailedResult = () => {
  const params = useParams();
  const [record, setRecord] = useState([]);
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
      <Alert severity="error">
        <AlertTitle>Erreur de chargement des données</AlertTitle>
        Les données n'ont pas pu être chargée.
      </Alert>
    );
  } else if (!isLoaded) {
    return <LinearProgress />;
  } else {
    return (
      <>
        <Container maxWidth="md" justifyContent="center" alignitems="center">
          <Stack direction="column" spacing={4} mt={2} mb={4}>
            <Header />
            <QuizResume record={record} />
          </Stack>
          <Stack alignItems="center" mb={5}>
            <Typography variant="h3">Your answers</Typography>
          </Stack>
          <Stack direction="column" spacing={10} mb={10}>
            {record.quiz.questions.map((question) => {
              return <AnswerDetailed question={question} traineeAnswers={record.answers} />;
            })}
          </Stack>
        </Container>
      </>
    );
  }
};

export { QuizDetailedResult };
