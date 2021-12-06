import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Header } from 'components/header/Header';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { DeleteButton } from 'components/DeleteButton';

const QuizzesManagement = () => {
  const history = useHistory();

  const toQuizEditPage = (id) => {
    const url = `/admin/quizz/${id}/edit`;
    history.push(url);
  };

  const toQuizzesManagementPage = () => {
    const url = '/admin/quizzes';
    history.push(url);
  };

  const toCreateQuiz = () => {
    const url = '/admin/create-quiz';
    history.push(url);
  };

  const columns = [
    {
      name: 'Quizz',
    },
    {
      name: 'Theme',
    },
    {
      name: 'Number of records',
    },
    {
      name: 'Actions',
      options: {
        setCellHeaderProps: () => ({
          style: { display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse' },
        }),
        customBodyRender: () => {
          return (
            <Stack direction="row" justifyContent="center">
              <Button onClick={(id) => toQuizEditPage(1)}>
                <ModeEditOutlineOutlinedIcon />
              </Button>
              <Button onClick={toQuizzesManagementPage}>
                <DeleteButton />
              </Button>
            </Stack>
          );
        },
      },
    },
  ];

  const data = [
    ['Intro JEE', 'Back', '8'],
    ['Intro React', 'Front', '57'],
  ];
  return (
    <>
      <Container alignItems="center">
        <Stack direction="column" spacing={2} mt={2}>
          <Header />
          <Stack direction="column" alignItems="flex-end" spacing={2}>
            <Button variant="contained" onClick={toCreateQuiz}>
              New quizz
            </Button>
          </Stack>
          <Stack spacing={8} bottom={2}>
            <MUIDataTable title={'Active quizzes'} data={data} columns={columns} />
            <MUIDataTable title={'Inactive quizzes'} data={data} columns={columns} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { QuizzesManagement };
