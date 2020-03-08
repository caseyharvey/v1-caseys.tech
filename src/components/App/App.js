import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import PrismSnippet from '../Prism/PrismSnippet';
import Projects from '../Projects/Projects';
import HomePage from '../HomePage/HomePage';
import Contact from '../Contact/Contact';
import Header from './Header';
import Footer from './Footer';
import './app.sass';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className='main-container'>
          <Route path='/HomePage' exact component={HomePage} />
          <Route path='/Projects' exact component={Projects} />
          <Route path='/Contact' exact component={Contact} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
