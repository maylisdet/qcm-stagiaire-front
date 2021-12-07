import { useState } from 'react';
import { Stack, TextField, Button, Modal, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const AddAnswerModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen(!open);

  const history = useHistory();

  const handleValueChange = (prop) => (event) => {};

  const createAnswer = () => {
    //Add theme + reload themes from back
    setOpen(false);
    history.push(props.initial_page);
  };

  return (
    <Stack>
      <Button variant="outlined" size="large" onClick={() => handleChange()}>
        <AddIcon />
      </Button>
      <Modal
        open={open}
        onClose={() => {
          handleChange();
        }}
      >
        <Stack className="theme_modal" direction="column" alignItems="center" justifyContent="space-around" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Answer"
            variant="outlined"
            onChange={() => handleValueChange('new_theme')}
            style={{ width: '100%' }}
          />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="is correct" />
          </FormGroup>
          <Button variant="contained" onClick={() => createAnswer()}>
            Add Answer
          </Button>
        </Stack>
      </Modal>
    </Stack>
  );
};

export { AddAnswerModal };
