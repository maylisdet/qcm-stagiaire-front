import { useEffect, useState } from 'react';
import { Container, Stack, Button, LinearProgress, AlertTitle, Alert } from '@mui/material';
import Search from '@mui/icons-material/Search';
import MUIDataTable from 'mui-datatables';
import { useHistory, useParams } from 'react-router-dom';

import { toTraineeRecordFromAdmin } from 'utils/RouteUtils';
import { tableOptions } from 'utils/TableUtils';

import QuizService from 'services/QuizService';

const QuizRecords = () => {
  /*************************/
  /******** useHooks ******/
  /***********************/
  const history = useHistory();
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();

  /*************************/
  /******** API Call ******/
  /***********************/
  useEffect(() => {
    const successCallback = (data) => {
      setRecords(data);
      setIsLoaded(true);
    };

    const errorCallback = (error) => {
      setError(true);
    };
    QuizService.getRecords(params.quizId, successCallback, errorCallback);
  }, [params.quizId]);

  const columns = [
    {
      name: 'user.firstname',
      label: 'First Name',
    },
    {
      name: 'user.lastname',
      label: 'Last Name',
    },
    {
      name: 'score',
      label: 'Score',
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
            <Button onClick={() => toTraineeRecordFromAdmin(history, params.traineeId, id)}>
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
            <MUIDataTable title={'Quiz Record'} data={records} columns={columns} options={tableOptions} />
          </Stack>
        </Container>
      </>
    );
  }
};

export { QuizRecords };
