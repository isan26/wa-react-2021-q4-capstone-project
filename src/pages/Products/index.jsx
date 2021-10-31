import React, { useState, useEffect } from "react";
import Layout from "./containers/Layout";
import SideBar from "./containers/SideBar";
import Category from "./components/Category";
import Content from "containers/Content";
import Title from "./components/Title";
import Grid from "components/Grid";
import Product from "components/Product";
import Pagination from "./components/Pagination";
import Loading from "components/Loading";
import { useFetcher } from "hooks/useFetcher";
import { CATEGORY, PRODUCT } from "constants/queries";
import Button from "components/Button";
import useQuery from "hooks/useQuery";

const Products = () => {
  const query = useQuery();
  const PAGESIZE = 12;
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const categories = useFetcher({
    query: CATEGORY,
  });

  const productList = useFetcher({
    query: PRODUCT,
  });

  useEffect(() => {
        const category = query.get("category");
        if (!category || categories.isLoading) return;

        const selectedCategories = categories.data.results.filter( item => item.slugs.includes(category)).map( item => item.id);
       setSelectedCategories(selectedCategories);
  }, [categories]);

  useEffect(() => {
    if (productList.isLoading || !productList.data.results) return;

    setTotalPages(Math.ceil(productList.data.results.length / PAGESIZE));
  }, [productList]);

  useEffect(() => {
    if (productList.isLoading) return;

    let products = [];
    if (selectedCategories.length > 0) {
      products = productList.data.results.filter((product) =>
        selectedCategories.includes(product.data.category.id)
      );
    } else {
      products = productList.data.results;
    }

    setProducts(products);
  }, [selectedCategories, productList]);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <Layout>
      <SideBar>
        {categories &&
          categories.isLoading === false &&
          categories.data.results.map((category) => (
            <Category
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.id)}
              isActive={selectedCategories.includes(category.id)}
            />
          ))}
      </SideBar>
      {productList?.isLoading ? (
        <Loading />
      ) : (
        <Content>
          <Title />
          <div style={{ height: "5rem", textAlign: "right", padding: "3rem" }}>
            {selectedCategories.length > 0 && (
              <Button onClick={() => setSelectedCategories([])}>
                Clear filters
              </Button>
            )}
          </div>
          <Grid
            data={ProductsToGridList(
              products.slice(PAGESIZE * page, PAGESIZE * (page + 1))
            )}
            columns={6}
            CustomComponent={Product}
          />
          {products.length ? (
            <Pagination setPage={setPage} page={page} totalPages={totalPages} />
          ) : null}
        </Content>
      )}
    </Layout>
  );
};

const ProductsToGridList = (data) =>
  data.map((item) => ({
    url: item.data.mainimage.url,
    title: item.data.name,
    category: item.data.category.slug,
    price: item.data.price,
  }));

export default Products;
