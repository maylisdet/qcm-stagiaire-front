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
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import 'styles/themes.css';

import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { DeleteButton } from 'components/DeleteButton';
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
  const [currentTheme, setCurrentTheme] = useState(quiz.theme);
  const [themes, setThemes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [values, setValues] = useState({
    name: '',
    theme: '',
    new_theme: '',
  });
  const history = useHistory();
  const [isActive, setIsActive] = useState();
  const [toogleLabel, setToogleLabel] = useState('active');

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
      setQuestions(quiz.questions);
      setCurrentTheme(quiz.theme);
      setIsLoaded(true);
    };
    ThemeService.index(getThemesSuccessCallback, getThemesErrorCallback);
  }, [quiz.questions, quiz.theme]);

  const deleteQuestion = useCallback(
    (questionId) => {
      const callback = () => {
        setQuestions(questions.filter((question) => question.id !== questionId));
      };
      QuestionService.delete(questionId, callback, getThemesErrorCallback);
    },
    [questions],
  );

  const updateThemes = (newTheme) => {
    setThemes(themes.concat([newTheme]));
    let newQuiz = quiz;
    newQuiz.theme = newTheme;
    setQuiz(newQuiz);
    setCurrentTheme(newTheme);
  };

  /*************************/
  /***** Other Methods ****/
  /***********************/
  const changeActiveLabel = () => {
    setIsActive(!isActive);
    setToogleLabel(isActive ? 'active' : 'inactive');
  };

  const addOneToQuestionShowNumber = (row_id) => {
    console.log(row_id);
  };

  const minusOneToQuestionShowNumber = (row_id) => {
    console.log(row_id);
  };

  const columns = [
    { field: 'position', headerName: 'Number', width: 100 },
    { field: 'title', headerName: 'Question', width: 350 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 200,
      renderCell: (row) => {
        return (
          <>
            <Button onClick={(quizz_id, question_id) => toQuestionEdit(history, 2, 3)}>
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
    {
      field: 'id',
      headerName: 'Delete',
      renderCell: (row) => {
        return <DeleteButton onClick={() => deleteQuestion(row.id)} />;
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
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={quiz.label}
            onChange={handleChange('name')}
          />
          <Stack direction="row" spacing={2}>
            <FormControl fullWidth={true}>
              <InputLabel>Theme</InputLabel>
              <Select
                value={currentTheme.id}
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
          <Stack>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label={toogleLabel}
                onChange={() => changeActiveLabel()}
              />
            </FormGroup>
          </Stack>
          <Stack direction="column" spacing={2} style={{ height: 450, alignItems: 'center' }}>
            <DataGrid
              rows={questions}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              style={{ width: '100%' }}
            />
            <Button variant="outlined" size="large" onClick={() => toCreateQuestion(history, quiz.id)}>
              <AddIcon />
              Add Question
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { QuizContent };
