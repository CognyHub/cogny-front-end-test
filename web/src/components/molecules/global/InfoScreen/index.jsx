import {
  ScreenButton,
  ScreenImage,
  ScreenTitle
} from '../../../atoms/global/InfoScreen';
import * as S from './styles';

export default function InfoScreen({
  title,
  image,
  link,
  isPurchaseMade
}) {
  return (
    <S.Container isPurchaseMade={isPurchaseMade}>
      <ScreenTitle name={title} />
      <ScreenImage link={image} />
      <ScreenButton link={link} name="VOLTAR" />
    </S.Container>
  );
}
