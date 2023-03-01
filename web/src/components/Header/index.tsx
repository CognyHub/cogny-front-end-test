import { Logo } from './Logo';
import { StyledContainer } from './styles';
import { UserCart } from './UserCart';

function Header() {
  return (
    <StyledContainer>
      <Logo />
      <UserCart />
    </StyledContainer>
  );
}

export default Header;
