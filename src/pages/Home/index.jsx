import React from 'react';
import { Link } from 'react-router-dom';

import Section from './containers/Section';
import Slider from './components/Slider';
import Grid from 'components/Grid';
import Product from 'components/Product';
import Button from 'components/Button';

import BannersMock from 'mocks/en-us/featured-banners.json';
import ProductCategoriesMock from 'mocks/en-us/product-categories.json';
import FeaturedProductsMock from 'mocks/en-us/featured-products.json';

const Home = () => (
    <div>
        <Section>
            <Slider data={BannersMock} />
        </Section>
        <Section>
            <Grid
                data={CategoriesToGridList(ProductCategoriesMock)}
                columns={5}
            />
        </Section>
        <Section>
            <Grid
                data={ProductsToGridList(FeaturedProductsMock)}
                columns={6}
                CustomComponent={Product}
            />
        </Section>
        <Section>
            <Button>
                <Link to="/products">
                    View all products
                </Link>
            </Button>
        </Section>
    </div>
)

const CategoriesToGridList = (data) => data.results.map(item => ({
    url: item.data.main_image.url,
    title: item.data.name
}))

const ProductsToGridList = (data) => data.results.map(item => ({
    url: item.data.mainimage.url,
    title: item.data.name,
    category: item.data.category.slug,
    price: item.data.price
}))




export default Home
