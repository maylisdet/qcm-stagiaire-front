import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { LogoutButton } from '../Authentication/LogoutButton';
import MUIDataTable from 'mui-datatables';

const QuizzesComponent = () => {
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
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
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
        sort: false,
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
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Stack direction="column" spacing={2} mt={2}>
            <MUIDataTable title={'Available Quizzes'} data={quizzs} columns={columns} options={options} />
            <LogoutButton />
          </Stack>
        </Grid>
      </>
    );
  }
};

export { QuizzesComponent };
