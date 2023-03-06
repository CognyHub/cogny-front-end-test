import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
// import saveCartInfo from '../helpers/saveCartInfo';
import getCartInfo from '../../helpers/getCartInfo';
import CognyContext from '../../context/CognyContext';
import formatCurrency from '../FormatCurrency';
import ProductsCard from './ProductsCard';
import { ProductsDivS } from './Style';

function MainComponent() {
  const { products, balance } = useContext(CognyContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [productsToRender, setProductsToRender] = useState([]);
  const [balanceToRender, setBalanceToRender] = useState(0);

  useEffect(() => {
    setProductsToRender(products);
    setBalanceToRender(balance);
  }, [products, balance]);

  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = getCartInfo();
    if (cartItems.length > 0) {
      setIsCartEmpty(false);
    }
  }, []);

  return (
    <div id="mainDiv">
      <ProductsDivS>
        {productsToRender?.map((product) => (
          <div key={product.id}>
            <ProductsCard product={product} />
          </div>
        ))}
      </ProductsDivS>
      <div id="cart">
        {isCartEmpty ? null : (
          <button
            type="button"
            onClick={() => navigate('/cart')}
          >
            <FaShoppingCart id="cartIcon" />
            Total de seu carrinho:
            {' '}
            {formatCurrency(balanceToRender).replace('.', ',')}
            `$
            {getCartInfo().length}
            {' '}
            items`
          </button>
        )}
      </div>
    </div>
  );
}

export default MainComponent;
