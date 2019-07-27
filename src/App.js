import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Error from './pages/404/404';
import Footer from './components/Footer/Footer';

import footerData from './data/Footer';

import './App.css';

const App = () => {
  return (
    <BrowserRouter >
      <Helmet titleTemplate="%s | Andrea Cau" defaultTitle="Andrea Cau JavaScript Developer" />
      <div className="page-container">
        <div className="content-wrap">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/projects" component={Projects} exact />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer footerData={footerData} />
      </div>
    </BrowserRouter >
  );
}

export default App;