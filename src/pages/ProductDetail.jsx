import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';

import { useCart } from '../context/CartContext';
import { fetchProduct } from '../api';

export const ProductDetail = () => {
  const { productId } = useParams();
  const { state, dispatch } = useCart();

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => fetchProduct(productId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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
    <div className="px-4">
      {product && (
        <>
          <h2 className="mt-10 text-3xl">{product.data.title}</h2>

          <div className="flex flex-col items-start gap-10 sm:flex-row">
            <div className="w-[300px] p-4">
              <img src={product.data.image} alt="product" />
            </div>
            <div className="flex w-[300px] flex-col gap-4">
              <p className="text-2xl font-bold">{product.data.price} ₺</p>
              <p>{product.data.description}</p>
              <p>Category: {product.data.category}</p>
              <p>
                Rating:{' '}
                <span className="font-bold">{product.data.rating.rate}</span> (
                {product.data.rating.count} votes)
              </p>
              <button className="card-button" onClick={toggleCartAction}>
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
    </div>
  );
};
