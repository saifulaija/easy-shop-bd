import { useEffect, useState } from "react";
import TextBanner from "../textBanner/TextBanner";
import {
  CardContainer,
  Container,
  Wrapper,
  FilterSortContainer,
  FilterSelect,
  SortSelect,
  PaginationContainer,
  PaginationButton,
} from "./categoryProducts.styles";
import ProductCard from "../productCard/ProductCard";

const productsPerPage = 6;

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [currentPage, setCurrentPage] = useState(1);

  fetch("/product.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.products
    ? selectedCategory === "all"
      ? products.products.slice(indexOfFirstProduct, indexOfLastProduct)
      : products.products
          .filter((product) => product.category === selectedCategory)
          .slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const sortedProducts = currentProducts.slice().sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const totalPages = Math.ceil(
    (selectedCategory === "all"
      ? products.products?.length
      : products.products?.filter(
          (product) => product.category === selectedCategory
        ).length) / productsPerPage
  );

  return (
    <Wrapper>
      <Container>
        <div>
          <TextBanner
            title={"Category Wise"}
            subtitle={"Our Services"}
          ></TextBanner>

          <FilterSortContainer>
            <FilterSelect
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="mobile">Mobile</option>
              <option value="tv">TV</option>
              <option value="laptop">Laptop</option>
            </FilterSelect>

            <SortSelect
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="ascending">Price - Low to High</option>
              <option value="descending">Price - High to Low</option>
            </SortSelect>
          </FilterSortContainer>

          <CardContainer>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CardContainer>

          <PaginationContainer>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationButton
                key={index}
                onClick={() => handlePageChange(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationButton>
            ))}
          </PaginationContainer>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CategoryProducts;
