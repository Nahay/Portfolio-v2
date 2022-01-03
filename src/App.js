import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';

import SIORouter from './routers/SIORouter';

import FourOhFour from './Pages/FourOhFour';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main className="main">
          <ToastContainer/>
          <Switch>
            
            <Route path="/sio" component = {SIORouter} />
            <Route exact path="/" component = {Home} />
            <Route path="*" component = {FourOhFour} />

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;