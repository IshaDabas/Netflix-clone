import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element = {<Homescreen/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
