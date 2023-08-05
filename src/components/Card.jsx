import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function Card() {
  return (
    <div className="border-1 flex h-72 w-72 flex-col gap-1 rounded-lg border border-gray-500 bg-gradient-to-t from-gray-100 to-white px-1 py-1">
      <img
        className="ml-auto mr-auto h-48"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="flex w-full flex-1 items-center justify-between rounded-sm bg-gray-200 p-1">
        <h2 className="font-bold">Product Name</h2>
        <p className="text-xl font-bold text-blue-500">109,90 ₺</p>
      </div>
      <button className="flex items-center justify-center gap-1 rounded-md bg-purple-500 p-1 text-gray-100">
        <ShoppingCartIcon aria-hidden="true" width={24} /> Add to Cart
      </button>
    </div>
  );
}
