import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Header, ScrollToTop } from './components';

import { Cart, Home, NotFound, ProductDetail } from './pages';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-tl from-gray-100 to-white">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="container mx-auto mb-12 flex-1 space-y-4 px-1 py-1 font-inter text-gray-700">
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
