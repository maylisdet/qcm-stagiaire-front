import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Stack, TextField, FormControl, InputLabel, MenuItem, Select, Button, Modal } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import 'styles/themes.css';
import { DeleteButton } from 'components/DeleteButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const QuizzContent = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const toQuestionEdit = (quizz_id, question_id) => {
    const url = `/admin/quizz/${quizz_id}/question/${question_id}/edit`;
    history.push(url);
  };

  const columns = [
    { field: 'show_number', headerName: 'Number', width: 100 },
    { field: 'title', headerName: 'Question', width: 400 },
    {
      field: 'edit',
      headerName: 'Edit',
      with: 600,
      renderCell: () => {
        return (
          <Button onClick={(quizz_id, question_id) => toQuestionEdit(2, 3)}>
            <ModeEditOutlineOutlinedIcon />
          </Button>
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
    { id: 23, show_number: 2, title: 'Comment définir une constante?' },
    { id: 3, show_number: 3, title: 'Quelle est la différence entre A et B' },
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
    <Container maxWidth="md">
      <Stack spacing={6} mt={4}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={values.name}
          onChange={handleChange('name')}
        />
        <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
          <p>Theme</p>
          <FormControl fullWidth={true}>
            <InputLabel>Theme</InputLabel>
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
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
        </div>
      </Stack>
    </Container>
  );
};

export { QuizzContent };
