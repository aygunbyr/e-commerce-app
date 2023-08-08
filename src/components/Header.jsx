import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const Header = React.memo(() => {
  return (
    <>
      <div className="sticky top-0 z-10 mb-2 bg-rose-400 font-inter text-gray-700 shadow">
        <div className="container mx-auto">
          <header className="flex flex-col items-center space-x-6 px-1 py-1 sm:flex-row">
            <span className="text-3xl font-bold ">E-Commerce</span>
            <nav className="mt-2 flex flex-1 items-center gap-10 text-xl sm:mt-0">
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
    </>
  );
});
