import { useState, useEffect } from 'react';
import { Container, Stack, LinearProgress, Alert, AlertTitle } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { tableOptions } from 'utils/TableUtils';

import UserService from 'services/UserService';

const UserRecord = (props) => {
  /*************************/
  /******** React Hooks ******/
  /***********************/
  const user = props.user;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [records, setRecords] = useState([]);

  /*************************/
  /******** API Call ******/
  /***********************/

  const successCallback = (response) => {
    setIsLoaded(true);
    setRecords(response);
  };

  const errorCallback = () => {
    setIsLoaded(true);
    setError(true);
  };

  useEffect(() => {
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
      name: 'ranking.duration_of_best_score',
      label: 'Best Score of the quizz',
      options: {
        setCellProps: () => ({ style: { minWidth: '150px' } }),
      },
    },
    {
      name: 'ranking.score_rank',
      label: 'Rank',
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
