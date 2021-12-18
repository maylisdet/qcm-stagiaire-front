import { useState, useCallback } from 'react';
import { Stack, TextField, Button, Modal, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const EditAnswerModal = ({ updateAnswer, currentAnswer }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [title, setTitle] = useState(currentAnswer.label);
  const [isActive, setIsActive] = useState(currentAnswer.active);
  const [isCorrect, setIsCorrect] = useState(currentAnswer.correct);
  const oldLabel = currentAnswer.label;

  /*************************/
  /******** Handlers ******/
  /***********************/

  const handleClose = () => {
    setOpenEdit(!openEdit);
  };
  const handleTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleIsActive = useCallback((e) => {
    setIsActive(e.target.checked);
  }, []);

  const handleIsCorrect = useCallback((e) => {
    setIsCorrect(e.target.checked);
  }, []);

  const updateAnswerModal = useCallback(() => {
    updateAnswer({ label: title, active: isActive, correct: isCorrect }, oldLabel);
    setOpenEdit(!openEdit);
  }, [updateAnswer, isActive, isCorrect, title, openEdit, oldLabel]);

  return (
    <>
      <Button onClick={() => setOpenEdit(!openEdit)}>
        <ModeEditOutlineOutlinedIcon />
      </Button>
      <Modal open={openEdit} onClose={handleClose}>
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
          <Button variant="contained" onClick={updateAnswerModal}>
            Save Modifications
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export { EditAnswerModal };
