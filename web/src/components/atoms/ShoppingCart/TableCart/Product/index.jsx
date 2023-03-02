import { CardImage, CardPrice, CardTitle } from '../../../home/Cards';
import * as S from './styles';

export default function Product({ image, title, price }) {
  return (
    <S.Container>
      <S.ImageContainer>
        <CardImage link={image} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <CardTitle name={title} />
        <CardPrice number={price} />
      </S.DescriptionContainer>
    </S.Container>
  )
};
