import { useState } from 'react';
import { Button, TextField, Container, Typography, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DeleteButton } from 'components/DeleteButton';
import { useHistory } from 'react-router-dom';
import { Header } from 'components/header/Header';
import 'styles/answer.css';

const QuestionEdit = (props) => {
  const history = useHistory();

  const [values, setValues] = useState({
    title: props.title,
    theme: '',
    answers: [
      {
        label: 'Blabla',
        correct_answer: false,
      },
      {
        label: 'Rep1',
        correct_answer: true,
      },
      {
        label: 'Rep2',
        correct_answer: false,
      },
    ],
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const toQuizEditPage = (id) => {
    const url = `/admin/quizz/${id}/edit`;
    history.push(url);
  };

  return (
    <Container maxWidth="md">
      <Stack spacing={4} mt={4} justifyContent="center" alignItems="center">
        <Header />
        <Typography variant="h5">Edit question</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          fullWidth
          variant="standard"
          value={values.title}
          onChange={handleChange('title')}
        />
        {values.answers.map((answer) => {
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
          <Button variant="outlined" size="large">
            <AddIcon />
          </Button>
          <Button variant="contained" size="large" color="success" onClick={(id) => toQuizEditPage(1)}>
            Save Modifications
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export { QuestionEdit };
