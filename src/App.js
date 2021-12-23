import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';

import FourOhFour from './Pages/FourOhFour';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main className="main">
          <ToastContainer/>
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