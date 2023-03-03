import React, { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px',
};

function Header() {
  const totalProductsOnCart = useSelector((state) => state.cart.product.length);
  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#FFFFFF' }}>COGNYSHOES</h1>
      <div>
        <h3 style={{ color: '#FFFFFF' }}>Meu carrinho</h3>
        <p style={{ color: '#78787C' }}>
          Items:
          {' '}
          {totalProductsOnCart}
        </p>
        <Link to="/cart">Ver carrinho</Link>
      </div>
    </div>
  );
}

export default Header;
