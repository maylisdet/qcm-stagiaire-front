import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import { Header } from 'components/header/Header';

const UserManagement = () => {
  const history = useHistory();
  const columns = [
    {
      name: 'First Name',
    },
    {
      name: 'Last Name',
    },
    {
      name: 'Company',
    },
    {
      name: 'Action',
      options: {
        customBodyRender: () => {
          return (
            <Button
              onClick={({ id = 1 }) => {
                history.push(`/admin/users/${id}`);
              }}
            >
              See profile
            </Button>
          );
        },
      },
    },
  ];

  const data = [
    ['Michel', 'Dupont', 'Les bronzés font du ski'],
    ['Pierre', 'Durant', 'UTC'],
  ];
  return (
    <>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={2} mt={2} alignItems={'strech'}>
          <Stack direction="column" alignItems={'flex-end'} spacing={2}>
            <Header />
            <Button
              variant="contained"
              onClick={() => {
                history.push('/admin/create-user');
              }}
            >
              {' '}
              New trainee{' '}
            </Button>
          </Stack>
          <MUIDataTable title={'Trainees'} data={data} columns={columns} />
        </Stack>
      </Container>
    </>
  );
};

export { UserManagement };
