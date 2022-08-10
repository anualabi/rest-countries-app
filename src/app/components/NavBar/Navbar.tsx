import { Container } from '../../shared/components';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { StyledNavBar } from './NavbarStyles';

const NavBar = () => {
  return (
    <div style={{ marginBottom: '6.5rem' }}>
      <StyledNavBar>
        <Container>
          <h1 className="logo-text">Where in the world?</h1>
          <ThemeSwitcher />
        </Container>
      </StyledNavBar>
    </div>
  );
};

export default NavBar;
