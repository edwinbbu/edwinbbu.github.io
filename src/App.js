import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
        <Experience />
        {/* <Route path="/" component={Home} /> */}
        {/* <Route path="#experience" component={Experience} /> */}
      </Router>
    </div>
  );
}

export default App;
