import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CarShop(props) {
  const { cartState } = props;
  return (
    <div className="text-light">
      <p>Meu carrinho</p>
      <p>
        { `${cartState ? cartState.length : 0} itens` }
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartState: state.cart.cart,
});

CarShop.propTypes = {
  cartState: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(CarShop);
