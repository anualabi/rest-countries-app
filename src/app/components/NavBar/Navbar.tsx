import { Container } from '../../shared/components';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { StyledNavWrapper, StyledNavBar } from './NavbarStyles';

const NavBar = () => {
  return (
    <StyledNavWrapper>
      <StyledNavBar>
        <Container>
          <h1 className="logo-text">Where in the world?</h1>
          <ThemeSwitcher />
        </Container>
      </StyledNavBar>
    </StyledNavWrapper>
  );
};

export default NavBar;
