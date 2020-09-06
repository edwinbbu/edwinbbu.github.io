import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Experience} /> */}
      </Router>
    </div>
  );
}

export default App;
