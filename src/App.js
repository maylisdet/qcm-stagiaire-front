import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './Components/Authentication/Login/LoginComponent';
import { AdminComponent } from './Components/WelcomePage/Admin/AdminComponent';
import { UserManagement } from './Components/Admin/UserManagement';
import { CreateUser } from './Components/Admin/CreateUser';
import { QuizzesResultsComponent } from './Components/Trainee/QuizzesResultsComponent';
import { UserComponent } from './Components/WelcomePage/Trainee/UserComponent';
import { QuizzesComponent } from './Components/Trainee/QuizzesComponent';

import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { UserDetailledProfileComponent } from './Components/Admin/UserDetailledProfileComponent';
import { QuizzesManagement } from './Components/Admin/QuizzesManagement';

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
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/login" component={LoginComponent} />
            {/* ADMIN ROUTES */}
            <Route exact path="/admin/create-user" component={CreateUser} />
            <Route exact path="/admin" component={AdminComponent} />
            <Route exact path="/admin/user-management" component={UserManagement} />
            <Route exact path="/admin/quizzes-management" component={QuizzesManagement} />
            <Route exact path="/admin/user/:id/profile" component={UserDetailledProfileComponent} />

            {/* TRAINEE ROUTES */}
            <Route exact path="/trainee" component={UserComponent} />
            <Route exact path="/trainee/quizzes-results" component={QuizzesResultsComponent} />
            <Route exact path="/trainee/quizzes" component={QuizzesComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
