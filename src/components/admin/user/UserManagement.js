import { useState, useEffect, useCallback } from 'react';
import { Button, Container, Stack, LinearProgress, Alert, AlertTitle } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import toast from 'react-hot-toast';

import { DeleteButton } from 'components/DeleteButton';
import { Header } from 'components/header/Header';

import UserService from 'services/UserService';
import { toUserIdPage, toUsersManagementPage, toCreateUser } from 'utils/RouteUtils';
import { tableOptions } from 'utils/TableUtils';

const UserManagement = () => {
  /*************************/
  /******** React Hooks ******/
  /***********************/
  const history = useHistory();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  /*************************/
  /******** API Call ******/
  /***********************/
  const successCallback = (response) => {
    setIsLoaded(true);
    setUsers(response);
  };

  const errorCallback = () => {
    setIsLoaded(true);
    setError(true);
  };

  const deleteUser = useCallback(
    (userId) => {
      const notify = () => toast('User deleted');
      const callback = () => {
        notify();
        setUsers(users.filter((user) => user.id !== userId));
      };
      UserService.delete(userId, callback, errorCallback);
    },
    [users],
  );

  useEffect(() => {
    UserService.getTrainees(successCallback, errorCallback);
  }, []);

  const columns = [
    {
      name: 'firstname',
      label: 'First Name',
    },
    {
      name: 'lastname',
      label: 'Last Name',
    },
    {
      name: 'company',
      label: 'Company',
    },
    {
      name: 'id',
      label: 'Actions',
      options: {
        setCellHeaderProps: () => ({
          style: { display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse' },
        }),
        customBodyRender: (value) => {
          return (
            <Stack direction="row" justifyContent="center">
              <Button onClick={() => toUserIdPage(history, value)}>
                <ModeEditOutlineOutlinedIcon />
              </Button>
              <Button onClick={() => toUsersManagementPage(history)}>
                <DeleteButton onClick={() => deleteUser(value)} />
              </Button>
            </Stack>
          );
        },
      },
    },
  ];

  if (error) {
    return (
      <Alert color="error">
        <AlertTitle>Erreur de chargement des données</AlertTitle>
        Les données n'ont pas pu être chargée.
      </Alert>
    );
  } else if (!isLoaded) {
    return <LinearProgress />;
  } else {
    return (
      <>
        <Container maxWidth="md">
          <Stack direction="column" spacing={2} mt={2} alignItems="strech">
            <Stack direction="column" alignItems="flex-end" spacing={2}>
              <Header />
              <Button variant="contained" onClick={() => toCreateUser(history)}>
                New trainee
              </Button>
            </Stack>
            <MUIDataTable title={'Trainees'} data={users} columns={columns} options={tableOptions} padding="20px" />
          </Stack>
        </Container>
      </>
    );
  }
};

export { UserManagement };
