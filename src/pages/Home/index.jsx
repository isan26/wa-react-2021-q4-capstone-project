import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFeaturedBanners } from 'hooks/useFeaturedBanners';
import { useFetcher } from 'hooks/useFetcher';

import { CATEGORY, PRODUCT, PRODUCT_SEARCH, FEATURED_PRODUCTS, PRODUCT_DETAIL } from 'constants/queries';

import Section from './containers/Section';
import Slider from './components/Slider';
import Grid from 'components/Grid';
import Product from 'components/Product';
import Button from 'components/Button';

import ProductCategoriesMock from 'mocks/en-us/product-categories.json';
import FeaturedProductsMock from 'mocks/en-us/featured-products.json';

const Home = () => {
    const featuredBanners = useFeaturedBanners();

    return (
        <div>
            <Section>
                {featuredBanners.isLoading === false && <Slider data={featuredBanners.data} />}
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
}
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
