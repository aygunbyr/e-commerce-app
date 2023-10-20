import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Card from '../Card';
import { fetchCategories, fetchProducts } from '../../api';
import styles from './index.module.css';

function Products({ children }) {
  const [filter, setFilter] = useState('all');

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const {
    isLoadingCategories,
    errorCategories,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
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

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoading || isLoadingCategories) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  if (errorCategories) {
    return <div>An error occured: {errorCategories.message}</div>;
  }

  return (
    <>
      <form
        id="filter"
        className={styles['filter-form']}
        onSubmit={handleSubmit}
      >
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
          <option value="all">All products</option>?
          {categories?.data.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      <section id="products" className={styles['cards-grid']}>
        {filteredProducts?.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </section>
    </>
  );
}

export default Products;
