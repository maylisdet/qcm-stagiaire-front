import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './Components/Authentication/Login/LoginComponent';
import { AdminComponent } from './Components/WelcomePage/Admin/AdminComponent';
import { UserManagement } from './Components/Admin/UserManagement';
import { CreateUser } from './Components/Admin/CreateUser';
import { QuizzesResultsComponent } from './Components/Trainee/QuizzesResultsComponent'
import { UserComponent } from './Components/WelcomePage/Trainee/UserComponent';
import { QuizzesComponent } from './Components/Trainee/QuizzesComponent';


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/admin/create-user" component={CreateUser} />
                    <Route exact path="/admin" component={AdminComponent} />
                    <Route exact path="/admin/user-management" component={UserManagement} />
                    <Route exact path="/trainee" component={UserComponent} />
                    <Route exact path="/trainee/quizzes-results" component={QuizzesResultsComponent} />
                    <Route exact path="/trainee/quizzes" component={QuizzesComponent} />
                </Switch>
            </div>
        </BrowserRouter>
);
}

export default App;
