import React from 'react';

function BestProducts({ bestProduct }) {
    if (!bestProduct) {
      return <p>Aucun produit disponible</p>;
    }
  
    return (
    <div>
      <h2>Meilleur Produit</h2>
      <p>Nom: {bestProduct.title}</p>
      <p>Prix: {bestProduct.price}€</p>
      <p>Note: {bestProduct.rating}/5</p>
    </div>
  );
}

export default BestProducts;
