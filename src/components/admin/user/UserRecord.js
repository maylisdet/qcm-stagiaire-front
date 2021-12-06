import { Container, Stack } from '@mui/material';
import MUIDataTable from 'mui-datatables';

const UserRecord = () => {
  const columns = [
    {
      name: 'Quiz Name',
    },
    {
      name: 'Theme',
    },
    {
      name: 'Score',
    },
    {
      name: 'Best Score of the quiz',
      options: {
        setCellProps: () => ({ style: { minWidth: '150px' } }),
      },
    },
    {
      name: 'Rank',
    },
  ];

  const data = [
    ['Intro to Java EE', 'Java EE', '80% in 10:15', '90% in 9:21', '3/8'],
    ['Intro React', 'React', '80% in 10:15', '90% in 9:21', '3/8'],
  ];

  return (
    <>
      <Container alignitems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <MUIDataTable title={'Trainees'} data={data} columns={columns} />
        </Stack>
      </Container>
    </>
  );
};

export { UserRecord };
