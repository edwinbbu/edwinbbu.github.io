import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
        <Experience />
        <Hobbies />
        {/* <Route path="/" component={Home} /> */}
        {/* <Route path="#experience" component={Experience} /> */}
      </Router>
    </div>
  );
}

export default App;
