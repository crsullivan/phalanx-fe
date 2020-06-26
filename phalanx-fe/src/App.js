import React, {useState} from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/NavCondition';
import history from "./utils/history";
import PrivateRoute from "./utils/PrivateRoute";
import Register from './components/Auth/Register';
import Login from "./components/Auth/Login";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import './App.css';

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))
  console.log('token in App', token)

  const handleLoginStateChanged = () => {
    setToken(localStorage.getItem("token"))
  }

  return (
    <Router history={history}>
      <div className="App">
        <Nav token={token}/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" 
          render={(props) => <Login {...props} onChange={handleLoginStateChanged} /> }
          />
        
          <Route path="/register" 
          render={(props) => <Register {...props} onChange={handleLoginStateChanged} /> }
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
