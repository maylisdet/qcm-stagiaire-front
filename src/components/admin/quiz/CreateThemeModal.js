import { useState } from 'react';
import { Stack, TextField, Button, Modal } from '@mui/material';
import { useHistory } from 'react-router-dom';

const CreateThemeModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen(!open);

  const history = useHistory();

  const handleValueChange = (prop) => (event) => {};

  const createTheme = () => {
    //Add theme + reload themes from back
    setOpen(false);
    console.log('ok');
    history.push(props.initial_page);
  };

  return (
    <Stack>
      <Button variant="contained" onClick={() => handleChange()}>
        New Theme
      </Button>
      <Modal open={open} onClose={() => handleChange()}>
        <Stack className="theme_modal" direction="row" alignItems="center" justifyContent="space-around">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={() => handleValueChange('new_theme')}
          />
          <Button variant="contained" onClick={() => createTheme()}>
            Add Theme
          </Button>
        </Stack>
      </Modal>
    </Stack>
  );
};

export { CreateThemeModal };
