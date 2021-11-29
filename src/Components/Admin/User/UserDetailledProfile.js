import * as React from 'react';
import { Container, Stack, Tabs, Tab, Typography, Box } from '@mui/material';
import { UserProfile } from 'Components/Admin/User/UserProfile';
import { UserRecord } from 'Components/Admin/User/UserRecord';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="sm">
      <Stack spacing={3} mt={4}>
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
    </Container>
  );
};

export { UserDetailledProfile };
