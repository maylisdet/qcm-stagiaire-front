import { Stack, Typography, Box } from '@mui/material';
import { red } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const AnswerDetailed = ({ question, traineeAnswers }) => {
  let activeAnswers = question.answers.filter((answer) => answer.active === true);

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Typography variant="h5">{question.label}</Typography>
      <Stack direction="column">
        <Stack spacing={2}>
          {activeAnswers.map((answer) => {
            const className = `correct_answer correct_answer_${answer.correct}`;
            return (
              <>
                <Stack direction="row">
                  <Box
                    display="flex"
                    className={className}
                    style={{ borderRadius: 15 }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {traineeAnswers.filter((traineeAnswer) => traineeAnswer.id === answer.id).length > 0 &&
                      (answer.correct ? <CheckIcon color="primary" /> : <CloseIcon sx={{ color: red[500] }} />)}
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
};

export { AnswerDetailed };
