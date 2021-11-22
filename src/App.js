import './App.css';
import {LoginComponent} from './Components/Authentication/Login/LoginComponent';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={LoginComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
