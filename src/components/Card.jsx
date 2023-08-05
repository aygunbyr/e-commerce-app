import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function Card({ title, price, image }) {
  return (
    <div className="border-1 flex h-[460px] w-72 flex-col gap-1 rounded-lg border border-gray-300 bg-gradient-to-t from-gray-100 to-white px-1 py-1">
      <div className="flex h-60 items-center">
        <img className="ml-auto mr-auto h-48" src={image} alt="Product" />
      </div>
      <div className="flex w-full flex-1 items-center justify-between gap-1 rounded-sm px-2">
        <h2 className="text-lg">{title}</h2>
        <p className="space-x-2 whitespace-nowrap text-lg font-bold text-violet-500">
          {price} ₺
        </p>
      </div>
      <button className="flex items-center justify-center gap-1 rounded-md bg-pink-500 p-1 text-gray-100">
        <ShoppingCartIcon aria-hidden="true" width={24} /> Add to Cart
      </button>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};
