import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>App</div>
        <Route path='/Projects' exact component={Projects} />
        <Route path='/Contact' exact component={Contact} />
      </BrowserRouter>
    );
  }
}
export default App;
