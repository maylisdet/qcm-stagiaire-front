import { Container, Stack, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import { CreateThemeModal } from 'components/admin/quiz/CreateThemeModal';
import { Header } from 'components/header/Header';

const CreateQuiz = () => {
  const history = useHistory();

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
        <Stack alignItems="center">
          <Stack width="600px" spacing={2} mt={2}>
            <TextField id="outlined-basic" label="Quiz Name" variant="outlined" required />
            <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
              <FormControl fullWidth={true}>
                <InputLabel required>Theme</InputLabel>
                <Select value={values.theme} label="Theme" onChange={() => handleChange('theme')}>
                  {themes.map((theme) => {
                    return <MenuItem value={theme.label}>{theme.label}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <CreateThemeModal initial_page={history.location.pathname} />
            </Stack>
            <Button variant="contained" onClick={() => toQuizzesManagementPage()}>
              Create Quiz
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export { CreateQuiz };
