import { Button, Card, Category, Description, Image, ImageContainer, Price, PriceContainer, Title } from "./productCard.styles";


const ProductCard = ({product}) => {

      const {name,image,category, description,price} = product
      return (
            <Card>
                <ImageContainer>
                  <Image src={image} alt="image not found"></Image>

                </ImageContainer>
                <Title>{name}</Title>
                <Description>{description}</Description>
                  <PriceContainer>
                        <Category>Category : {category}</Category>
                        <Price>Price:${price}</Price>
                  </PriceContainer>
                  <Button>View Details</Button>
            </Card>
      );
};

export default ProductCard;