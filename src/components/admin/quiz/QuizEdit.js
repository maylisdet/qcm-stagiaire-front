import { useState, useEffect } from 'react';
import { Stack, Box, Tab, Alert, AlertTitle, LinearProgress } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import { useParams } from 'react-router-dom';

import { Header } from 'components/header/Header';
import { QuizContent } from 'components/admin/quiz/QuizContent';
import { QuizRecords } from 'components/admin/quiz/QuizRecords';

import QuizService from 'services/QuizService';

const QuizEdit = () => {
  /*************************/
  /******** useHooks ******/
  /***********************/
  const [value, setValue] = useState('0');
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();

  /*************************/
  /******** API Call ******/
  /***********************/
  const errorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    const successCallback = (quiz) => {
      setQuiz(quiz);
      setIsLoaded(true);
    };
    QuizService.get(params.quizId, successCallback, errorCallback);
  }, [params.quizId]);

  /*************************/
  /******** Handlers ******/
  /***********************/
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*************************/
  /***** Component UI *****/
  /***********************/
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
      <Stack spacing={3} mt={4}>
        <Header />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Quizz Content" value="0" />
              <Tab label="Records" value="1" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <QuizContent quiz={quiz} />
          </TabPanel>
          <TabPanel value="1">
            <QuizRecords />
          </TabPanel>
        </TabContext>
      </Stack>
    );
  }
};

export { QuizEdit };
