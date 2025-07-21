import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
        <h3>{product.name}</h3>
        <p>Цена: {product.price} $</p>
      </Link>
    </div>
  );
};
