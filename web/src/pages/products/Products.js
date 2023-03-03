import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchProducts } from '../../Redux/actions';
import makeProducts from '../../services/makeProducts';
import NavBar from './components/NavBar';

function Products(props) {
  const { productsState, dispatch, cartState } = props;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <main className="bg-dark">
      <main
        className="
        d-flex flex-row flex-wrap mx-auto justify-content-center w-75 bg-dark"
      >
        <NavBar />
        {
          productsState
            .map((product) => makeProducts(product, dispatch, cartState))
        }
      </main>
    </main>
  );
}

const mapStateToProps = (state) => ({
  productsState: state.products.products,
  cartState: state.cart.cart,
});

Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  productsState: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cartState: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Products);
