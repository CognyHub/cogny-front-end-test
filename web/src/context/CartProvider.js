import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState();

    const contextUser = useMemo(() => ({
      orders,
      total,
      setOrders,
      setTotal
    }), [orders, total]);
    return (
      <CartContext.Provider value={ contextUser }>
        { children }
      </CartContext.Provider>
    );
  }
  export default CartProvider;
  CartProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  }.isRequired;