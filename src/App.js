import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';

const Cart = lazy(() => import('./pages/Cart'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-inter">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="container mb-20 flex-1 space-y-4 px-1 py-1 text-gray-900 max-xl:w-96">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
