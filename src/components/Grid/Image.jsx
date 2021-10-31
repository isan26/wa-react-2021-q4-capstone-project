import React from 'react'
import styled from 'styled-components';
import ImageTitle from '../Texts/ImageTitle';

const Image = ({ url, title, children }) => (
    <Container  img={url}>
        <ImageTitle>{title}</ImageTitle>
        {children}
    </Container>
)

const Container = styled.div`
   transition: transform .2s;
   text-align: center;
   min-height: 20rem;
   background-image: url(${props => props.img});
   background-size: cover;
   background-position: center;
   &:hover{
    transform: scale(1.5);
    z-index : 5;
    font-size: 1rem;
   }
   margin-bottom: 3rem
`



export default Image
