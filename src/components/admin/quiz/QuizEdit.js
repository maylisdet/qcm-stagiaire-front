import { useState } from 'react';
import { Stack, Box, Tab, Container } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab/';

import { QuizContent } from 'components/admin/quiz/QuizContent';
import { QuizRecords } from 'components/admin/quiz/QuizRecords';
import { Header } from 'components/header/Header';

const QuizEdit = () => {
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
              <Tab label="Quiz Content" value="0" />
              <Tab label="Records" value="1" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <QuizContent />
          </TabPanel>
          <TabPanel value="1">
            <QuizRecords />
          </TabPanel>
        </TabContext>
      </Stack>
    </Container>
  );
};

export { QuizEdit };
