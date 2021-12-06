import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Stack, TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import 'styles/themes.css';
import { DeleteButton } from 'components/DeleteButton';
import { CreateThemeModal } from 'components/admin/quiz/CreateThemeModal';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const QuizContent = () => {
  const history = useHistory();
  //Needs call API to get quiz detail
  const [values, setValues] = useState({
    name: '',
    theme: '',
    new_theme: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const toQuestionEdit = (quiz_id, question_id) => {
    const url = `/admin/quiz/${quiz_id}/question/${question_id}/edit`;
    history.push(url);
  };

  const addOneToQuestionShowNumber = (row_id) => {
    console.log(row_id);
  };

  const minusOneToQuestionShowNumber = (row_id) => {
    console.log(row_id);
  };

  const columns = [
    { field: 'show_number', headerName: 'Number', width: 50 },
    { field: 'title', headerName: 'Question', width: 350 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 200,
      renderCell: (row) => {
        return (
          <>
            <Button onClick={(quizz_id, question_id) => toQuestionEdit(2, 3)}>
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

  const rows = [
    { id: 1, show_number: 1, title: 'Quel est le hook le plus utilisé en React ?' },
    { id: 23, show_number: 10, title: 'Comment définir une constante?' },
    { id: 3, show_number: 30, title: 'Quelle est la différence entre A et B' },
    { id: 4, show_number: 4, title: 'Qui a inventé React' },
    { id: 5, show_number: 5, title: 'Quelle est la différence entre A et B' },
  ];

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
    <Container maxWidth="md" direction="column">
      <Stack spacing={6} mt={4}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={values.name}
          onChange={handleChange('name')}
        />
        <Stack direction="row" spacing={2}>
          <p>Theme</p>
          <FormControl fullWidth={true}>
            <InputLabel>Theme</InputLabel>
            <Select value={values.theme} label="Theme" onChange={handleChange('theme')}>
              {themes.map((theme) => {
                return <MenuItem value={theme.label}>{theme.label}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <CreateThemeModal initial_page={history.location.pathname} />
        </Stack>
        <Stack direction="column" spacing={2} style={{ height: 450, alignItems: 'center' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            sortModel={[{ field: 'show_number', sort: 'asc' }]}
            style={{ width: '100%' }}
          />
          <Button variant="outlined" size="large">
            <AddIcon />
            Add Question
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export { QuizContent };
