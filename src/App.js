import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import { Login } from 'components/authentication/login/Login';
import { Admin } from 'components/welcome_page/admin/Admin';
import { UserManagement } from 'components/admin/user/UserManagement';
import { CreateUser } from 'components/admin/user/CreateUser';
import { QuizzesRecords } from 'components/trainee/QuizzesRecords';
import { User } from 'components/welcome_page/trainee/User';
import { Quizzes } from 'components/trainee/Quizzes';

import { UserDetailledProfile } from 'components/admin/user/UserDetailledProfile';
import { QuizzesManagement } from 'components/admin/quiz/QuizzesManagement';
import { QuizEdit } from 'components/admin/quiz/QuizEdit';
import { QuestionEdit } from 'components/admin/quiz/QuestionEdit';
import { QuizDetailledResult } from 'components/trainee/QuizDetailledResult';
import { CreateQuiz } from 'components/admin/quiz/CreateQuiz';
import { AddQuestion } from 'components/admin/quiz/AddQuestion';

import { ThemeProvider } from '@material-ui/core/styles';
import { tableTheme } from 'theme';

function App() {
  return (
    <ThemeProvider theme={tableTheme}>
      <Container maxWidth="md">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />

            {/* ADMIN ROUTES */}
            <Route exact path="/admin" component={Admin} />

            {/* User management */}
            <Route exact path="/admin/create-user" component={CreateUser} />
            <Route exact path="/admin/users" component={UserManagement} />
            <Route exact path="/admin/users/:id" component={UserDetailledProfile} />

            {/* Quiz management */}
            <Route exact path="/admin/create-quiz" component={CreateQuiz} />
            <Route exact path="/admin/quizzes" component={QuizzesManagement} />
            <Route exact path="/admin/quiz/:id/edit" component={QuizEdit} />
            <Route exact path="/admin/quiz/:id/question/:id/edit" component={QuestionEdit} />
            <Route exact path="/admin/quiz/:id/create-question" component={AddQuestion} />

            {/* TRAINEE ROUTES */}
            <Route exact path="/trainee" component={User} />
            <Route exact path="/trainee/:id/quizzes/records" component={QuizzesRecords} />
            <Route exact path="/trainee/:id/quizzes" component={Quizzes} />
            <Route exact path="/trainee/:id/quizzes/:id/result" component={QuizDetailledResult} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
