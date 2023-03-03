import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import EmptyCard from './components/EmptyCart';
import NavBar from '../products/components/NavBar';
import { cartCleaner } from '../../Redux/actions';
import MakeCheckout from './components/MakeCheckout';

function CheckOut(props) {
  const { dispatch, cartState } = props;
  const redirect = useNavigate();

  const isComplete = () => {
    redirect('/products');
    dispatch(cartCleaner());
    return alert('CompraFinalizada!');
  };

  const totalHandler = (cart) => {
    const total = [];
    console.log(cart);

    if (cart.length === 1) {
      return (Number(cart[0].product.quantity) * Number(cart[0].product.price))
        .toString().replace('.', ',');
    }
    if (cart.length > 1) {
      cart.map((item) => {
        const calc = item.product.price * item.product.quantity;
        return total.push(calc);
      });
      const sum = total.reduce((acc, value) => acc + value, 0);
      return sum;
    }
  };

  return (
    <main className="bg-dark">
      <main
        className="
        d-flex flex-row flex-wrap mx-auto justify-content-center w-75 bg-dark"
      >
        <NavBar />
        {
          cartState.length > 0 ? (
            <Container
              className="text-center"
              style={ {
                marginTop: '50px',
              } }
            >
              <h1
                className="display-1"
              >
                Finalize sua compra
              </h1>
              <Table responsive className="text-light">
                <thead>
                  <tr className="d-flex text-center">
                    <th className="p-2 flex-fill">
                      Produto
                    </th>
                    <th className="p-2 flex-fill">
                      QTD
                    </th>
                    <th className="p-2 flex-fill">
                      Preço
                    </th>
                  </tr>
                </thead>
                <tbody>
                  { cartState.map((item, index) => MakeCheckout(item, index)) }
                </tbody>
              </Table>
              <Container
                className="text-light d-flex  my-5 justify-content-between"
              >
                <Button
                  color="danger"
                  onClick={ isComplete }
                >
                  Finalize o pedido
                </Button>
                <h5>{`Total R$ ${totalHandler(cartState)}0` }</h5>
              </Container>
            </Container>) : <EmptyCard />
        }
      </main>
    </main>
  );
}

const mapStateToProps = (state) => ({
  cartState: state.cart.cart,
});

CheckOut.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cartState: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(CheckOut);
