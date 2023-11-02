import { useEffect, useState } from "react";
import TextBanner from "../textBanner/TextBanner";
import { CardContainer, Container, Wrapper } from "./categoryProducts.styles";
import ProductCard from "../productCard/ProductCard";


const CategoryProducts = () => {

const [products, setProducts] = useState([])

useEffect(()=>{
fetch('/public/product.json')
.then(res=> res.json())
.then(data=>{
      console.log(data);
      setProducts(data)
})
},[])

console.log(products);

      return (
            <Wrapper>
                  <Container>
                  <div>
                  <TextBanner title={'Category'} subtitle={'Our Services'}></TextBanner>
                  <CardContainer>
                        {
                              products.products?.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
                        }
                  </CardContainer>
                  </div>
                  </Container>

            </Wrapper>
      );
};

export default CategoryProducts;