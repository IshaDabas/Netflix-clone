import "./App.css";
import Homescreen from "./Homescreen";
import {
  BrowserRouter as Router,
  Switch,
  Rout
} from "react-router-dom" 
function App() {
  return (
    <div className="app">
      <Homescreen />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
