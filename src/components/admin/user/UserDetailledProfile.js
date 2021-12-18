import { useState, useEffect } from 'react';
import { Container, Stack, Tab, Box, LinearProgress, AlertTitle, Alert } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useParams, useHistory } from 'react-router-dom';

import { UserProfile } from 'components/admin/user/UserProfile';
import { UserRecord } from 'components/admin/user/UserRecord';
import { Header } from 'components/header/Header';

import UserService from 'services/UserService';
import { toUsersManagementPage } from 'utils/RouteUtils';

const UserDetailledProfile = () => {
  /*************************/
  /******** useHooks ******/
  /***********************/
  const [tabValue, setTabValue] = useState('0');
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();
  const history = useHistory();

  /*************************/
  /******** API Call ******/
  /***********************/
  const successCallback = (user) => {
    setUser(user);
    setIsLoaded(true);
  };

  const errorCallback = (error) => {
    setError(true);
  };

  useEffect(() => {
    UserService.get(params.userId, successCallback, errorCallback);
  }, [params.userId]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
      <Container maxWidth="md">
        <Stack spacing={3} mt={2}>
          <Header toBackPage={() => toUsersManagementPage(history)} />
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange}>
                <Tab label="User's profile" value="0" />
                <Tab label="User's records" value="1" />
              </TabList>
            </Box>
            <TabPanel value="0">
              <UserProfile user={user} />
            </TabPanel>
            <TabPanel value="1">
              <UserRecord user={user} />
            </TabPanel>
          </TabContext>
        </Stack>
      </Container>
    );
  }
};

export { UserDetailledProfile };
