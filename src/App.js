import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-gray-100 to-white">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="container mx-auto mb-12 flex-1 space-y-4 px-1 py-1 font-inter text-gray-700 max-xl:w-96">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
