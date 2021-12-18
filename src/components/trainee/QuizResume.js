import { Alert, AlertTitle, Stack, Typography } from '@mui/material';

import { useCallback } from 'react';

const QuizResume = ({ record }) => {
  const showTime = useCallback(() => {
    return new Date(record.duration * 1000).toISOString().substr(11, 8);
  }, [record]);

  return (
    <>
      <Stack alignItems="center">
        <Typography variant="h4" gutterBottom component="div">
          Quiz Results
        </Typography>
        <hr style={{ width: '100%' }} />
      </Stack>
      <Stack direction="column" spacing={5} mt={2}>
        <AlertResult record={record} />
        <Stack direction="row" spacing={5}>
          <Typography component="div" variant="h6">
            Quiz : <em>{record.quiz.label}</em>
          </Typography>
          <Typography component="div" variant="h6">
            Theme : <em>{record.quiz.theme.label}</em>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={5}>
          <Typography component="div" variant="h6">
            Duration : <em>{showTime()}</em>
          </Typography>
        </Stack>
      </Stack>
      <hr />
    </>
  );
};

const AlertResult = ({ record }) => {
  if (record.score >= record.answers.length / 2) {
    return (
      <Alert icon={false}>
        <AlertTitle>
          <h2>Félicitations ! </h2>
        </AlertTitle>
        <h4>
          Vous avez plus obtenu un score de : <em>{record.score}</em> sur {record.answers.length}
        </h4>
      </Alert>
    );
  } else {
    return (
      <Alert icon={false} color="warning">
        <AlertTitle>
          <h2>Résultats insuffisant </h2>
        </AlertTitle>
        <h4>
          Vous avez plus obtenu un score de : <em>{record.score}</em> sur {record.answers.length}
        </h4>
      </Alert>
    );
  }
};

export { QuizResume };
