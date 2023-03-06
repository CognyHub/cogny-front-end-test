import React, { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiRunningShoe } from 'react-icons/gi';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '30px 50px',
  alignItems: 'center',
};

function Header() {
  const totalProductsOnCart = useSelector((state) => state.cart.product.length);
  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#FFFFFF' }}>
        COGNYSHOES
        {' '}
        <GiRunningShoe className="icon-border-white" />
      </h1>

      <div>
        <h3 style={{ color: '#FFFFFF' }}>Meu carrinho</h3>
        <p style={{ color: '#78787C' }}>
          Items:
          {' '}
          {totalProductsOnCart}
        </p>
        <Link style={{ color: '#0C5ABF' }} to="/cart">
          Ver carrinho
        </Link>
      </div>
    </div>
  );
}

export default Header;
