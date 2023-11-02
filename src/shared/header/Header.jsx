import {
      Button,
  Container,
  LeftItem,
  Logo,
  Menu,
  MenuItem,
  MiddleItem,
  RightItem,
  Wrapper,
} from "./header.styles";

const Header = () => {
  const navItem = (
    <>
      <MenuItem>Home</MenuItem>
      <MenuItem>Shop</MenuItem>
      <MenuItem>Contact</MenuItem>
    </>
  );

  return (
    <Wrapper>
      <Container>
        <RightItem>
          <Logo>Easy Shop</Logo>
        </RightItem>
        <MiddleItem>
          <Menu>{navItem}</Menu>
        </MiddleItem>
        <LeftItem>
            <Button>
                  Login
            </Button>
        </LeftItem>
      </Container>
    </Wrapper>
  );
};

export default Header;
