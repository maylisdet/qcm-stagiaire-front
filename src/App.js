import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import { Login } from 'components/authentication/login/Login';
import { Admin } from 'components/welcome_page/admin/Admin';
import { UserManagement } from 'components/admin/user/UserManagement';
import { CreateUser } from 'components/admin/user/CreateUser';
import { QuizzesRecords } from 'components/trainee/QuizzesRecords';
import { User } from 'components/welcome_page/trainee/User';
import { Quizzes } from 'components/trainee/Quizzes';
import { QuizAnswerSheet } from 'components/trainee/QuizAnswerSheet';

import { UserDetailledProfile } from 'components/admin/user/UserDetailledProfile';
import { QuizzesManagement } from 'components/admin/quiz/QuizzesManagement';
import { QuizEdit } from 'components/admin/quiz/QuizEdit';
import { QuestionEdit } from 'components/admin/quiz/QuestionEdit';
import { QuizDetailedResult } from 'components/trainee/QuizDetailedResult';
import { CreateQuiz } from 'components/admin/quiz/CreateQuiz';
import { CreateQuestion } from 'components/admin/quiz/CreateQuestion';

import { ThemeProvider } from '@material-ui/core/styles';
import { tableTheme } from 'theme';
import { Toaster } from 'react-hot-toast';
import { QuizFinished } from 'components/trainee/QuizFinished';
import { PageNotFound } from 'components/access_errors/PageNotFound';
import { ProtectedRoute } from 'ProtectedRoute';
import { AccesDenied } from 'components/access_errors/AccessDenied';

function App() {
  return (
    <ThemeProvider theme={tableTheme}>
      <Container maxWidth="md">
        <Toaster
          toastOptions={{
            className: '',
            duration: 3000,
            style: {
              fontWeight: 'bold',
            },
          }}
        />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />

            {/* ADMIN ROUTES */}
            <ProtectedRoute exact path="/admin" component={Admin} />

            {/* User management */}
            <ProtectedRoute exact path="/admin/create-user" component={CreateUser} />
            <ProtectedRoute exact path="/admin/users" component={UserManagement} />
            <ProtectedRoute exact path="/admin/users/:userId" component={UserDetailledProfile} />

            {/* Quiz management */}
            <ProtectedRoute exact path="/admin/create-quiz" component={CreateQuiz} />
            <ProtectedRoute exact path="/admin/quizzes" component={QuizzesManagement} />
            <ProtectedRoute exact path="/admin/quiz/:quizId/edit" component={QuizEdit} />
            <ProtectedRoute exact path="/admin/quiz/:quizId/question/:questionId/edit" component={QuestionEdit} />
            <ProtectedRoute exact path="/admin/quiz/:quizId/create-question" component={CreateQuestion} />
            <ProtectedRoute exact path="/admin/:traineeId/records/:recordId/detailed" component={QuizDetailedResult} />

            {/* TRAINEE ROUTES */}
            <Route exact path="/trainee/:traineeId" component={User} />
            <Route exact path="/trainee/:traineeId/records" component={QuizzesRecords} />
            <Route exact path="/trainee/:traineeId/quizzes" component={Quizzes} />
            <Route exact path="/trainee/:traineeId/quizzes/:quizId" component={QuizAnswerSheet} />
            <Route exact path="/trainee/:traineeId/records/:recordId" component={QuizFinished} />
            <Route exact path="/trainee/:traineeId/records/:recordId/detailed" component={QuizDetailedResult} />

            {/* ERRORS */}
            <Route path="/access-denied">
              <AccesDenied />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
