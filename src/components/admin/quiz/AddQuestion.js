import { useState } from 'react';
import { Button, TextField, Container, Typography, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';
import 'styles/answer.css';

import { AddAnswerModal } from 'components/admin/quiz/AddAnswerModal';
import { Header } from 'components/header/Header';
import { DeleteButton } from 'components/DeleteButton';

const AddQuestion = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    title: '',
    theme: '',
    answers: [],
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container maxWidth="md">
      <Stack spacing={4} mt={4} justifyContent="center" alignItems="center">
        <Header />
        <Typography variant="h5">Create question</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          fullWidth
          variant="standard"
          value={values.title}
          onChange={() => handleChange('title')}
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
          <AddAnswerModal initial_page={history.location.pathname} />
          <Button variant="contained" size="large" color="success">
            Save Modifications
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export { AddQuestion };
