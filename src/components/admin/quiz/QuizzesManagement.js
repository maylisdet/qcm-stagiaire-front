import { useEffect, useState, useCallback } from 'react';
import { Button, Container, Stack, LinearProgress, AlertTitle, Alert } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { DeleteButton } from 'components/DeleteButton';
import { Header } from 'components/header/Header';
import { Emoji } from 'components/Emoji';
import QuizService from 'services/QuizService';
import { tableOptions } from 'utils/TableUtils';
import { toQuizEditPage, toCreateQuiz, goToAdmin } from 'utils/RouteUtils';
import { notifySucess } from 'utils/NotifyUtils';

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
  useEffect(() => {
    const errorCallback = (error) => {
      setError(true);
    };
    const successCallback = (data) => {
      setQuizzes(data);
      setIsLoaded(true);
    };
    QuizService.index(successCallback, errorCallback);
  }, []);

  const deleteQuiz = useCallback(
    (quizId) => {
      const callback = () => {
        notifySucess('Quiz well archive');
        setQuizzes(quizzes.filter((quiz) => quiz.id !== quizId));
        window.location.reload(false);
      };
      const errorCallback = (error) => {
        setError(true);
      };
      QuizService.delete(quizId, callback, errorCallback);
    },
    [quizzes],
  );

  /******************************/
  /******** Table Columns ******/
  /****************************/
  const columnsActive = [
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
      name: 'numberOfRecords',
      options: {
        customBodyRender: (value) => {
          return <p>{value}</p>;
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
              <Button onClick={() => toQuizEditPage(history, value)}>
                <ModeEditOutlineOutlinedIcon />
              </Button>
              <DeleteButton onClick={() => deleteQuiz(value)} />
            </Stack>
          );
        },
      },
    },
  ];

  const columnsInactive = [
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
      name: 'numberOfRecords',
      options: {
        customBodyRender: (value) => {
          return <p>{value}</p>;
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
              <Button onClick={() => toQuizEditPage(history, value)}>
                <ModeEditOutlineOutlinedIcon />
              </Button>
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
          <Header toBackPage={() => goToAdmin(history)} />
          <Stack direction="column" alignItems="center" spacing={2}>
            <Button variant="contained" onClick={() => toCreateQuiz(history)}>
              New quiz
              <Emoji symbol="✍🏻" label="hand_with_prn" marginLeft="5" />
            </Button>
          </Stack>
          <Stack spacing={8} bottom={2}>
            <MUIDataTable
              title={'Active quizzes'}
              data={quizzes.filter((quiz) => quiz.active)}
              columns={columnsActive}
              options={tableOptions}
            />
            <MUIDataTable
              title={'Inactive quizzes'}
              data={quizzes.filter((quiz) => !quiz.active)}
              columns={columnsInactive}
              options={tableOptions}
            />
          </Stack>
        </Stack>
      </Container>
    );
  }
};

export { QuizzesManagement };
