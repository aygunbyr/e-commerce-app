import React from 'react';
import PropTypes from 'prop-types';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const Card = ({ title, price, image }) => {
  return (
    <div className="card">
      <img
        className="mx-3 my-2 ml-auto mr-auto h-44 self-center"
        src={image}
        alt="Product"
      />
      <div className="flex flex-1 flex-col">
        <h2 className="line-clamp-3 px-2 text-lg uppercase">{title}</h2>
        <p className="mt-auto self-end whitespace-nowrap px-2 text-3xl font-bold text-gray-700">
          {price} ₺
        </p>
      </div>
      <button className="card-button">
        <ShoppingCartIcon aria-hidden="true" width={24} /> Add to Cart
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};
