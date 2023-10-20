import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';

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
      .reduce((acc, product) => acc + product.price, 0)
      .toFixed(2);
  }, [cart.items]);

  return (
    <section id="cart-page" className="mt-8">
      <h2 className="mb-4 text-3xl font-semibold">
        My Cart - {cart.items.length} product(s)
      </h2>

      {cart.items.length === 0 && <p className="text-lg">Cart is empty.</p>}

      {cart.items.length > 0 && (
        <>
          <table className="mb-4 w-full border text-left shadow-sm shadow-zinc-900">
            <thead className="border bg-zinc-900 text-zinc-100">
              <tr className="grid grid-cols-5">
                <th className="col-span-1 hidden p-4 text-center sm:block">
                  Photo
                </th>
                <th className="col-span-2 hidden p-4 sm:block">Product</th>
                <th className="col-span-1 hidden p-4 text-end sm:block">
                  Price
                </th>
                <th className="col-span-1 hidden p-4 text-start sm:block">
                  Action
                </th>
                <th className="col-span-5 p-4 text-center sm:hidden">
                  Product
                </th>
              </tr>
            </thead>
            <tbody className="flex flex-col">
              {cart.items.map((product, index) => (
                <tr
                  key={index}
                  className="grid grid-cols-2 items-center border sm:grid-cols-5 sm:border-0"
                >
                  <td className="col-span-2 p-4 sm:col-span-1">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="mx-auto w-32 self-center p-4 mix-blend-multiply hover:scale-110"
                      />
                    </Link>
                  </td>
                  <td className="col-span-2 p-4 text-lg font-bold">
                    {product.title}
                  </td>
                  <td className="col-span-1 p-4 text-end text-lg font-bold">
                    {product.price} ₺
                  </td>
                  <td className="col-span-1 p-4">
                    <button
                      className="min-w-content flex items-center gap-2 rounded bg-zinc-900 p-2 text-white transition-colors duration-300 hover:bg-rose-900"
                      onClick={() => removeItem(product)}
                    >
                      <TrashIcon width={24} aria-hidden="true" />
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="max-lg: flex flex-wrap items-start justify-between gap-5 rounded bg-gray-50 p-4 align-baseline max-lg:flex-wrap-reverse max-lg:justify-center max-lg:gap-10">
            <button className={styles['empty-cart-button']} onClick={emptyCart}>
              <ShoppingBagIcon width={32} aria-hidden="true" />
              <span className="text-lg text-gray-100">Empty cart</span>
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
