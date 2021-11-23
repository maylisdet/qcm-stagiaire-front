import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './Components/Authentication/Login/LoginComponent';
import { AdminComponent } from './Components/WelcomePage/Admin/AdminComponent'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/admin" component={AdminComponent} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
