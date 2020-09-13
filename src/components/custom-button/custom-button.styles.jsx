import styled, { css } from 'styled-components';

const buttonStyles = css`
   background-color: red;
   color :white;
   border: none; 
   &:hover {
    background-color: green;
    color: black;
    border: 1px solid black;
}
`;

const invertedButtonStyles =  css`
   background-color: blue;
   color: black;
   border: 1px solid black;

   &:hover {
       background-color: red;
       color :white;
       border: none;
}
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;
    border: 1px solid black;
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 135px;
    width: auto;
    height: 50px;
    letter-spacing: 0.1px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Coming Soon';
    font-weight: bolder;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles} 
`;