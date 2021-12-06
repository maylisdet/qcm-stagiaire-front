import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import MUIDataTable from 'mui-datatables';
import { Header } from 'components/header/Header';

const Quizzes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizzs, setQuizzs] = useState([]);

  useEffect(() => {
    fetch('https://myfakeapi.com/api/cars/')
      .then((res) => res.json())
      .then(
        (result) => {
          result = [
            { quizzLabel: 'ReactJS', themeLabel: 'React' },
            { quizzLabel: 'ReactNative', themeLabel: 'React' },
            { quizzLabel: 'Hooks', themeLabel: 'React' },
            { quizzLabel: 'LinearRegression', themeLabel: 'DataSciences' },
          ];
          setIsLoaded(true);
          setQuizzs(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  //const columns = ["Quizz Name", "Theme"];
  const columns = [
    {
      name: 'quizzLabel',
      label: 'Quizz Name',
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
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <LinearProgress />;
  } else {
    return (
      <>
        <Container maxWidth="md" justifyContent="center" alignItems="center">
          <Stack direction="column" spacing={2} mt={2}>
            <Header />
            <MUIDataTable title={'Available Quizzes'} data={quizzs} columns={columns} options={options} />
          </Stack>
        </Container>
      </>
    );
  }
};

export { Quizzes };
