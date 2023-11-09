import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon as ShoppingCartIconSolid } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useCart } from '../../context/CartContext';
import styles from './index.module.css';

function Card({ product }) {
  const { title, price, image } = product;
  const { state, dispatch } = useCart();
  const itemInCart = state.items.some((item) => item.id === product.id);

  const toggleCartAction = () => {
    const actionType = itemInCart ? 'REMOVE_ITEM' : 'ADD_ITEM';
    itemInCart
      ? toast.error(`${title} removed from cart 🛒`)
      : toast.success(`${title} added to cart 🛒`);
    dispatch({ type: actionType, payload: product });
  };

  return (
    <div id="product-card" className={`${styles.card} group`}>
      <ToastContainer position="top-center" theme="dark" hideProgressBar />
      <Link
        aria-label={product.title}
        className="mt-2 flex flex-col"
        key={product.id}
        to={`/product/${product.id}`}
      >
        <img
          className="h-36 self-center object-cover mix-blend-multiply"
          src={image}
          alt={product.title}
          aria-label={product.title}
        />
        <div className="absolute top-44">
          <h2 className="line-clamp-2 text-[18px] font-medium leading-tight">
            {title}
          </h2>
        </div>
        <div className="absolute top-56">
          <p className="whitespace-nowrap text-[28px] font-bold leading-tight">
            {price} ₺
          </p>
        </div>
      </Link>
      <button
        className={`${styles['card-button']} group-hover:flex`}
        aria-label={
          itemInCart ? 'Remove product from cart' : 'Add product to cart'
        }
        onClick={toggleCartAction}
      >
        {itemInCart ? (
          <>
            <ShoppingCartIconSolid aria-hidden="true" width={20} />
          </>
        ) : (
          <>
            <ShoppingCartIcon aria-hidden="true" width={20} />
          </>
        )}
      </button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;
