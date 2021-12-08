import { Container, Stack } from '@mui/material';
import MUIDataTable from 'mui-datatables';

const UserRecord = () => {
  const columns = [
    {
      name: 'quizName',
      label: 'Quiz Name',
    },
    {
      name: 'theme',
      label: 'Theme',
    },
    {
      name: 'score',
      label: 'Score',
    },
    {
      name: 'bestScore',
      label: 'Best Score of the quizz',
      options: {
        setCellProps: () => ({ style: { minWidth: '150px' } }),
      },
    },
    {
      name: 'rank',
      label: 'Rank',
    },
  ];

  const data = [
    { quizName: 'Joe James', theme: 'Test Corp', score: 'Yonkers', bestScore: 'NY', rank: '4/20' },
    { quizName: 'Joe James', theme: 'Test Corp', score: 'Yonkers', bestScore: 'NY', rank: '4/20' },
    { quizName: 'Joe James', theme: 'Test Corp', score: 'Yonkers', bestScore: 'NY', rank: '4/20' },
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
