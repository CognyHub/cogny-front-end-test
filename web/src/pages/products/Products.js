import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { fetchProducts } from '../../Redux/actions';
import makeProducts from '../../services/makeProducts';
import NavBar from './components/NavBar';

function Products(props) {
  const { productsState, dispatch, isFetching, cartState } = props;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isFetching) return <Spinner>Carregando...</Spinner>;

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
  isFetching: state.products.isFetching,
});

Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  productsState: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cartState: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Products);
