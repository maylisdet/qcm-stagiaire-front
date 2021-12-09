import { useEffect, useState } from 'react';
import { Button, Container, Stack, LinearProgress, AlertTitle, Alert } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Loader } from 'components/loading/Loader';

import { DeleteButton } from 'components/DeleteButton';
import { Header } from 'components/header/Header';

import QuizService from 'services/QuizService';
import { tableOptions } from 'utils/TableUtils';

const QuizzesManagement = (props) => {
  /*************************/
  /******** useHooks ******/
  /***********************/
  const history = useHistory();
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /*************************/
  /******** API Call ******/
  /***********************/
  const successCallback = (data) => {
    setQuizzes(data);
    setIsLoaded(true);
  };

  const errorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    QuizService.index(successCallback, errorCallback);
  }, []);

  const toQuizEditPage = (id) => {
    const url = `/admin/quiz/${id}/edit`;
    history.push(url);
  };

  const toQuizzesManagementPage = () => {
    const url = '/admin/quizzes';
    history.push(url);
  };

  const toCreateQuiz = () => {
    const url = '/admin/create-quiz';
    history.push(url);
  };

  const columns = [
    {
      name: 'label',
      label: 'Quiz',
    },
    {
      name: 'theme.label',
      label: 'Theme',
    },
    {
      label: 'Number of records',
      name: 'records',
      options: {
        customBodyRender: (value) => {
          return <p>{value.length}</p>;
        },
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
              <Button onClick={() => toQuizEditPage(value)}>
                <ModeEditOutlineOutlinedIcon />
              </Button>
              <DeleteButton onClick={toQuizzesManagementPage} />
            </Stack>
          );
        },
      },
    },
  ];

  /*************************/
  /***** Component UI *****/
  /***********************/
  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Erreur de chargement des données</AlertTitle>
        Les données n'ont pas pu être chargée.
        <p>Détails : </p>
        {error}
      </Alert>
    );
  } else if (!isLoaded) {
    return <LinearProgress />;
  } else {
    return (
      <Container alignitems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Stack direction="column" alignItems={'flex-end'} spacing={2}>
            <Button variant="contained" onClick={toCreateQuiz}>
              New quiz
            </Button>
          </Stack>
          <Stack spacing={8} bottom={2}>
            <MUIDataTable
              title={'Active quizzes'}
              data={quizzes.filter((quiz) => quiz.active)}
              columns={columns}
              options={tableOptions}
            />
            <MUIDataTable
              title={'Inactive quizzes'}
              data={quizzes.filter((quiz) => !quiz.active)}
              columns={columns}
              options={tableOptions}
            />
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { QuizzesManagement };
