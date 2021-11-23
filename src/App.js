import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './Components/Authentication/Login/LoginComponent';
import { AdminComponent } from './Components/WelcomePage/Admin/AdminComponent';
import { UserManagement } from './Components/UserManagement'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/admin" component={AdminComponent} />
                    <Route exact path="/user_administration" component={UserManagement} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
