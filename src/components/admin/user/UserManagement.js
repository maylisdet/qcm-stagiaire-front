import { Button, Container, Stack } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { DeleteButton } from 'components/DeleteButton';
import { Header } from 'components/header/Header';

const UserManagement = () => {
  const history = useHistory();

  const toUserIdPage = (id) => {
    const url = `/admin/users/${id}`;
    history.push(url);
  };

  const toUsersManagementPage = () => {
    const url = '/admin/users/';
    history.push(url);
  };

  const toCreateUser = () => {
    const url = '/admin/create-user';
    history.push(url);
  };

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
      name: 'Actions',
      options: {
        setCellHeaderProps: () => ({
          style: { display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse' },
        }),
        customBodyRender: () => {
          return (
            <Stack direction="row" justifyContent="center">
              <Button onClick={(id) => toUserIdPage(1)}>
                <ModeEditOutlineOutlinedIcon />
              </Button>
              <Button onClick={toUsersManagementPage}>
                <DeleteButton />
              </Button>
            </Stack>
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
      <Container maxWidth="md">
        <Stack direction="column" spacing={2} mt={2} alignItems="strech">
          <Stack direction="column" alignItems="flex-end" spacing={2}>
            <Header />
            <Button variant="contained" onClick={() => toCreateUser()}>
              New trainee
            </Button>
          </Stack>
          <MUIDataTable title={'Trainees'} data={data} columns={columns} padding="20px" />
        </Stack>
      </Container>
    </>
  );
};

export { UserManagement };
