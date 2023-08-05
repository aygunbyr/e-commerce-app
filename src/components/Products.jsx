import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card } from './Card';
import { fetchProducts } from '../services/fakeStoreApi';

export function Products({ children }) {
  const [filter, setFilter] = useState('all');
  const [filtered, setFiltered] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  useEffect(() => {
    if (filter === 'all') {
      setFiltered(data?.data);
    } else {
      const newFiltered = data?.data.filter((item) => item.category === filter);
      setFiltered(newFiltered);
    }
  }, [filter, data]);

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <form
        id="filter"
        className="w-full space-x-2 rounded-lg bg-purple-200 p-2 text-gray-900"
        onSubmit={handleSubmit}
      >
        <label htmlFor="filter">Filter by: </label>
        <select
          className="rounded p-1 focus:outline-none"
          id="filter"
          name="filter"
          type="text"
          onChange={handleChangeFilter}
          value={filter}
        >
          <option value="all">All products</option>
          {categories.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
        </select>
      </form>
      <section
        id="products"
        className="grid grid-cols-1 place-items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered?.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </section>
    </>
  );
}
