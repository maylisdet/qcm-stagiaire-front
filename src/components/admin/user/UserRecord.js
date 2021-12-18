import { useState, useEffect } from 'react';
import { Container, Stack, LinearProgress, Alert, AlertTitle, Button } from '@mui/material';
import Search from '@mui/icons-material/Search';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';

import UserService from 'services/UserService';

import { toTraineeRecordFromAdmin } from 'utils/RouteUtils';
import { tableOptions } from 'utils/TableUtils';

const UserRecord = (props) => {
  /*************************/
  /******** React Hooks ******/
  /***********************/
  const user = props.user;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [records, setRecords] = useState([]);
  const history = useHistory();

  /*************************/
  /******** API Call ******/
  /***********************/
  useEffect(() => {
    const successCallback = (data) => {
      setRecords(data);
      setIsLoaded(true);
    };

    const errorCallback = () => {
      setIsLoaded(true);
      setError(true);
    };

    UserService.getRecords(user.id, successCallback, errorCallback);
  }, [user.id]);

  const columns = [
    {
      name: 'quiz.label',
      label: 'Quiz Name',
    },
    {
      name: 'quiz.theme.label',
      label: 'Theme',
    },
    {
      name: 'score',
      label: 'Score',
    },
    {
      name: 'ranking.durationOfBestScore',
      label: 'Best Score of the quizz',
      options: {
        setCellProps: () => ({ style: { minWidth: '150px' } }),
      },
    },
    {
      name: 'ranking.scoreRank',
      label: 'Rank',
    },
    {
      name: 'id',
      label: 'Details',
      options: {
        customBodyRender: (id) => {
          return (
            <Button onClick={() => toTraineeRecordFromAdmin(history, user.id, id)}>
              <Search />
            </Button>
          );
        },
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
      <>
        <Container alignitems="center">
          <Stack direction="column" spacing={2} mt={2}>
            <MUIDataTable title={'Records'} data={records} columns={columns} options={tableOptions} />
          </Stack>
        </Container>
      </>
    );
  }
};

export { UserRecord };
