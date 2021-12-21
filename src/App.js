
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PortfolioRouter from './routers/PortfolioRouter';

import FourOhFour from './Pages/FourOhFour';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element = {<PortfolioRouter/>} />
          <Route exact element = {<FourOhFour/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;