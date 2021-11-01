import React from 'react'
import Button from 'components/Button';
import styled from 'styled-components';

const Pagination = ({page, setPage, totalPages}) => {

const handleNext = () => {
    if (page < totalPages-1) {
        setPage(page + 1);
    }
}

const handlePrev = () => {
    if (page > 0) {
        setPage(page - 1);
    }
}
    
    return (
        <Container>
            <Button onClick={handlePrev}>Prev</Button>
            <p>Page {page+1} of {totalPages}</p>
            <Button onClick={handleNext} >Next</Button>
        </Container>
    )
}


const Container = styled.div`
    text-align: center;
    padding: 18rem;
    & > p { 
        display: inline-block;
        margin: 1rem; 
    }
`;

export default Pagination
