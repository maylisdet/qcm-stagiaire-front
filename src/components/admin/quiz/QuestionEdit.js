import { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography, Stack, LinearProgress, AlertTitle, Alert } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import 'styles/answer.css';

import { AddAnswerModal } from 'components/admin/quiz/AddAnswerModal';
import { Header } from 'components/header/Header';
import { DeleteButton } from 'components/DeleteButton';

import QuestionService from 'services/QuestionService';

const QuestionEdit = () => {
  const history = useHistory();
  const params = useParams();
  const [question, setQuestion] = useState([]);
  const [anwsers, setAnswers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /*************************/
  /******** API Call ******/
  /***********************/
  const successCallback = (question) => {
    setQuestion(question);
    setAnswers(question.answers);
    setIsLoaded(true);
  };

  const errorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    const successCallback = (question) => {
      setQuestion(question);
      setAnswers(question.answers);
      setIsLoaded(true);
    };
    QuestionService.get(params.questionId, successCallback, errorCallback);
  }, [params.questionId, question]);

  const updateAnswers = (newAnswer) => {
    setAnswers(anwsers ? anwsers.concat([newAnswer]) : newAnswer);
  };

  const handleChange = (prop) => (event) => {
    setQuestion({ ...question, [prop]: event.target.value });
  };

  const toQuizEditPage = (id) => {
    const url = `/admin/quiz/${id}/edit`;
    history.push(url);
  };

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
      <Container maxWidth="md">
        <Stack spacing={4} mt={4} justifyContent="center" alignItems="center">
          <Header />
          <Typography variant="h5">Edit question</Typography>
          <TextField
            label="Title"
            fullWidth
            defaultValue={question.title}
            variant="standard"
            onChange={handleChange('title')}
          />
          {question.possibleAnswers &&
            question.possibleAnswers.map((answer) => {
              const className = `correct_answer correct_answer_${answer.correct_answer}`;
              return (
                <>
                  <Stack direction="row" marginLeft={10}>
                    <TextField
                      display="flex"
                      className={className}
                      value={answer.label}
                      style={{ borderRadius: 3, marginLeft: 100 }}
                    ></TextField>
                    <DeleteButton />
                  </Stack>
                </>
              );
            })}
          <Stack spacing={2}>
            <AddAnswerModal
              initial_page={history.location.pathname}
              updateAnswers={updateAnswers}
              question_id={question.id}
            />
            <Button variant="contained" size="large" color="success" onClick={(id) => toQuizEditPage(1)}>
              Save Modifications
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { QuestionEdit };
