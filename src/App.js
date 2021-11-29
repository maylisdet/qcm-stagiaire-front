import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from 'Components/Authentication/Login/Login';
import { Admin } from 'Components/WelcomePage/Admin/Admin';
import { UserManagement } from 'Components/Admin/User/UserManagement';
import { CreateUser } from 'Components/Admin/User/CreateUser';
import { QuizzesRecords } from 'Components/Trainee/QuizzesRecords';
import { User } from 'Components/WelcomePage/Trainee/User';
import { Quizzes } from 'Components/Trainee/Quizzes';

import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { UserDetailledProfile } from 'Components/Admin/User/UserDetailledProfile';
import { QuizzesManagement } from 'Components/Admin/Quiz/QuizzesManagement';

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
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            {/* ADMIN ROUTES */}
            <Route exact path="/admin/create-user" component={CreateUser} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/users" component={UserManagement} />
            <Route exact path="/admin/quizzes" component={QuizzesManagement} />
            <Route exact path="/admin/users/:id" component={UserDetailledProfile} />

            {/* TRAINEE ROUTES */}
            <Route exact path="/trainee" component={User} />
            <Route exact path="/trainee/quizzes/records" component={QuizzesRecords} />
            <Route exact path="/trainee/quizzes" component={Quizzes} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
