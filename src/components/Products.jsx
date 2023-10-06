import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Card from './Card';
import { fetchProducts } from '../api';

function Products({ children }) {
  const [filter, setFilter] = useState('all');

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const filteredProducts = useMemo(() => {
    if (!products) {
      return [];
    }
    if (filter === 'all') {
      return products.data;
    } else {
      return products.data.filter((item) => item.category === filter);
    }
  }, [filter, products]);

  const categories = [
    { name: 'electronics', emoji: '💻' },
    { name: 'jewelery', emoji: '💎' },
    { name: "men's clothing", emoji: '👔' },
    { name: "women's clothing", emoji: '👗' },
  ];

  useEffect(() => {}, [filter, products]);

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
      <form id="filter" className="filter-form" onSubmit={handleSubmit}>
        <label htmlFor="filter" className="text-white">
          Filter by:{' '}
        </label>
        <select
          className="rounded p-1 focus:outline-none"
          id="filter"
          name="filter"
          type="text"
          onChange={handleChangeFilter}
          value={filter}
        >
          <option value="all">All products</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.emoji} {category.name}
            </option>
          ))}
        </select>
      </form>
      <section id="products" className="cards-grid">
        {filteredProducts?.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </section>
    </>
  );
}

export default Products;
