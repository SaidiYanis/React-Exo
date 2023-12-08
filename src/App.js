import React from 'react';
import Header from './Header';
import BestProducts from './bestproducts';
import LatestProducts from './lastestproducts';
import Footer from './footer';
import { products } from './products'; 

const bestProduct = products.reduce((prev, current) => (prev.rating > current.rating) ? prev : current); 
const latestProducts = products.filter(p => p.isPublished).slice(-5); 

function App() {
  return (
    <div className="App">
      <Header />
      <BestProducts bestProduct={bestProduct} />
      <LatestProducts products={latestProducts} />
      <Footer />
    </div>
  );
}

export default App;