import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';

import { useCart } from '../context/CartContext';

export const Card = (product) => {
  const { title, price, image } = product;
  const { state, dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product,
    });
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: product });
  };

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
      {!state.items.includes(product) && (
        <button className="card-button" onClick={addToCart}>
          <ShoppingCartIcon aria-hidden="true" width={24} /> Add to Cart
        </button>
      )}
      {state.items.includes(product) && (
        <button className="card-button" onClick={removeItem}>
          <TrashIcon aria-hidden="true" width={24} /> Remove from Cart
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};
