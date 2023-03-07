import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import Cart from '../page/Cart';
import Home from '../page/Home';

function Content() {

return (
  <BrowserRouter>
  <React.StrictMode>
      <Header />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
    </Switch>
    </React.StrictMode>
  </BrowserRouter>

  );
}

export default Content;