import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input,
} from 'reactstrap';
import validateFields from './validateField';
import validateCart from './validateCart';

function MakeProducts(products, dispacth, cartState) {
  const { name, url, price, id } = products;
  let quantity;

  const handleQuantity = (target) => {
    quantity = Number(target.value);
  };

  return (
    <Card
      className="Flex item"
      key={ id }
      style={ {
        width: '18rem',
        marginBottom: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem',
      } }
    >
      <img
        alt={ name }
        src={ url }
        className="img-responsive imgSize img-fluid img-thumbnail"
      />
      <CardBody className="bodyCard text-center">
        <CardTitle
          tag="h5"
        >
          { name }
        </CardTitle>
        <CardText
          className="text-center"
        >
          { ` a partir de R$ ${price} por ano` }
        </CardText>
        <div className="cardButton d-grid gap-3">
          <Input
            onChange={ (e) => handleQuantity(e.target) }
            placeholder="0"
            type="number"
            value={ quantity }
          />
          <Button
            color="danger"
            className="p-2 flex-fill"
            name="sobre"
            onClick={ () => validateCart(cartState, {
              name, url, price, id, quantity }, dispacth) }
            disabled={ validateFields(Number(quantity)) }
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default MakeProducts;
