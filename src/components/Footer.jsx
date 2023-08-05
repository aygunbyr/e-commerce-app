import React from 'react';

function Footer() {
  return (
    <footer className="min-h-20 bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col gap-10 sm:flex-row">
        <span className="text-3xl font-bold text-gray-500">E-Commerce</span>
        <div className="space-y-1 text-gray-900">
          <h3 className="text-lg">Created by Aygün Bayır</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
