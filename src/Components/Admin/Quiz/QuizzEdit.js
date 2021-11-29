import {useState} from 'react';
import { Container, Stack, Box, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel}   from '@mui/lab/';

import { QuizzContent } from './QuizzContent';
import { QuizzRecords } from './QuizzRecords';

const QuizzEdit = () => {
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Stack spacing={3} mt={4}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Quizz Content" value='0'/>
              <Tab label="Records" value='1'/>
            </TabList>
          </Box>
          <TabPanel value='0'>
            <QuizzContent/>
          </TabPanel>
          <TabPanel value='1'>
            <QuizzRecords/>
          </TabPanel>
        </TabContext>
      </Stack>
    </Container>
  );
};

export { QuizzEdit };