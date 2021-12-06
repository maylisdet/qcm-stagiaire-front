import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import { Login } from 'components/authentication/login/Login';
import { Admin } from 'components/welcome_page/admin/Admin';
import { UserManagement } from 'components/admin/user/UserManagement';
import { CreateUser } from 'components/admin/user/CreateUser';
import { QuizzesRecords } from 'components/trainee/QuizzesRecords';
import { User } from 'components/welcome_page/trainee/User';
import { Quizzes } from 'components/trainee/Quizzes';

import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { UserDetailledProfile } from 'components/admin/user/UserDetailledProfile';
import { QuizzesManagement } from 'components/admin/quiz/QuizzesManagement';
import { QuizzEdit } from 'components/admin/quiz/QuizzEdit';
import { QuestionEdit } from 'components/admin/quiz/QuestionEdit';
import { QuizDetailledResult } from 'components/trainee/QuizDetailledResult';
import { CreateQuiz } from 'components/admin/quiz/CreateQuiz';

const getMuiTheme = () =>
  createTheme({
    overrides: {
      MUIDataTableHeadCell: {
        toolButton: {
          fontWeight: 'bold',
          fontSize: 'medium',
        },
      },
      MuiSvgIcon: {
        root: {
          height: '0.9em',
          width: '0.9em',
        },
      },
      MuiTableCell: {
        root: {
          paddingTop: '5px',
          paddingBottom: '5px',
        },
      },
      MuiButton: {
        root: {
          minWidth: '50px',
          minHeight: '40px',
        },
        text: {
          padding: 0,
        },
      },
    },
  });

function App() {
  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <Container maxWidth="md">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />

            {/* ADMIN ROUTES */}
            <Route exact path="/admin/create-user" component={CreateUser} />
            <Route exact path="/admin/quizz/:id/edit" component={QuizzEdit} />
            <Route exact path="/admin/quizz/:id/question/:id/edit" component={QuestionEdit} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/users" component={UserManagement} />
            <Route exact path="/admin/quizzes" component={QuizzesManagement} />
            <Route exact path="/admin/users/:id" component={UserDetailledProfile} />
            <Route exact path="/admin/quizz/:id/edit" component={QuizzEdit} />
            <Route exact path="/admin/quizz/:id/question/:id/edit" component={QuestionEdit} />
            <Route exact path="/admin/create-quiz" component={CreateQuiz} />

            {/* TRAINEE ROUTES */}
            <Route exact path="/trainee" component={User} />
            <Route exact path="/trainee/:id/quizzes/records" component={QuizzesRecords} />
            <Route exact path="/trainee/:id/quizzes" component={Quizzes} />
            <Route exact path="/trainee/:id/quizzes/:id/result" component={QuizDetailledResult} />
          </Switch>
        </BrowserRouter>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
