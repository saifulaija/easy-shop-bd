import { Button, ButtonContainer, Container, Description, Image, Left, Right, Title, Wrapper } from "./hero.styles";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Title>Your one-stop online shopping destination!</Title>
          <Description>Easy Shop is your convenient online store, offering a wide range of products to meet your shopping needs. From the comfort of your home, you can browse and purchase a variety of items. We provide a seamless shopping experience, delivering quality and satisfaction at your fingertips</Description>
          <ButtonContainer>
            <Button>About Us</Button>
            <Button>Know More</Button>
          </ButtonContainer>
        </Left>
        <Right>
          <Image src="https://i.ibb.co/WxRj03x/hero-Image.png"></Image>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Hero;
