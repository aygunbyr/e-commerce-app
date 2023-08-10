import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

import { useCart } from '../context/CartContext';

export const Header = () => {
  const { state } = useCart();

  const itemCount = state.items.length;

  return (
    <>
      <div className="header">
        <div className="container mx-auto">
          <header className="flex flex-col items-center space-x-6 px-1 py-1 sm:flex-row">
            <span className="text-3xl font-bold ">E-Commerce</span>
            <nav className="mt-2 flex flex-1 items-center gap-10 text-xl sm:mt-0">
              <Link to="/" className="font-bold">
                Home
              </Link>
              <Link className="relative ml-auto mr-4" to="/cart">
                <ShoppingCartIcon width={36} className="relative" />
                {state.items.length > 0 && (
                  <span className="absolute right-0 top-0 rounded-full bg-gray-100 px-1 text-sm font-bold text-gray-900">
                    {itemCount}
                  </span>
                )}
              </Link>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};
