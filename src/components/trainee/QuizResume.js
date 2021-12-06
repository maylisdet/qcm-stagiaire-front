import { Stack, Typography } from '@mui/material';

const QuizResume = (quiz) => {
  console.log(quiz);
  return (
    <Stack direction="column" p="20px">
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h4" color="burlywood" fontWeight="bold">
          Quiz Result
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="baseline" spacing={2}>
        <Typography variant="h6" color="burlywood">
          Theme :
        </Typography>
        <Typography>{quiz.theme}</Typography>
      </Stack>
      <Stack direction="row" alignItems="baseline" spacing={2}>
        <Typography variant="h6" color="burlywood">
          Score :
        </Typography>
        <Typography>{quiz.record.score}</Typography>
      </Stack>
      <Stack direction="row" alignItems="baseline" spacing={2}>
        <Typography variant="h6" color="burlywood">
          Duration :
        </Typography>
        <Typography>{quiz.record.duration}</Typography>
      </Stack>
    </Stack>
  );
};

export { QuizResume };
