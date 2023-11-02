import { Container, LeftItem, MiddleItem, RightItem, Wrapper } from "./header.styles";


const Header = () => {
      return (
            <Wrapper>
               <Container>
                  <RightItem>Right</RightItem>
                  <MiddleItem>Left</MiddleItem>
                  <LeftItem>Middle</LeftItem>
               </Container>
            </Wrapper>
      );
};

export default Header;