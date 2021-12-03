import { useMemo } from 'react';
import { Container, Stack, Typography, Box } from '@mui/material';
import { Header } from 'components/header/Header';
import CheckIcon from '@mui/icons-material/Check';

import CloseIcon from '@mui/icons-material/Close';
import 'styles/answer.css';

import { QuizResume } from 'components/trainee/QuizResume';

const QuizDetailledResult = () => {
  const quiz = {
    id: 4,
    label: 'Blablabla',
    theme: 'React',
    questions: [
      {
        id: 4,
        label: 'Quel est le hook le plus utilisé ?',
        show_number: 1,
        answers: [
          {
            id: 4,
            label: "hello world, i'm right",
            correct_answer: true,
          },
          {
            id: 5,
            label: "hello world, i'm false",
            correct_answer: false,
          },
          {
            id: 6,
            label: "hello world, i'm false",
            correct_answer: false,
          },
        ],
      },
      {
        id: 5,
        label: 'Quel est le hook le plus utilisé ?',
        show_number: 2,
        answers: [
          {
            id: 7,
            label: "hello world, i'm false",
            correct_answer: false,
          },
          {
            id: 8,
            label: "hello world, i'm true",
            correct_answer: true,
          },
          {
            id: 9,
            label: "hello world, i'm false",
            correct_answer: false,
          },
        ],
      },
    ],
    record: {
      id: 4,
      duration: 'tobeDefined',
      score: 17,
      rank: {
        id: 9,
        nb_respondents: 10,
        score_rank: 3 / 10,
        best_score: 20,
        duration_of_best_score: '12',
      },
    },
  };

  const question_formater = useMemo(
    () =>
      quiz.questions.map((question) => {
        const user_answers = [
          {
            answer_id: 4,
            question_id: 4,
            label: "hello world, i'm false",
            correct_answer: false,
          },
          {
            answer_id: 7,
            question_id: 5,
            label: "hello world, i'm true",
            correct_answer: true,
          },
        ];
        return (
          <Stack direction="column" alignItems="center" spacing={2}>
            <Typography variant="h5">{question.label}</Typography>
            <Stack direction="column">
              <Stack spacing={2}>
                {question.answers.map((answer) => {
                  const className = `correct_answer correct_answer_${answer.correct_answer}`;
                  return (
                    <>
                      <Stack direction="row">
                        <Box display="flex" className={className} justifyContent="center" alignItems="center">
                          {user_answers.filter((user_answer) => user_answer.answer_id === answer.id).length > 0 &&
                            (answer.correct_answer ? <CheckIcon /> : <CloseIcon />)}
                          <Typography> {answer.label} </Typography>
                        </Box>
                      </Stack>
                    </>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        );
      }),
    [quiz.questions],
  );

  return (
    <>
      <Container maxWidth="md" justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <QuizResume {...quiz} />
          <Stack direction="column" spacing={10}>
            {question_formater}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { QuizDetailledResult };
