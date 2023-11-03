import {
  Container,
  Description,
  Menu,
  MenuItem,
  MenuItems,
  P,
  Title,
  Wrapper,
} from "./footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const text = `All rights reserved by Easy-shop © ${currentYear}`;
  return (
    <Wrapper>
      <Container>
        <Description>
          <Title>About Us</Title>
          Easy Shop is your convenient online store, offering a wide range of
          products to meet your shopping needs. From the comfort of your home,
          you can browse and purchase a variety of items.
        </Description>
        <MenuItems>
          <Title>Our Services</Title>
          <Menu>
            <MenuItem href="#">Online Delivery</MenuItem>
            <MenuItem href="#">Customer Satisfaction</MenuItem>
            <MenuItem href="#">Hotline Number</MenuItem>
            <MenuItem href="#">Instant Feedback</MenuItem>
          </Menu>
        </MenuItems>
        <MenuItems>
          <Title>Our Privacy</Title>
          <Menu>
            <MenuItem href="#">Online Delivery</MenuItem>
            <MenuItem href="#">Customer Satisfaction</MenuItem>
            <MenuItem href="#">Hotline Number</MenuItem>
            <MenuItem href="#">Instant Feedback</MenuItem>
          </Menu>
        </MenuItems>
      </Container>
      <P>{text}</P>
    </Wrapper>
  );
};

export default Footer;
