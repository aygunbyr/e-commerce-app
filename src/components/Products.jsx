import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/fakeStoreApi';
import { Card } from './Card';

export function Products({ children }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <section
      id="products"
      className="grid grid-cols-1 place-items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {data?.data.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </section>
  );
}
