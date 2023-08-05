import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const Header = React.memo(() => {
  return (
    <>
      <div className="sticky top-0 z-10 bg-purple-300 font-inter text-gray-900">
        <div className="container mx-auto">
          <header className="flex flex-col items-center space-x-6 px-1 py-1 sm:flex-row">
            <span className="text-3xl font-bold">E-Commerce</span>
            <nav className="flex flex-1 items-center gap-2 text-xl">
              <Link to="/" className="">
                Home
              </Link>
              <Link className="ml-auto pr-4" to="/cart">
                <ShoppingCartIcon width={24} />
              </Link>
            </nav>
          </header>
        </div>
        <div className="h-1 bg-gradient-to-r from-pink-200 via-red-200 to-orange-200 sm:h-1.5"></div>
      </div>
    </>
  );
});
