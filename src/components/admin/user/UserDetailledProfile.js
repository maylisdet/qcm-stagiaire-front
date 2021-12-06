import { useState } from 'react';
import { Container, Stack, Tabs, Tab, Typography, Box } from '@mui/material';
import { UserProfile } from 'components/admin/user/UserProfile';
import { UserRecord } from 'components/admin/user/UserRecord';
import { Header } from 'components/header/Header';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const UserDetailledProfile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="md">
      <Stack spacing={3} mt={2}>
        <Header />
        <Stack alignItems={'center'}>
          <Stack width="600px">
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
              <Tab label="User's information" />
              <Tab label="Records" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <UserProfile />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <UserRecord />
            </TabPanel>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export { UserDetailledProfile };
