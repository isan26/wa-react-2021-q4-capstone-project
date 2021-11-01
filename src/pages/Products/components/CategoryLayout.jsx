import styled from "styled-components";
import colors from "constants/colors";


const CategoryLayout = styled.div`
    text-align: center;
    & > .title {
        top : 50%;
        font-size: 2rem;
        color : black;
    }
    & > img {
            border : ${props => props.isActive ? `solid 0.3em ${colors.JELLYBEAN}` : "none"};
     }
`

export default CategoryLayout;