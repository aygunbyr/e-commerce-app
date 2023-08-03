import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container mx-auto px-1 py-1 font-dm-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
