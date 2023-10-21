import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';

import styles from './index.module.css';
import { useCart } from '../../context/CartContext';
import { fetchProduct } from '../../api';

function ProductDetail() {
  const { productId } = useParams();
  const { state, dispatch } = useCart();

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => fetchProduct(productId),
  });

  const itemInCart = state.items.some((item) => item.id === product?.data.id);

  const toggleCartAction = () => {
    const actionType = itemInCart ? 'REMOVE_ITEM' : 'ADD_ITEM';
    dispatch({ type: actionType, payload: product.data });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <section id="page-product-detail" className="max-w-full">
      {product && (
        <>
          <div className="mt-10 flex flex-col items-start gap-10 sm:flex-row">
            <div className="w-80 max-w-full p-4">
              <img
                src={product.data.image}
                alt="product"
                className="mix-blend-multiply"
              />
            </div>
            <div className="flex max-w-full flex-1 flex-col gap-5">
              <h2 className="text-3xl">{product.data.title}</h2>
              <p className="text-2xl font-bold">{product.data.price} ₺</p>
              <p>{product.data.description}</p>
              <p>Category: {product.data.category}</p>
              <p>
                Rating:{' '}
                <span className="font-bold">{product.data.rating.rate}</span> (
                {product.data.rating.count} votes)
              </p>
              <button
                className={styles['cart-button']}
                onClick={toggleCartAction}
              >
                {itemInCart ? (
                  <>
                    <TrashIcon aria-hidden="true" width={24} /> Remove from Cart
                  </>
                ) : (
                  <>
                    <ShoppingCartIcon aria-hidden="true" width={24} /> Add to
                    Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ProductDetail;
