import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
