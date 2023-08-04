import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Home from './pages/Home/Home';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Checkout from './pages/Checkout/Checkout';
import Confirmation from './pages/Checkout/Confirmation';
import NavBar from './pages/Global/NavBar';
import CartMenu from './pages/Global/CartMenu';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/success" element={<Confirmation />} />
      </Routes>
      <CartMenu />
    </BrowserRouter>
  );
}

export default App;
