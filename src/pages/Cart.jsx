import { ShoppingBagIcon, TrashIcon } from '../components/Icons';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { state, dispatch } = useCart();

  const removeItem = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product });
  };

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  return (
    <>
      <h2 className="text-3xl">My Cart - {state.items.length} product(s)</h2>

      {state.items.length === 0 && <p>Cart is empty.</p>}

      {state.items.length > 0 && (
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
              {state.items.map((product, index) => (
                <tr
                  key={index}
                  className="grid grid-cols-2 items-center border sm:grid-cols-5 sm:border-0"
                >
                  <td className="col-span-2 p-4 sm:col-span-1">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="mx-auto w-32 self-center p-4"
                    />
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
          <button
            className="mx-auto flex gap-2 rounded-lg bg-gray-200 p-4"
            onClick={emptyCart}
          >
            <ShoppingBagIcon size={36} aria-hidden="true" />
            <span className="text-lg">Empty cart</span>
          </button>
        </>
      )}
    </>
  );
};
