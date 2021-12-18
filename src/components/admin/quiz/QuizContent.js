/* eslint-disable no-restricted-globals */
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
import { LoadingButton } from '@mui/lab';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { CreateThemeModal } from 'components/admin/quiz/CreateThemeModal';

import { toQuestionEdit, toCreateQuestion, toQuizzesManagementPage, toQuizEditPage } from 'utils/RouteUtils';
import { notifyError, notifySucess } from 'utils/NotifyUtils';

import ThemeService from 'services/ThemeService';
import QuizService from 'services/QuizService';
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
  const history = useHistory();
  const [isActive, setIsActive] = useState(quiz.active);
  const [toogleLabel, setToogleLabel] = useState(isActive ? 'Active Quiz' : 'Inactive Quiz');
  const [updateQuestionLoading, setUpdateQuestionLoading] = useState(false);

  /*************************/
  /******** Handlers ******/
  /***********************/
  const handleChange = (prop) => (event) => {
    setQuiz({ ...quiz, [prop]: event.target.value });
  };

  const handleThemeChange = (event) => {
    let newTheme = themes.filter((theme) => theme.id === event.target.value)[0];
    setCurrentTheme(newTheme);
    setQuiz({ ...quiz, theme: { ...quiz.theme, id: newTheme.id, label: newTheme.label } });
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
      setIsLoaded(true);
    };
    ThemeService.index(getThemesSuccessCallback, getThemesErrorCallback);
  }, [quiz.questions]);

  const updateThemes = (newTheme) => {
    setThemes(themes.concat([newTheme]));
    let newQuiz = quiz;
    newQuiz.theme = newTheme;
    setCurrentTheme(newTheme);
    setQuiz({ ...quiz, theme: { ...quiz.theme, id: newTheme.id, label: newTheme.label } });
  };

  const saveQuiz = useCallback(() => {
    setUpdateQuestionLoading(true);
    const updateCallback = () => {
      notifySucess('Quiz well updated');
      setUpdateQuestionLoading(false);
      toQuizzesManagementPage(history);
    };
    const updateErrorCallback = () => {
      notifyError('Quiz not updated');
      setUpdateQuestionLoading(false);
    };
    quiz.questions.forEach((question) =>
      question.answers.forEach((answer) => {
        delete answer.question_id;
      }),
    );
    QuizService.patch_update(quiz.id, quiz, updateCallback, updateErrorCallback);
  }, [quiz, history]);

  /*************************/
  /***** Other Methods ****/
  /***********************/
  const changeActiveLabel = () => {
    setIsActive(!isActive);
    setQuiz({ ...quiz, active: !isActive });
    setToogleLabel(!isActive ? 'Active Quiz' : 'Inactive Quiz');
    notifySucess('Active status changed');
  };

  const upwardPosition = useCallback((question) => {
    const updateCallback = () => {
      notifySucess('Position changed');
      setUpdateQuestionLoading(false);
    };
    const updateErrorCallback = () => {
      notifyError("You can't upward this position");
    };
    question.answers.forEach((answer) => {
      delete answer.question_id;
    });

    let newPosition = question.position - 1;
    QuestionService.patch_update(question.id, { position: newPosition }, updateCallback, updateErrorCallback);
  }, []);

  const downwardPosition = useCallback(
    (question) => {
      const updateCallback = (question) => {
        notifySucess('Position changed');
        setUpdateQuestionLoading(false);
        toQuizEditPage(history, question.quiz_id);
      };
      const updateErrorCallback = () => {
        notifyError("You can't downward this position");
        toQuizEditPage(history, question.quiz_id);
      };
      question.answers.forEach((answer) => {
        delete answer.question_id;
      });

      let newPosition = question.position + 1;
      QuestionService.patch_update(question.id, { position: newPosition }, updateCallback, updateErrorCallback);
    },
    [history],
  );

  const columns = [
    { field: 'position', headerName: 'Number', width: 140 },
    { field: 'label', headerName: 'Question', width: 415 },
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
            <Button onClick={() => upwardPosition(row.row)}>
              <ArrowUpwardIcon />
            </Button>
            <Button onClick={() => downwardPosition(row.row)}>
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
          <TextField label="Name" variant="standard" defaultValue={quiz.label} onChange={handleChange('label')} />
          <Stack direction="row" spacing={2}>
            <FormControl fullWidth={true}>
              <InputLabel>Theme</InputLabel>
              <Select value={currentTheme.id} label="Theme" onChange={handleThemeChange}>
                {themes.map((theme, index) => {
                  return (
                    <MenuItem key={index} value={theme.id}>
                      {theme.label}
                    </MenuItem>
                  );
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
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={quiz.questions.filter((question) => question.active)}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  style={{ width: '100%' }}
                  sortModel={[
                    {
                      field: 'position',
                      sort: 'asc',
                    },
                  ]}
                />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <Typography fontWeight="bold">Inactive questions</Typography>
              <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={quiz.questions.filter((question) => !question.active)}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  style={{ width: '100%' }}
                  sortModel={[
                    {
                      field: 'position',
                      sort: 'asc',
                    },
                  ]}
                />
              </div>
            </div>
            <Button variant="outlined" size="large" onClick={() => toCreateQuestion(history, quiz.id)}>
              <AddIcon />
              Add Question
            </Button>
            <LoadingButton loading={updateQuestionLoading} variant="contained" size="large" onClick={saveQuiz}>
              Save Quizz
            </LoadingButton>
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { QuizContent };
