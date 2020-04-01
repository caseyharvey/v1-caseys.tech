import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProjectList from "../Projects/ProjectList";
import HomePage from "../HomePage/HomePage";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import "./app.sass";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="main-container">
          <Route path="/" exact component={HomePage} />
          <Route path="/Projects" exact component={ProjectList} />
          <Route path="/Contact" exact component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
