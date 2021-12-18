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
            <Route exact path="/admin/:traineeId/records/:recordId/detailed" component={QuizDetailedResult} />

            {/* TRAINEE ROUTES */}
            <Route exact path="/trainee/:traineeId" component={User} />
            <Route exact path="/trainee/:traineeId/records" component={QuizzesRecords} />
            <Route exact path="/trainee/:traineeId/quizzes" component={Quizzes} />
            <Route exact path="/trainee/:traineeId/quizzes/:quizId" component={QuizAnswerSheet} />
            <Route exact path="/trainee/:traineeId/records/:recordId" component={QuizFinished} />
            <Route exact path="/trainee/:traineeId/records/:recordId/detailed" component={QuizDetailedResult} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
