import PropTypes from 'prop-types';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';

import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Card = (product) => {
  const { title, price, image } = product;
  const { state, dispatch } = useCart();
  const itemInCart = state.items.some((item) => item.id === product.id);

  const toggleCartAction = () => {
    const actionType = itemInCart ? 'REMOVE_ITEM' : 'ADD_ITEM';
    dispatch({ type: actionType, payload: product });
  };

  return (
    <>
      <div className="card">
        <Link
          className="flex h-96 flex-col"
          key={product.id}
          to={`/product/${product.id}`}
        >
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
        </Link>
        <button className="card-button" onClick={toggleCartAction}>
          {itemInCart ? (
            <>
              <TrashIcon aria-hidden="true" width={24} /> Remove from Cart
            </>
          ) : (
            <>
              <ShoppingCartIcon aria-hidden="true" width={24} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </>
  );
};

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
