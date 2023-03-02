import { useContext } from 'react';
import * as S from './styles';
import Context from '../../../../../context';

export default function ScreenButton({ name, link }) {
  const { setProductsSelected } = useContext(Context);

  return <S.ScreenButtonStyled onClick={() => setProductsSelected([])} to={link}>{name}</S.ScreenButtonStyled>;
}
