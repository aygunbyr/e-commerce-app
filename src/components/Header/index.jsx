import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

import { useCart } from '../../context/CartContext';
import styles from './index.module.css';

function Header() {
  const { state } = useCart();

  const itemCount = state.items.length;

  return (
    <div className={styles.header}>
      <div className="container max-xl:w-96">
        <header className="flex flex-col items-center space-x-6 px-1 py-1 sm:flex-row">
          <Link to="/">
            <span className="text-3xl font-bold text-gray-100">e-commerce</span>
          </Link>
          <nav className="mt-2 flex flex-1 items-center gap-10 text-xl sm:mt-0">
            <Link to="/" className="font-bold">
              <HomeIcon width={32} />
            </Link>
            <Link className="relative ml-auto mr-4" to="/cart">
              <ShoppingCartIcon width={32} className="relative" />
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
  );
}

export default Header;
