import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Header from './components/Header/Header.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  );
  

}

export default App
