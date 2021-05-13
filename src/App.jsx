import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from './assets/theme'

import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';

import Header from './components/Header';
import About from './pages/About'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import {
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
