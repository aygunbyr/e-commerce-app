import { Link } from 'react-router-dom';
import { ShoppingBagIcon, TrashIcon } from '../components/Icons';
import { useCart } from '../context/CartContext';
import { useMemo } from 'react';

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
    <>
      <h2 className="text-3xl">My Cart - {cart.items.length} product(s)</h2>

      {cart.items.length === 0 && <p>Cart is empty.</p>}

      {cart.items.length > 0 && (
        <>
          <table className="w-full border text-left">
            <thead className="border">
              <tr className="grid grid-cols-5">
                <th className="col-span-1 hidden p-4 sm:block"></th>
                <th className="col-span-2 hidden p-4 sm:block">
                  Product Title
                </th>
                <th className="col-span-1 hidden p-4 sm:block">Price</th>
                <th className="col-span-1 hidden p-4 sm:block">Action</th>
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
                        className="mx-auto w-32 self-center p-4"
                      />
                    </Link>
                  </td>
                  <td className="col-span-2 p-4 text-lg font-bold">
                    {product.title}
                  </td>
                  <td className="col-span-1 p-4 text-lg font-bold">
                    {product.price} ₺
                  </td>
                  <td className="col-span-1 p-4">
                    <button
                      className="flex rounded bg-rose-500 p-2 text-white"
                      onClick={() => removeItem(product)}
                    >
                      <TrashIcon aria-hidden="true" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between rounded bg-gray-50 p-4 align-baseline">
            <button
              className="mx-auto flex gap-2 rounded-lg bg-gray-900 p-4 text-gray-100"
              onClick={emptyCart}
            >
              <ShoppingBagIcon size={36} aria-hidden="true" />
              <span className="text-lg text-gray-100">Empty cart</span>
            </button>
            <div>
              <p className="text-end text-xl font-bold">Total:</p>
              <h2 className="text-end text-3xl font-bold">{totalPrice} ₺</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
