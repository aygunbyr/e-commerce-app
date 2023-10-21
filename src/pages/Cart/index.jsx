import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

import styles from './index.module.css';
import { useCart } from '../../context/CartContext';

function Cart() {
  const { state: cart, dispatch } = useCart();

  const removeItem = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product });
  };

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  const totalPrice = useMemo(() => {
    return cart.items
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  }, [cart.items]);

  return (
    <section id="page-cart" className="mt-8">
      <h2 className="mb-4 text-3xl font-semibold">My Cart</h2>
      <h3 className="mb-4 text-xl">
        {cart.items.length > 0
          ? `You have ${cart.items.length} product(s) in your cart`
          : `Your cart is empty.`}
      </h3>

      {cart.items.length > 0 && (
        <>
          <table className="mb-4 w-full border text-left shadow-sm shadow-zinc-900">
            <thead className="border bg-zinc-900 text-zinc-100">
              <tr className="grid grid-cols-6">
                <th className="col-span-1 hidden p-4 text-center sm:block">
                  Photo
                </th>
                <th className="col-span-6 hidden p-4 sm:col-span-2 sm:block">
                  Product
                </th>
                <th className="col-span-1 hidden p-4 text-center sm:block">
                  Price
                </th>
                <th className="col-span-1 hidden p-4 text-center sm:block">
                  Quantity
                </th>
                <th className="col-span-1 hidden p-4 text-start sm:block">
                  Action
                </th>
                {/* <th className="col-span-6 p-4 text-center sm:hidden">
                  Product
                </th> */}
              </tr>
            </thead>
            <tbody className="flex flex-col">
              {cart.items.map((product, index) => (
                <tr
                  key={index}
                  className="grid grid-cols-2 items-center border sm:grid-cols-6 sm:border-0"
                >
                  <td className="col-span-2 p-4 sm:col-span-1">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="mx-auto w-32 self-center p-4 mix-blend-multiply lg:hover:scale-110"
                      />
                    </Link>
                  </td>
                  <td className="col-span-2 p-4 text-lg font-bold">
                    {product.title}
                  </td>
                  <td className="col-span-1 p-4 text-center text-lg font-bold">
                    {product.price} ₺
                  </td>
                  <td className="col-span-1 flex items-center justify-center gap-4 p-4 text-center text-lg font-bold">
                    <button
                      className="rounded-sm bg-red-700 p-0.5 text-white shadow-red-700 transition-all duration-200 lg:hover:bg-red-600 lg:hover:shadow-red-600"
                      onClick={() =>
                        dispatch({ type: 'DECREASE_QTY', payload: product.id })
                      }
                    >
                      <MinusIcon width={24} className="" />
                    </button>
                    {product.quantity} Pcs.
                    <button
                      className="rounded-sm bg-green-700 p-0.5 text-white shadow shadow-green-700 transition-all duration-200 lg:hover:bg-green-600 lg:hover:shadow-green-600"
                      onClick={() =>
                        dispatch({ type: 'INCREASE_QTY', payload: product.id })
                      }
                    >
                      <PlusIcon width={24} className="" />
                    </button>
                  </td>
                  <td className="col-span-1 p-4">
                    <button
                      className="min-w-content flex items-center gap-2 rounded bg-zinc-900 p-2 text-white transition-colors duration-200 lg:hover:bg-rose-900"
                      onClick={() => removeItem(product)}
                    >
                      <TrashIcon width={24} aria-hidden="true" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="max-lg: flex flex-wrap items-start justify-between gap-5 rounded bg-gray-50 p-4 align-baseline max-lg:flex-wrap-reverse max-lg:justify-center max-lg:gap-10">
            <button
              className={styles['empty-cart-button']}
              onClick={() => {
                emptyCart();
                alert('Your products have been shipped');
              }}
            >
              <ShoppingBagIcon width={32} aria-hidden="true" />
              <span className="text-lg text-gray-100">Checkout</span>
            </button>
            <div className="flex flex-col items-center justify-center md:items-end">
              <p className="text-end text-xl font-bold">Total:</p>
              <h2 className="text-end text-3xl font-bold">{totalPrice} ₺</h2>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
