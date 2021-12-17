import { Container, Stack, Typography, Box, Alert, AlertTitle, LinearProgress } from '@mui/material';
import 'styles/answersheet.css';

import { useState } from 'react';
import { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import QuizService from 'services/QuizService';
import { useHistory, useParams } from 'react-router-dom';
import { useCallback } from 'react';

import { getNextQuestion } from 'utils/QuizUtils';
import RecordService from 'services/RecordService';
import { useMemo } from 'react';

import { toQuizFinished } from 'utils/RouteUtils';

const RecordSender = ({ recordData }) => {
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const successCallback = (data) => {
      toQuizFinished(history, params.traineeId, data.id);
    };

    const errorCallback = () => {
      console.error('Error posting records');
    };

    if (recordData.answers.length === recordData.quiz.questions.length) {
      delete recordData.quiz.questions;
      RecordService.post(recordData, successCallback, errorCallback);
    }
  }, [recordData, history, params.traineeId]);

  return <></>;
};

const QuizAnswerSheet = () => {
  const [traineeAnswers, setTraineeAnswers] = useState([]);
  const [alreadyAskedQuestions, setAlreadyAskedQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState({});
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();
  const { seconds, minutes } = useStopwatch({ autoStart: true });

  /*************************/
  /******** API Call ******/
  /***********************/
  useEffect(() => {
    const errorCallback = () => {
      setError(true);
    };

    const successCallback = (quiz) => {
      setQuiz(quiz);
      let nextQuestion = getNextQuestion(quiz, []);
      setCurrentQuestion(nextQuestion);
      setIsLoaded(true);
    };

    QuizService.get(params.quizId, successCallback, errorCallback);
  }, [params.quizId]);

  const setNextQuestion = useCallback(
    (target, currentQuestion) => {
      window.setTimeout(() => {
        target.classList.remove('answer-true');
        target.classList.remove('answer-false');
        let nextQuestion = getNextQuestion(quiz, alreadyAskedQuestions.concat([currentQuestion.id]));
        setCurrentQuestion(nextQuestion);
        setCount((c) => c + 1);
      }, 1000);
    },
    [alreadyAskedQuestions, quiz],
  );

  /*************************/
  /******** Handlers ******/
  /***********************/
  const handleClickAnswer = useCallback(
    (e, answer) => {
      //setters
      setTraineeAnswers(traineeAnswers.concat([answer]));
      setAlreadyAskedQuestion(alreadyAskedQuestions.concat([currentQuestion.id]));
      setNextQuestion(e.target, currentQuestion, answer);
      // If it's rigth we increment the score and pass the style
      if (answer.correct) {
        e.target.classList.add('answer-true');
        setScore((s) => s + 1);
      } else {
        e.target.classList.add('answer-false');
      }
    },
    [currentQuestion, alreadyAskedQuestions, traineeAnswers, setNextQuestion],
  );

  const recordData = useMemo(() => {
    return {
      score: score,
      quiz: quiz,
      user: {
        id: Number(params.traineeId),
      },
      duration: minutes * 60 + seconds,
      answers: traineeAnswers,
    };
  }, [score, quiz, minutes, seconds, params.traineeId, traineeAnswers]);

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
      <>
        <Container maxWidth="md">
          <Stack direction="column" spacing={2} mt={2}>
            <Container
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                minWidth: 300,
              }}
            >
              <div>
                <h1>{quiz.label}</h1>
              </div>
              <div>
                <h2>
                  Question {count} / {quiz.questions.length}
                  <div style={{ fontSize: '20px' }}>
                    <span>{minutes > 9 ? minutes : `0${minutes}`}</span>:
                    <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
                  </div>
                </h2>
              </div>
            </Container>

            <Stack direction="column" spacing={10}>
              <Stack direction="column" alignItems="center" spacing={2}>
                <Box className="question">
                  <Typography variant="h5">{currentQuestion.label}</Typography>
                </Box>
                <Stack direction="column" spacing={2} alignItems="center">
                  {currentQuestion.answers &&
                    currentQuestion.answers.map((answer) => {
                      return (
                        <>
                          <Stack direction="row">
                            <Box
                              display="flex"
                              onClick={(e) => handleClickAnswer(e, answer)}
                              className="answer"
                              justifyContent="center"
                              alignItems="center"
                            >
                              <h6> {answer.label} </h6>
                            </Box>
                          </Stack>
                        </>
                      );
                    })}
                </Stack>
              </Stack>
            </Stack>
            <RecordSender recordData={recordData} />
          </Stack>
        </Container>
      </>
    );
  }
};

export { QuizAnswerSheet };
