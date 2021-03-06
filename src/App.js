import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';


const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/character' component={Home} />
        <Route path='/character:id' component={Home} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;