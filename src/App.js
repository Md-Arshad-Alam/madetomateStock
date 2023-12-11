import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/Navbar';
import StockDataList from './pages/StockDataList';
import WatchList from './pages/WatchList';
import Order from './pages/Order';
import { Counter } from './component/Counter';



function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<StockDataList />} />
            <Route path="/watchList" element={<WatchList />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
        {/* <Counter/> */}
      
    </>
  );
}

export default App;
