import { useState } from 'react';
import { 
  Button, 
  TextField, 
  Container, 
  Typography, 
  Stack, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DeleteButton } from '../../DeleteButton'
import { useHistory } from 'react-router-dom'


const QuestionEdit = (props) => {
  const history = useHistory()
  const [values, setValues] = useState({
    title: props.title,
    theme: '',
    correct_answer: {
      content: 'Blabla'
    },
    possible_answers: [
      {
        content: 'Rep 1',
      },
      {
        content: 'Rep 2',
      },
    ]
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container maxWidth='md'>
      <Stack spacing={4} mt={4}>
        <Typography variant="h5">
          Edit question
        </Typography>
        <Stack>
          <Stack spacing={6}>
            <TextField
              id="outlined-basic"
              label="Title"
              fullWidth
              variant="standard"
              value={values.title}
              onChange={handleChange('title')}
            />
            <Stack spacing={2}>
              <Typography variant="h6">Correct Answer</Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                variant="standard"
                value={values.correct_answer.content}
                onChange={handleChange("correct_answer.content")}
              />
            </Stack>
            <Stack spacing={2}>
              <Stack spacing={2} direction="row">
                <Typography variant="h6">Possible Answers</Typography>
                <IconButton variant="outlined" aria-label="add">
                  <AddIcon />
                </IconButton>
              </Stack>
              {values.possible_answers.map((answer) => {
                return (
                  <Stack direction='row'>
                    <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="standard"
                    value={answer.content}
                    onChange={handleChange('content')}/>
                    <DeleteButton/>
                  </Stack>
                )
              })}
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Button onClick= {({id= 1}) => {history.push(`/admin/quizz/${id}/edit`)}}>Save Modifications</Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export { QuestionEdit };