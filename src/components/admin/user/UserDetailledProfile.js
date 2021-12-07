import { useState } from 'react';
import { Container, Stack, Tab, Box } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { UserProfile } from 'components/admin/user/UserProfile';
import { UserRecord } from 'components/admin/user/UserRecord';
import { Header } from 'components/header/Header';

const UserDetailledProfile = () => {
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="md">
      <Stack spacing={3} mt={2}>
        <Header />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="User's profile" value="0" />
              <Tab label="User's records" value="1" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <UserProfile />
          </TabPanel>
          <TabPanel value="1">
            <UserRecord />
          </TabPanel>
        </TabContext>
      </Stack>
    </Container>
  );
};

export { UserDetailledProfile };
