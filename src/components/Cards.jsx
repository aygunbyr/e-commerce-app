import React from 'react';

export function Cards({ children }) {
  return (
    <section
      id="cards"
      className="grid grid-cols-1 place-items-center justify-center gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {children}
    </section>
  );
}
