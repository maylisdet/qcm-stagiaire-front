import { useState, useCallback } from 'react';
import { Stack, TextField, Button, Modal, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';

import AnswerService from 'services/AnswerService';

const AddAnswerModal = ({ updateAnswers, question_id }) => {
  /*************************/
  /******** Handlers ******/
  /***********************/
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState({
    label: '',
    position: 0,
    correct: true,
    question_id: question_id,
  });
  const [loading, setLoading] = useState(false);

  /*************************/
  /******** Handlers ******/
  /***********************/
  const handleAnswer = (prop) => (event) => {
    setAnswer({ ...answer, [prop]: event.target.value });
  };
  const handleChange = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  /*************************/
  /******** API Call ******/
  /***********************/
  const errorCallback = (error) => {
    console.error(error);
  };

  const createAnswer = useCallback(() => {
    const callback = (answer) => {
      updateAnswers(answer);
      setLoading(false);
      setOpen(false);
    };
    console.log(answer);
    AnswerService.post(answer, callback, errorCallback);
  }, [answer, updateAnswers]);

  return (
    <Stack>
      <Button variant="outlined" size="large" onClick={handleChange}>
        <AddIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Stack className="theme_modal" direction="column" alignItems="center" justifyContent="space-around" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Answer"
            variant="outlined"
            onChange={handleAnswer('label')}
            style={{ width: '100%' }}
          />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="correct" />
          </FormGroup>
          <LoadingButton variant="contained" onClick={createAnswer} loading={loading}>
            Add Anwser
          </LoadingButton>
        </Stack>
      </Modal>
    </Stack>
  );
};

export { AddAnswerModal };
