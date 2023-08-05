import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const Header = React.memo(() => {
  return (
    <>
      <div className="bg-purple-300 font-inter">
        <div className="container mx-auto">
          <header className="flex flex-col items-center space-x-6 px-1 py-1 sm:flex-row">
            <span className="text-3xl font-bold">E-Commerce</span>
            <nav className="flex flex-1 flex-col items-center text-xl sm:flex-row">
              <Link to="/" className="">
                Home
              </Link>
              <Link className="ml-auto pr-4" to="/cart">
                <ShoppingCartIcon width={24} />
              </Link>
            </nav>
          </header>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-pink-200 via-red-200 to-orange-200"></div>
    </>
  );
});
