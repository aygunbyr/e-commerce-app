import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

import { useCart } from '../../context/CartContext';

function Header() {
  const { state } = useCart();

  const itemCount = state.items.length;

  return (
    <header className="sticky top-0 z-10 mb-2 bg-zinc-900 font-inter text-rose-500 shadow-md shadow-zinc-900">
      <div className="container max-xl:w-96">
        <div className="flex flex-col items-center space-x-6 px-1 py-1 sm:flex-row">
          <Link to="/" aria-label="e-commerce">
            <span className="text-3xl font-bold text-gray-100">e-commerce</span>
          </Link>
          <nav className="mt-2 flex flex-1 items-center gap-10 text-xl sm:mt-0">
            <Link to="/" aria-label="Go to home page">
              <HomeIcon width={32} />
            </Link>
            <Link
              className="relative ml-auto mr-4"
              aria-label="Go to cart page"
              to="/cart"
            >
              <ShoppingCartIcon width={32} />
              {itemCount > 0 && (
                <span className="absolute right-0 top-0 rounded-full bg-gray-100 px-1 text-sm font-bold text-gray-900">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
