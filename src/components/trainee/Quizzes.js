import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Container, Stack, Alert, AlertTitle, LinearProgress, Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import MUIDataTable from 'mui-datatables';

import { Header } from 'components/header/Header';
import QuizService from 'services/QuizService';

import { toLaunchQuiz } from 'utils/RouteUtils';
import { tableOptions } from 'utils/TableUtils';

const Quizzes = () => {
  /*************************/
  /******** useHooks ******/
  /***********************/
  const history = useHistory();
  const params = useParams();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizzes, setQuizzes] = useState([]);

  /*************************/
  /******** API Call ******/
  /***********************/
  const successCallback = (response) => {
    setIsLoaded(true);
    setQuizzes(response);
  };

  const errorCallback = () => {
    setIsLoaded(true);
    setError(true);
  };

  useEffect(() => {
    QuizService.index(successCallback, errorCallback);
  }, []);

  /******************************/
  /******** Table Columns ******/
  /****************************/
  const columns = [
    {
      name: 'label',
      label: 'Quiz',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'theme.label',
      label: 'Theme',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Actions',
      name: 'id',
      options: {
        setCellHeaderProps: () => ({
          style: { display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse' },
        }),
        customBodyRender: (value) => {
          return (
            <Stack direction="row" justifyContent="center">
              <Button onClick={() => toLaunchQuiz(history, params.traineeId, value)}>
                <PlayCircleOutlineIcon />
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
        <Container maxWidth="md" justifyContent="center" alignItems="center">
          <Stack direction="column" spacing={2} mt={2}>
            <Header />
            <MUIDataTable title={'Available Quizzes'} data={quizzes} columns={columns} options={tableOptions} />
          </Stack>
        </Container>
      </>
    );
  }
};

export { Quizzes };
