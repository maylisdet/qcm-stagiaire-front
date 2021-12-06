import { Container, Stack, TextField, Button, FormControl, InputLabel, Select, MenuItem, Modal } from '@mui/material';
import { Header } from 'components/header/Header';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const CreateQuiz = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toQuizzesManagementPage = () => {
    const url = '/admin/quizzes';
    history.push(url);
  };

  const [values, setValues] = useState({
    name: '',
    theme: '',
    new_theme: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const createTheme = () => {
    //Add theme + reload themes from back
    console.log(values);
    setOpen(false);
  };

  const themes = [
    {
      id: '1',
      label: 'React',
    },
    {
      id: '2',
      label: 'Ruby',
    },
    {
      id: '3',
      label: 'POO',
    },
  ];

  return (
    <Container maxWidth="md">
      <Stack spacing={2} mt={2}>
        <Header />
        <Stack alignItems={'center'}>
          <Stack width="600px" spacing={2} mt={2}>
            <TextField id="outlined-basic" label="Quiz Name" variant="outlined" required />
            <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
              <FormControl fullWidth={true}>
                <InputLabel required>Theme</InputLabel>
                <Select value={values.theme} label="Theme" onChange={handleChange('theme')}>
                  {themes.map((theme) => {
                    return <MenuItem value={theme.label}>{theme.label}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <Button variant="contained" onClick={handleOpen}>
                New Theme
              </Button>
              <Modal open={open} onClose={handleClose}>
                <Stack className="theme_modal" direction="row" alignItems="center" justifyContent="space-around">
                  <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleChange('new_theme')} />
                  <Button variant="contained" onClick={createTheme}>
                    Add Theme
                  </Button>
                </Stack>
              </Modal>
            </Stack>
            <Button variant="contained" onClick={toQuizzesManagementPage}>
              Create Quiz
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export { CreateQuiz };
