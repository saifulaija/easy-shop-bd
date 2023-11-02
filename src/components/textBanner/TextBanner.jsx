import { Container, Subtitle, Title } from "./textBanner.styles";


const TextBanner = ({title, subtitle}) => {
      return (
            <Container>
                  <Title>{title}</Title>
                  <Subtitle>{subtitle}</Subtitle>
                  
            </Container>
      );
};

export default TextBanner;