import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  LinearProgress,
  Alert,
  AlertTitle,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import 'styles/themes.css';

import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { CreateThemeModal } from 'components/admin/quiz/CreateThemeModal';

import ThemeService from 'services/ThemeService';
import { toQuestionEdit, toCreateQuestion } from 'utils/RouteUtils';
import QuestionService from 'services/QuestionService';

const QuizContent = (props) => {
  /*************************/
  /******** UseState ******/
  /***********************/
  const [quiz, setQuiz] = useState(props.quiz);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(quiz.theme.id);
  const [themes, setThemes] = useState([]);
  const [values, setValues] = useState({
    name: '',
    theme: '',
    new_theme: '',
  });
  const history = useHistory();
  const [isActive, setIsActive] = useState(quiz.active);
  const [toogleLabel, setToogleLabel] = useState(isActive ? 'Active Quiz' : 'Inactive Quiz');

  /*************************/
  /******** Handlers ******/
  /***********************/
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  /*************************/
  /******** API Call ******/
  /***********************/
  const getThemesErrorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    const getThemesSuccessCallback = (themes) => {
      setThemes(themes);
      setCurrentTheme(quiz.theme.id);
      setIsLoaded(true);
    };
    ThemeService.index(getThemesSuccessCallback, getThemesErrorCallback);
  }, [quiz.questions, quiz.theme]);

  const updateThemes = (newTheme) => {
    setThemes(themes.concat([newTheme]));
    let newQuiz = quiz;
    newQuiz.theme = newTheme;
    setQuiz(newQuiz);
    setCurrentTheme(newTheme.id);
  };

  const saveQuiz = useCallback(() => {
    //TODO : PUT du Quiz
    // QuestionService update
  }, []);

  /*************************/
  /***** Other Methods ****/
  /***********************/
  const changeActiveLabel = () => {
    //TODO : Toast on change
    setIsActive(!isActive);
    setToogleLabel(!isActive ? 'Active Quiz' : 'Inactive Quiz');
  };

  const addOneToQuestionShowNumber = (row_id) => {
    console.log(row_id);
  };

  const minusOneToQuestionShowNumber = (row_id) => {
    console.log(row_id);
  };

  const columns = [
    { field: 'position', headerName: 'Number', width: 100 },
    { field: 'label', headerName: 'Question', width: 455 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 200,
      renderCell: (row) => {
        return (
          <>
            <Button onClick={() => toQuestionEdit(history, quiz.id, row.id)}>
              <ModeEditOutlineOutlinedIcon />
            </Button>
            <Button onClick={() => addOneToQuestionShowNumber(row.id)}>
              <ArrowUpwardIcon />
            </Button>
            <Button onClick={() => minusOneToQuestionShowNumber(row.id)}>
              <ArrowDownwardIcon />
            </Button>
          </>
        );
      },
    },
  ];

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
      <Container>
        <Stack spacing={6} mt={4}>
          <TextField label="Name" variant="standard" value={quiz.label} onChange={handleChange('name')} />
          <Stack direction="row" spacing={2}>
            <FormControl fullWidth={true}>
              <InputLabel>Theme</InputLabel>
              <Select
                value={currentTheme}
                label="Theme"
                onChange={(event) => {
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
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={isActive} />}
              label={toogleLabel}
              onChange={changeActiveLabel}
            />
          </FormGroup>
          <Stack spacing={5} style={{ alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
              <Typography fontWeight="bold">Active questions</Typography>
              <div style={{ height: 450, width: '100%' }}>
                <DataGrid
                  rows={quiz.questions.filter((question) => question.active)}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <Typography fontWeight="bold">Inactive questions</Typography>
              <div style={{ height: 450, width: '100%' }}>
                <DataGrid
                  rows={quiz.questions.filter((question) => !question.active)}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <Button variant="outlined" size="large" onClick={() => toCreateQuestion(history, quiz.id)}>
              <AddIcon />
              Add Question
            </Button>
            <Button variant="contained" size="large" onClick={() => toCreateQuestion(history, quiz.id)}>
              Save Quizz
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { QuizContent };
