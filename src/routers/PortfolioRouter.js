import { Routes, Route } from 'react-router-dom';
import Test from '../components/Test/Test';
import Home from '../Pages/Home';


const PortfolioRouter = () => {
    
    return ( 
        <>
            <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element = {<Home/>} />
                <Route exact path="/test" element = {<Test/>} />

            </Routes>
            </main>
        </>
    );
}

export default PortfolioRouter;