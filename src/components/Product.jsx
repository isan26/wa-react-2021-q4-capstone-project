import Image from "components/Grid/Image";
import ImageInfo from "components/Texts/ImageInfo";
import React from "react";
import Cart from "./Cart";
import Button from "./Button";
import styled from "styled-components";

const Product = ({ title, url, category, price }) => (
  <Image url={url} title={title}>
    <Section>
      <ImageInfo>
        {category} - {price}$
      </ImageInfo>
    </Section>
    <Bottom>
      <Button>
        <Cart /> Buy
      </Button>
    </Bottom>
  </Image>
);

const Section = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
`;

const Bottom = styled.div`
  height: 10%;
`

export default Product;
