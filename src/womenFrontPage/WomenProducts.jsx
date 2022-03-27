import React from "react";
import styled from "styled-components";
import { product } from "../data";
import { Products } from "./Products";

const Container = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Head = styled.h1`
  display: flex;
  margin: 20px 0px 0px 10px;
  font-size: 20px;
`;

const WomenProducts = () => {
  return (
    <div>
      <Head>WOMEN CATEGORY</Head>
      <Container>
        {product.map((item) => (
          <Products item={item} key={item.id}></Products>
        ))}
      </Container>
    </div>
  );
};

export default WomenProducts;