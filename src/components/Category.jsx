import React from "react";
import { Link } from "react-router-dom";
import Image from "components/Grid/Image";

const Category = ({ title, url , all}) => (
  <Link to={`/products?category=${all.slugs[0]}`}>
    <Image url={url} title={title} />
  </Link>
);

export default Category;
