import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import MUIDataTable from 'mui-datatables';
import { Header } from 'components/header/Header';

const Quizzes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch('https://myfakeapi.com/api/cars/')
      .then((res) => res.json())
      .then(
        (result) => {
          result = [
            { quizLabel: 'ReactJS', themeLabel: 'React' },
            { quizLabel: 'ReactNative', themeLabel: 'React' },
            { quizLabel: 'Hooks', themeLabel: 'React' },
            { quizLabel: 'LinearRegression', themeLabel: 'DataSciences' },
          ];
          setIsLoaded(true);
          setQuizzes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
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
    return <div>Erreur : {error.message}</div>;
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
