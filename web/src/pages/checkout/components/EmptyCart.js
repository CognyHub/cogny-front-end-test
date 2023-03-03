import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default function EmptyCart() {
  return (
    <main
      className="
      d-flex flex-row flex-wrap mx-auto justify-content-center w-75 bg-dark"
    >
      <Container className="text-center bg-dark p-2 text-ligth bg-opacity-75">
        <h1 className="text-light">Seu carrinho esta Vazio</h1>
        <Link to="/products">
          <Button color="danger">
            Va para o Produtos
          </Button>
        </Link>
      </Container>
    </main>
  );
}
