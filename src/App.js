import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './Components/Authentication/Login/LoginComponent';
import { AdminComponent } from './Components/WelcomePage/Admin/AdminComponent';
import { UserManagement } from './Components/UserManagement';
import { CreateUser } from './Components/Admin/CreateUser';

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
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
