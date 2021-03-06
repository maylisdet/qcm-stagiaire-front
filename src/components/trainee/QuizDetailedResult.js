import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Alert, AlertTitle, Container, LinearProgress, Stack, Typography } from '@mui/material';
import { Header } from 'components/header/Header';
import { AnswerDetailed } from 'components/trainee/AnswersDetailed';

import 'styles/answer.css';

import { QuizResume } from 'components/trainee/QuizResume';
import RecordService from 'services/RecordService';
import { toTraineeQuizzes, toUserIdPage } from 'utils/RouteUtils';

const QuizDetailedResult = () => {
  const params = useParams();
  const history = useHistory();
  const [record, setRecord] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));

  const [activeQuestions, setActiveQuestions] = useState();

  const toBackPage = () => {
    isAdmin ? toUserIdPage(history, record.user.id) : toTraineeQuizzes(history, record.user.id);
  };
  useEffect(() => {
    const successCallback = (record) => {
      setRecord(record);
      setActiveQuestions(record.quiz.questions.filter((question) => question.active));
      setIsLoaded(true);
    };

    const errorCallback = () => {
      setIsLoaded(true);
      setError(true);
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
    console.log(isAdmin);
    return (
      <>
        <Container maxWidth="md" justifyContent="center" alignitems="center">
          <Stack direction="column" spacing={4} mt={2} mb={4}>
            <Header toBackPage={toBackPage} />
            <QuizResume record={record} />
          </Stack>
          <Stack alignItems="center" mb={5}>
            <Typography variant="h4">{isAdmin ? "Trainee's answers" : 'Your answers'}</Typography>
          </Stack>
          <Stack direction="column" spacing={10} mb={10}>
            {activeQuestions.map((question) => {
              return <AnswerDetailed question={question} traineeAnswers={record.answers} />;
            })}
          </Stack>
        </Container>
      </>
    );
  }
};

export { QuizDetailedResult };
