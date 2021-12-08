import { useState, useEffect } from 'react';
import { Container, Stack, Alert, AlertTitle, LinearProgress } from '@mui/material';

import MUIDataTable from 'mui-datatables';

import { Header } from 'components/header/Header';
import QuizService from 'services/QuizService';

const Quizzes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizzes, setQuizzes] = useState([]);

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

  //const columns = ["Quiz Name", "Theme"];
  const columns = [
    {
      name: 'quizLabel',
      label: 'Quiz Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'themeLabel',
      label: 'Theme',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    downloadOptions: {
      separator: ';',
    },
  };

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
            <MUIDataTable title={'Available Quizzes'} data={quizzes} columns={columns} options={options} />
          </Stack>
        </Container>
      </>
    );
  }
};

export { Quizzes };
