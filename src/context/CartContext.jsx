import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  items: [],
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const EMPTY_CART = 'EMPTY_CART';
const INCREASE_QTY = 'INCREASE_QTY';
const DECREASE_QTY = 'DECREASE_QTY';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case EMPTY_CART:
      return {
        ...state,
        items: [],
      };

    case INCREASE_QTY:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case DECREASE_QTY:
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
};

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const storedCart = localStorage.getItem('cart');
  const [state, dispatch] = useReducer(
    cartReducer,
    storedCart ? JSON.parse(storedCart) : initialState,
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return context;
};
