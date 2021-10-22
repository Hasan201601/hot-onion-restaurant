import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Meals from './Components/Home/FoodMenu/Meals/Meals';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
