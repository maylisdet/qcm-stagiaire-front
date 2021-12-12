import {
  Container,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  AlertTitle,
  Alert,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import { toCreateQuestion } from 'utils/RouteUtils';

import { CreateThemeModal } from 'components/admin/quiz/CreateThemeModal';
import { Header } from 'components/header/Header';

import ThemeService from 'services/ThemeService';
import QuizService from 'services/QuizService';

const CreateQuiz = () => {
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState('');
  const [quizLabel, setQuizLabel] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /*************************/
  /******** API Call ******/
  /***********************/
  const errorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    const getThemesSuccessCallback = (themes) => {
      setThemes(themes);
      setIsLoaded(true);
    };
    ThemeService.index(getThemesSuccessCallback, errorCallback);
  }, [themes]);

  const createQuiz = useCallback(() => {
    const callback = (quiz) => {
      toCreateQuestion(history, quiz.id);
    };
    let data = { label: quizLabel, theme: { id: currentTheme } };
    QuizService.create(data, callback, errorCallback);
  }, [history, currentTheme, quizLabel]);

  const updateThemes = (newTheme) => {
    setThemes(themes.concat([newTheme]));
    setCurrentTheme(newTheme.id);
  };

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Erreur de chargement des données</AlertTitle>
        Les données n'ont pas pu être chargée.
      </Alert>
    );
  } else if (!isLoaded) {
    return <LinearProgress />;
  } else {
    return (
      <Container maxWidth="md">
        <Stack spacing={2} mt={2}>
          <Header />
          <Stack alignItems="center">
            <Stack width="600px" spacing={2} mt={2}>
              <TextField
                label="Quiz Name"
                variant="outlined"
                required
                onChange={(event) => {
                  setQuizLabel(event.target.value);
                }}
              />
              <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                <FormControl fullWidth={true}>
                  <InputLabel>Theme</InputLabel>
                  <Select
                    value={currentTheme}
                    label="Theme"
                    onChange={(event) => {
                      console.log(event.target);
                      setCurrentTheme(event.target.value);
                    }}
                  >
                    {themes.map((theme) => {
                      return <MenuItem value={theme.id}>{theme.label}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
                <CreateThemeModal initial_page={history.location.pathname} updateThemes={updateThemes} />
              </Stack>
              <LoadingButton loading={loading} variant="contained" onClick={() => createQuiz()}>
                Create Quiz
              </LoadingButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { CreateQuiz };
