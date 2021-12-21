import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Test from './components/Test/Test';
import Home from './Pages/Home';

import FourOhFour from './Pages/FourOhFour';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main className="main">
          <Routes>

            <Route path="/" element={<Home />}>
            </Route>

            <Route path="*" element = {<FourOhFour/>} />
          
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;