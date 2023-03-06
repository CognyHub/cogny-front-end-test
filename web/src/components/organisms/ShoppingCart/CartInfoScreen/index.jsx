import InfoScreen from '../../../molecules/global/InfoScreen';
import * as S from './styles';

export default function CartInfoScreen({text}) {
  return (
    <S.Container>
      <InfoScreen
        isPurchaseMade={false}
        title={text}
        image="/assets/cartEmpty.png"
        link="/"
      />
    </S.Container>
  );
}
