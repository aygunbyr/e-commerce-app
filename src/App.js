import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { ProductDetail } from './pages/ProductDetail';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-50 to-white">
      <Router>
        <Header />
        <main className="container mx-auto mb-20 space-y-4 px-1 py-1 font-inter text-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
