import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';

import FourOhFour from './Pages/FourOhFour';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main className="main">
          <Switch>

            <Route exact path="/" component = {Home} />
            <Route path="*" component = {FourOhFour} />

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;