import React from 'react';
import { Link } from 'react-router-dom';
import { useFeaturedBanners } from 'hooks/useFeaturedBanners';
import { useFetcher } from 'hooks/useFetcher';

import { CATEGORY, FEATURED_PRODUCTS} from 'constants/queries';

import Section from './containers/Section';
import Slider from './components/Slider';
import Grid from 'components/Grid';
import Category from 'components/Category'
import Product from 'components/Product';
import Button from 'components/Button';

const Home = () => {
    const featuredBanners = useFeaturedBanners();
    const categories = useFetcher({
        query: CATEGORY,
        pageSize: 30,
    })

    const featuredProducts = useFetcher({
        query: FEATURED_PRODUCTS,
        pageSize: 16,
    });

    return (
        <div>
            <Section>
                {featuredBanners.isLoading === false && <Slider data={featuredBanners.data} />}
            </Section>
            <Section>
                {categories.isLoading === false && <Grid
                    data={CategoriesToGridList(categories.data)}
                    columns={5}
                    CustomComponent={Category}
                />}
            </Section>
            <Section>
                {featuredProducts.isLoading === false && <Grid
                    data={ProductsToGridList(featuredProducts.data)}
                    columns={6}
                    CustomComponent={Product}
                />}
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
const CategoriesToGridList = (data) =>  data.results.map(item => ({
        url: item.data.main_image.url,
        title: item.data.name,
        all : {...item}
    }))

const ProductsToGridList = (data) => data.results.map(item => ({
    url: item.data.mainimage.url,
    title: item.data.name,
    category: item.data.category.slug,
    price: item.data.price
}))




export default Home
