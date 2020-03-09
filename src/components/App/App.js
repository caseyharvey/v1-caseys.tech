import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import PrismSnippet from '../Prism/PrismSnippet';
import Projects from '../Projects/Projects';
import HomePage from '../HomePage/HomePage';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import Blog from '../Blog/Blog';
import './app.sass';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className='main-container'>
          <Route path='/HomePage' exact component={HomePage} />
          <Route path='/Projects' exact component={Projects} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Blog' exact component={Blog} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
