import { useState, useEffect, useCallback } from 'react';
import {
  TextField,
  Container,
  Typography,
  Stack,
  LinearProgress,
  AlertTitle,
  Alert,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import 'styles/answer.css';
import { LoadingButton } from '@mui/lab';

import { AddAnswerModal } from 'components/admin/quiz/AddAnswerModal';
import { Header } from 'components/header/Header';
import { EditAnswerModal } from 'components/admin/quiz/EditAnswerModal';

import QuestionService from 'services/QuestionService';
import { toQuizEditPage } from 'utils/RouteUtils';
import { notifyError, notifySucess } from 'utils/NotifyUtils';

const QuestionEdit = () => {
  /*************************/
  /******** useHooks ******/
  /***********************/
  const history = useHistory();
  const params = useParams();
  const [question, setQuestion] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [toogleLabel, setToogleLabel] = useState('active');
  const [loading, setLoading] = useState(false);

  /*************************/
  /******** API Call ******/
  /***********************/

  const updateQuestion = useCallback(() => {
    const callback = () => {
      setLoading(false);
      notifySucess('Question updated');
      toQuizEditPage(history, params.quizId);
    };

    const errorCallback = (error) => {
      setLoading(false);
      notifyError('There was a problem, your question is not updated');
    };
    question.answers.forEach((answer) => {
      delete answer.question_id;
    });
    QuestionService.update(params.questionId, question, callback, errorCallback);
  }, [history, question, params.quizId, params.questionId]);

  const errorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    const successCallback = (question) => {
      setQuestion(question);
      setIsActive(question.active);
      setToogleLabel(question.active ? 'Active Question' : 'Inactive Question');
      setIsLoaded(true);
    };

    QuestionService.get(params.questionId, successCallback, errorCallback);
  }, [params.questionId]);

  /*************************/
  /******** Methods ******/
  /***********************/
  const handleChange = (prop) => (event) => {
    setQuestion({ ...question, [prop]: event.target.value });
  };

  const handlePostion = (prop) => (event) => {
    setQuestion({ ...question, position: parseInt(event.target.value) });
  };

  const createAnswer = (newAnswer) => {
    let answers = question.answers ? question.answers.concat([newAnswer]) : newAnswer;
    setQuestion({ ...question, answers: answers });
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

  // const deleteAnswer = useCallback(
  //   (answer, answers) => {
  //     let newAnswers;
  //     newAnswers = answers.filter((a) => a.label !== answer.label);
  //     setQuestion({ ...question, answers: newAnswers });
  //   },
  //   [question],
  // );

  const changeActiveLabel = () => {
    setIsActive(!isActive);
    setQuestion({ ...question, active: !isActive });
    setToogleLabel(!isActive ? 'Active Question' : 'Inactive Question');
    notifySucess('Active status changed');
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
          <Header toBackPage={() => toQuizEditPage(history, params.quizId)} />
          <Typography variant="h5">Edit question</Typography>
          <Stack direction="row" spacing={2} style={{ width: '100%' }}>
            <TextField
              label="Position"
              variant="standard"
              type="number"
              value={question.position}
              style={{ width: '200' }}
              onChange={handlePostion('position')}
            />
            <TextField
              label="Title"
              fullWidth
              defaultValue={question.label}
              variant="standard"
              onChange={handleChange('label')}
            />
          </Stack>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={isActive} />}
              label={toogleLabel}
              onChange={changeActiveLabel}
            />
          </FormGroup>
          {question.answers &&
            question.answers.map((answer) => {
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
                    ></TextField>
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
            <AddAnswerModal
              initial_page={history.location.pathname}
              createAnswer={createAnswer}
              question_id={question.id}
            />
            <LoadingButton loading={loading} variant="contained" size="large" color="success" onClick={updateQuestion}>
              Save Modifications
            </LoadingButton>
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { QuestionEdit };
