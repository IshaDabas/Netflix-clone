import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen"

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
            <LoginScreen />
          ): {} }

        <Routes>
          <Route path="/" element = {<Homescreen/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 