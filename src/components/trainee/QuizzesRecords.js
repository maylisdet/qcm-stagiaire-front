import { Alert, AlertTitle, Container, Button, Stack, LinearProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MUIDataTable from 'mui-datatables';
import { Header } from 'components/header/Header';

import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { goToTrainee, toTraineeRecordFromTrainee } from 'utils/RouteUtils';
import UserService from 'services/UserService';
import { tableOptions } from 'utils/TableUtils';

const QuizzesRecords = () => {
  const history = useHistory();
  const params = useParams();
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const successCallback = (data) => {
      setRecords(data);
      setIsLoaded(true);
    };

    const errorCallback = () => {
      setIsLoaded(true);
      setError(true);
    };

    UserService.getRecords(params.traineeId, successCallback, errorCallback);
  }, [params.traineeId]);

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
      name: 'ranking.scoreRank',
      label: 'Rank',
    },
    {
      name: 'duration',
      label: 'Duration',
    },
    {
      name: 'id',
      label: 'Details',
      options: {
        customBodyRender: (value) => {
          return (
            <Button onClick={() => toTraineeRecordFromTrainee(history, params.traineeId, value)}>
              <SearchIcon />
            </Button>
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
        <Container maxWidth="md" justifyContent="center" alignItems="center">
          <Stack direction="column" spacing={2} mt={2}>
            <Header toBackPage={() => goToTrainee(history, params.traineeId)} />
            <MUIDataTable title={'My Quizzes Records'} data={records} columns={columns} options={tableOptions} />
          </Stack>
        </Container>
      </>
    );
  }
};

export { QuizzesRecords };
