import PropTypes from 'prop-types';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon as ShoppingCartIconSolid } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

import { useCart } from '../../context/CartContext';
import styles from './index.module.css';

function Card({ product }) {
  const { title, price, image } = product;
  const { state, dispatch } = useCart();
  const itemInCart = state.items.some((item) => item.id === product.id);

  const toggleCartAction = () => {
    const actionType = itemInCart ? 'REMOVE_ITEM' : 'ADD_ITEM';
    dispatch({ type: actionType, payload: product });
  };

  return (
    <div id="product-card" className={`${styles.card} group`}>
      <Link
        aria-label={product.title}
        className="mt-2 flex flex-col"
        key={product.id}
        to={`/product/${product.id}`}
      >
        <img
          className="h-36 self-center object-cover mix-blend-multiply"
          src={image}
          alt="Product"
        />
        <div className="absolute top-40 flex flex-1 flex-col">
          <h2 className="line-clamp-1 text-lg font-medium">{title}</h2>
          <p className="whitespace-nowrap text-2xl font-bold">{price} ₺</p>
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
