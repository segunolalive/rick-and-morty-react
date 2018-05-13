import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/character' component={Home} />
      <Route path='/character:id' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;