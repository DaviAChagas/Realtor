import styled from "styled-components";

const Wrapper = styled.main`
width: 100%;
min-height: 100vh;
background-color: #FAFAFA;
color: #010101;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: ${props => `${props.rowGap}vh`};
overflow-x: hidden;
`


export default Wrapper