import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../page/Home';

function Content() {

return (
  <BrowserRouter>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>

  );
}

export default Content;