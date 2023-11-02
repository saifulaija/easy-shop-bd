import { Button, ButtonContainer, Container, Description, Image, Left, Right, Title, Wrapper } from "./hero.styles";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Title>Your one-stop online shopping destination!</Title>
          <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate laboriosam doloribus velit optio neque fugiat, explicabo, nostrum beatae unde odit error vero voluptatum! Eius commodi dicta deleniti quas, qui repellendus.</Description>
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
