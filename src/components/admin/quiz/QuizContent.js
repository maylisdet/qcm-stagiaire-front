import { useState, useEffect } from 'react';
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
import { toQuestionEdit } from 'utils/RouteUtils';

const QuizContent = (prop) => {
  /*************************/
  /******** UseState ******/
  /***********************/
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quiz, setQuiz] = useState(prop.quiz);
  const [themes, setThemes] = useState([]);
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
  const themesSuccessCallback = (themes) => {
    setThemes(themes);
    setIsLoaded(true);
  };

  const themesErrorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    ThemeService.index(themesSuccessCallback, themesErrorCallback);
  }, []);

  /*************************/
  /***** Other Methods ****/
  /***********************/
  const changeActiveLabel = () => {
    setIsActive(!isActive);
    setToogleLabel(isActive ? 'active' : 'inactive');
  };

  const toCreateQuestion = (quiz_id) => {
    const url = `/admin/quiz/${quiz_id}/create-question`;
    history.push(url);
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
      field: 'delete',
      headerName: 'Delete',
      renderCell: () => {
        return <DeleteButton />;
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
              <Select value={quiz.theme.id} label="Theme" onChange={handleChange('theme')}>
                {themes.map((theme) => {
                  return <MenuItem value={theme.id}>{theme.label}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <CreateThemeModal initial_page={history.location.pathname} />
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
              rows={quiz.questions}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              style={{ width: '100%' }}
            />
            <Button variant="outlined" size="large" onClick={() => toCreateQuestion(1)}>
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
