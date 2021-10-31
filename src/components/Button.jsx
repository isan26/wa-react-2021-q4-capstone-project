import styled from "styled-components";
import colors from "constants/colors";

const Button = styled.button`
    min-width: 10rem;
    color : white;
    font-weight: bold;
    background-color : ${colors.MINERAL};
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: large;
    padding: 1em;
    & > a {
        text-decoration: none;
        color: white;
    }

`

export default Button;