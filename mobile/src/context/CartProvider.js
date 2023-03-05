import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
    const [orders, setOrders] = useState([]);

    const contextCart = useMemo(() => ({
      orders,
      setOrders,
    }), [orders]);
    return (
      <CartContext.Provider value={ contextCart }>
        { children }
      </CartContext.Provider>
    );
  }
  export default CartProvider;
  CartProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  }.isRequired;