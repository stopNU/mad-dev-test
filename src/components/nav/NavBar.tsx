import styled from "styled-components";
import { Link } from "@material-ui/core";

const NavWrapper = styled.nav`
  background-color: black;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  height: 60px;
  padding: 0 15px;
  background-color: black;
  & .logo {
    flex: 1;
  }
`;

const LinkList = styled.div`
  display: flex;
  column-gap: 15px;
`;

const LinkButton = styled(Link)``;

const NavBar = () => {
  return (
    <NavWrapper>
      <Nav>
        <LinkButton href="#" className="logo" color="inherit">
          Logo
        </LinkButton>
        <LinkList>
          <LinkButton href="#" color="inherit">
            Home
          </LinkButton>
          <LinkButton href="#" color="inherit">
            About
          </LinkButton>
        </LinkList>
      </Nav>
    </NavWrapper>
  );
};

export default NavBar;
