import React, { useState, useEffect } from 'react'
import Layout from './containers/Layout';
import SideBar from './containers/SideBar';
import Category from './components/Category';
import Content from 'containers/Content';
import Title from './components/Title'
import Grid from 'components/Grid';
import Product from 'components/Product';
import Pagination from './components/Pagination';
import Loading from 'components/Loading';
import { useFetcher } from 'hooks/useFetcher';
import { CATEGORY , PRODUCT} from 'constants/queries';


const Products = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const categories = useFetcher({
        query: CATEGORY,
        pageSize: 30,
    });

    const productList = useFetcher({
        query: PRODUCT,
    });


    useEffect(() => {
        if (productList.isLoading) return;

        let products = [];
        if (selectedCategories.length > 0) {
            products = productList.data.results.filter(product => selectedCategories.includes(product.data.category.id));
        } else {
            products = productList.data.results;
        }

        setProducts(products);
    }, [selectedCategories, productList])

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    return (
        <Layout>
            <SideBar >
                {categories && categories.isLoading === false && categories.data.results.map((category) => <Category
                    key={category.id}
                    category={category}
                    onClick={() => handleCategoryClick(category.id)}
                    isActive={selectedCategories.includes(category.id)}
                />)}
            </SideBar>
            {productList?.isLoading ? 
                <Loading /> :
                <Content>
                    <Title />
                    <Grid
                        data={ProductsToGridList(products)}
                        columns={6}
                        CustomComponent={Product}
                    />
                    {products.length ? <Pagination /> : null}
                </Content>}
        </Layout>
    )
}

const ProductsToGridList = (data) => data.map(item => ({
    url: item.data.mainimage.url,
    title: item.data.name,
    category: item.data.category.slug,
    price: item.data.price
}))


export default Products
