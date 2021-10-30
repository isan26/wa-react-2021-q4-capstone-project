import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'components/Grid/Image';
import ImageInfo from 'components/Texts/ImageInfo';


const Product = ({ title, url, category, price }) => (
    <Image url={url} title={title} >
        <ImageInfo>{category} - {price}$</ImageInfo>
    </Image>
)

export default Product
