import { useState } from 'react';
import { Stack, TextField, Modal, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import ThemeService from 'services/ThemeService';

const CreateThemeModal = ({ updateThemes }) => {
  /*************************/
  /******** Handlers ******/
  /***********************/
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('');
  const [loading, setLoading] = useState(false);

  /*************************/
  /******** Handlers ******/
  /***********************/
  const handleTheme = (event) => {
    setTheme(event.target.value);
  };
  const handleChange = () => setOpen(!open);

  const handleClose = () => setOpen(false);

  /*************************/
  /******** API Call ******/
  /***********************/
  const successCallback = (theme) => {
    updateThemes(theme);
    setLoading(false);
    setOpen(false);
  };

  const errorCallback = (error) => {
    console.error(error);
  };

  const createTheme = (event) => {
    setLoading(true);
    ThemeService.post(theme, successCallback, errorCallback);
  };

  return (
    <Stack>
      <Button variant="contained" onClick={handleChange}>
        New Theme
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Stack className="theme_modal" direction="row" alignItems="center" justifyContent="space-around">
          <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleTheme} />
          <LoadingButton variant="contained" onClick={createTheme} loading={loading}>
            Add Theme
          </LoadingButton>
        </Stack>
      </Modal>
    </Stack>
  );
};

export { CreateThemeModal };
