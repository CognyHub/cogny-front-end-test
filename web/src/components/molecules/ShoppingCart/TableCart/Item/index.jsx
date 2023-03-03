import { CardPrice } from '../../../../atoms/home/Cards';
import { InputNumber, Product } from '../../../../atoms/ShoppingCart/TableCart';
import * as S from './styles';

export default function Item({
  image,
  title,
  qtd,
  price,
  handleSub,
  handleAdd,
  handleRemoveAll
}) {
  return (
    <tr>
      <td>
        <Product image={image} title={title} price={(price)} />
      </td>
      <td>
        <InputNumber handleSub={handleSub} handleAdd={handleAdd} value={qtd} />
      </td>
      <S.Price>
        <CardPrice number={qtd * price} />
      </S.Price>
      <td>
        <button
          onClick={handleRemoveAll}
          style={{
            display: 'flex',
            justifyContent: 'end',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <img style={{width: "25px", height: "25px"}} src="/assets/trash.png" alt="excluir"/>
        </button>
      </td>
    </tr>
  );
}
