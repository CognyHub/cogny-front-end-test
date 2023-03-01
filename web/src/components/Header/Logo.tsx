import cognyshoesLogo from '../../assets/images/cognyshoesLogo.svg';
import { StyledLogo } from './styles';

export function Logo() {
  return (
    <StyledLogo to="/">
      <img src={cognyshoesLogo} alt="Logo CognyShoes" />
    </StyledLogo>
  );
}
