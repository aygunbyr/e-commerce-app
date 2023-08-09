import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action.payload);
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: [...state.items.filter((item) => item !== action.payload)],
      };

    case 'EMPTY_CART':
      return {
        ...state,
        items: [],
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
