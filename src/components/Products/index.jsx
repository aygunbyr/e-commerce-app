import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Card from '../Card';
import { fetchCategories, fetchProducts } from '../../api';
import styles from './index.module.css';
import { toCapitalCase } from '../../utils';

function Products() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const {
    isLoading: isLoadingProducts,
    error: errorProducts,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    const filteredByCategory =
      filter === 'all'
        ? products.data
        : products.data.filter((item) => item.category === filter);

    const searchLowerCase = search.toLowerCase();

    const filteredBySearchTerm = search
      ? filteredByCategory.filter(
          (item) =>
            item.title.toLowerCase().includes(searchLowerCase) ||
            item.description.toLowerCase().includes(searchLowerCase),
        )
      : filteredByCategory;

    return filteredBySearchTerm;
  }, [filter, products, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoadingProducts || isLoadingCategories) {
    return <div>Loading...</div>;
  }

  if (errorProducts) {
    return <div>An error occured: {errorProducts.message}</div>;
  }

  if (errorCategories) {
    return <div>An error occured: {errorCategories.message}</div>;
  }

  return (
    <>
      <form
        id="filter-form"
        className={styles['filter-form']}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-2 self-start">
          <label htmlFor="filter-select" className="w-20 min-w-fit text-white">
            Filter by:
          </label>
          <select
            className="rounded p-1 focus:outline-none"
            id="filter-select"
            name="filter"
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="all">All Categories</option>?
            {categories?.data.map((category, index) => (
              <option key={index} value={category}>
                {toCapitalCase(category)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 self-start">
          <label
            htmlFor="search"
            className="w-20 min-w-fit text-white sm:hidden"
          >
            Search:
          </label>
          <input
            className="max-w-fit rounded p-0.5 focus:outline-none"
            id="search"
            name="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </form>
      <section id="products" className={styles['cards-grid']}>
        {filteredProducts?.map((product) => {
          return (
            <div className={styles['flex-item']}>
              <Card key={product.id} product={product} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Products;
