import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
        {/* <Route path="/" component={Home} /> */}
        {/* <Route path="#experience" component={Experience} /> */}
      </Router>
    </div>
  );
}

export default App;
