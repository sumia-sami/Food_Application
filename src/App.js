

import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={< ProductDetail />} />
        <Route path="/cart" element={ < CartPage /> } />
        <Route path="/checkout" element={< CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />

        </Routes>

        <Footer />
        
      </div>
    
  );
}

export default App;
