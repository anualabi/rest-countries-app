import Container from '../../shared/components/Container';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { StyledNavBar } from './NavbarStyles';

const NavBar = () => {
  return (
    <StyledNavBar>
      <Container>
        <h1 className="logo-text">Where in the world?</h1>
        <ThemeSwitcher />
      </Container>
    </StyledNavBar>
  );
};

export default NavBar;
