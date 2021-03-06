import { useState, useCallback } from 'react';
import { Stack, TextField, Modal, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

const AddAnswerModal = ({ createAnswer, question_id = null }) => {
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);

  /*************************/
  /******** Handlers ******/
  /***********************/
  const handleClose = useCallback(() => {
    setOpen(!open);
    setTitle('');
    setIsCorrect(false);
    setIsActive(true);
  }, [open]);

  const handleTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleIsActive = useCallback((e) => {
    setIsActive(e.target.checked);
  }, []);

  const handleIsCorrect = useCallback((e) => {
    setIsCorrect(e.target.checked);
  }, []);

  const sendAnswerData = useCallback(() => {
    createAnswer({ label: title, active: isActive, correct: isCorrect });
    setOpen(!open);
    setTitle('');
    setIsCorrect(false);
    setIsActive(true);
    setOpen(false);
  }, [createAnswer, isActive, isCorrect, title, open]);

  return (
    <Stack>
      <Button variant="outlined" size="large" onClick={() => setOpen(!open)}>
        Add Answer
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Stack className="theme_modal" direction="column" alignItems="center" justifyContent="space-around" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Answer"
            variant="outlined"
            onChange={handleTitle}
            style={{ width: '100%' }}
            value={title}
          />
          <FormGroup>
            <Stack direction="row" spacing={4}>
              <FormControlLabel control={<Checkbox checked={isCorrect} onClick={handleIsCorrect} />} label="correct" />
              <FormControlLabel control={<Checkbox checked={isActive} onClick={handleIsActive} />} label="active" />
            </Stack>
          </FormGroup>
          <Button variant="contained" onClick={sendAnswerData}>
            Add Anwser
          </Button>
        </Stack>
      </Modal>
    </Stack>
  );
};

export { AddAnswerModal };
