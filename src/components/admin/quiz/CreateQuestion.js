import { useState, useCallback } from 'react';
import { TextField, Container, Typography, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useHistory, useParams } from 'react-router-dom';
import 'styles/answer.css';

import { AddAnswerModal } from 'components/admin/quiz/AddAnswerModal';
import { EditAnswerModal } from 'components/admin/quiz/EditAnswerModal';
import { Header } from 'components/header/Header';
import QuestionService from 'services/QuestionService';

import { toQuizEditPage } from 'utils/RouteUtils';
import { notifySucess } from 'utils/NotifyUtils';

const CreateQuestion = () => {
  /*************************/
  /******** useHooks ******/
  /***********************/
  const history = useHistory();
  const params = useParams();
  const [question, setQuestion] = useState({
    postion: 0,
    label: '',
    answers: [],
    quiz_id: params.quizId,
    active: true,
  });

  const handleChange = (prop) => (event) => {
    setQuestion({ ...question, [prop]: event.target.value });
  };

  const createAnswer = (newAnswer) => {
    setQuestion({ ...question, answers: question.answers.concat([newAnswer]) });
  };

  const updateAnswer = useCallback(
    (newData, oldLabel) => {
      let answerToUpdate = [];
      answerToUpdate = question.answers.filter((answer) => answer.label === oldLabel);
      answerToUpdate[0].label = newData.label;
      answerToUpdate[0].correct = newData.correct;
      answerToUpdate[0].active = newData.active;
      setQuestion({ ...question, answers: question.answers });
    },
    [question],
  );

  /*************************/
  /******** API Call ******/
  /***********************/
  const errorCallback = (error) => {};

  const createQuestion = useCallback(() => {
    const callback = () => {
      notifySucess('Question created');
      toQuizEditPage(history, params.quizId);
    };
    QuestionService.create(question, callback, errorCallback);
  }, [question, params.quizId, history]);

  return (
    <Container maxWidth="md">
      <Stack spacing={4} mt={4} justifyContent="center" alignItems="center">
        <Header toBackPage={() => toQuizEditPage(history, params.quizId)} />
        <Typography variant="h5">Create question</Typography>
        <Stack direction="row" spacing={2} style={{ width: '100%' }}>
          <TextField
            label="Position"
            variant="standard"
            type={'number'}
            value={question.position}
            style={{ width: '200' }}
            onChange={handleChange('position')}
          />
          <TextField
            label="Title"
            fullWidth
            variant="standard"
            value={question.label}
            onChange={handleChange('label')}
          />
        </Stack>
        {question.answers.map((answer) => {
          const active = answer.active ? `correct_answer_${answer.correct}` : '';
          const className = `correct_answer ${active}`;
          return (
            <>
              <Stack direction="row" marginLeft={10}>
                <TextField
                  display="flex"
                  className={className}
                  value={answer.label}
                  style={{ borderRadius: 4, marginLeft: 100 }}
                />
                <EditAnswerModal
                  initial_page={history.location.pathname}
                  updateAnswer={updateAnswer}
                  currentAnswer={answer}
                />
              </Stack>
            </>
          );
        })}
        <Stack spacing={2}>
          <AddAnswerModal initial_page={history.location.pathname} createAnswer={createAnswer} />
          <LoadingButton variant="contained" size="large" color="success" onClick={createQuestion}>
            Save Modifications
          </LoadingButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export { CreateQuestion };
