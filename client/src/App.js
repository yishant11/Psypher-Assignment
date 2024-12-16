import Home from './components/Home/Home';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, styled } from '@mui/material';
import DataProvider from './context/DataProvider';
import Productitem from './components/Products/Productitem';
import Cart from './components/Cart/Cart';

const HomeCom = styled(Box)`
  margin-top: 54px;
`

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <HomeCom>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Productitem />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </HomeCom>
      </Router>
    </DataProvider>
  );
}

export default App;
