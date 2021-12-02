import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Stack, TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteButton } from 'components/DeleteButton';

const QuizzContent = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: '',
    theme: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
          <Button
            onClick={({ quizz_id = 2, question_id = 3 }) => {
              history.push(`/admin/quizz/${quizz_id}/question/${question_id}/edit`);
            }}
          >
            {' '}
            Edit
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

  return (
    <Container>
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
            <InputLabel id="demo-simple-select-label">Theme</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.theme} label="Theme">
              <MenuItem value={10}>Java</MenuItem>
              <MenuItem value={20}>React</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">New Theme</Button>
        </Stack>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
        </div>
      </Stack>
    </Container>
  );
};

export { QuizzContent };
