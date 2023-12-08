import React from 'react';

function LatestProducts({ products }) {
  return (
    <div>
      <h2>Derniers Produits</h2>
      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default LatestProducts;
