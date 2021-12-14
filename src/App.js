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
import { CreateQuestion } from 'components/admin/quiz/CreateQuestion';

import { ThemeProvider } from '@material-ui/core/styles';
import { tableTheme } from 'theme';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ThemeProvider theme={tableTheme}>
      <Container maxWidth="md">
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #1b5e20',
              padding: '10px',
              color: '#1b5e20',
            },
          }}
        />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />

            {/* ADMIN ROUTES */}
            <Route exact path="/admin" component={Admin} />

            {/* User management */}
            <Route exact path="/admin/create-user" component={CreateUser} />
            <Route exact path="/admin/users" component={UserManagement} />
            <Route exact path="/admin/users/:userId" component={UserDetailledProfile} />

            {/* Quiz management */}
            <Route exact path="/admin/create-quiz" component={CreateQuiz} />
            <Route exact path="/admin/quizzes" component={QuizzesManagement} />
            <Route exact path="/admin/quiz/:quizId/edit" component={QuizEdit} />
            <Route exact path="/admin/quiz/:quizId/question/:questionId/edit" component={QuestionEdit} />
            <Route exact path="/admin/quiz/:quizId/create-question" component={CreateQuestion} />

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
