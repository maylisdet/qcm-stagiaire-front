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

const getMuiTheme = () =>
  createTheme({
    overrides: {
      // MuiTableCell: {
      //   head: {
      //       backgroundColor: "blue!important",
      //   },
      MUIDataTableHeadCell: {
        root: {
          border: '1px solid #000',
          textAlign: 'center', //Not working
        },
        toolButton: {
          justifyContent: 'center', //Not working
        },
      },
      // MuiTableCell: {
      //   root: {
      //     border: "1px solid #000"
      //   }
      // },
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

            {/* TRAINEE ROUTES */}
            <Route exact path="/trainee" component={User} />
            <Route exact path="/trainee/quizzes/records" component={QuizzesRecords} />
            <Route exact path="/trainee/:id/quizzes" component={Quizzes} />
          </Switch>
        </BrowserRouter>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
