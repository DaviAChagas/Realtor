import styled from "styled-components";

const Description = styled.div`
h1 {
    color: #115E59;
    font-family: 'Inter', sans-serif;
    font-size: clamp(2em, 3vw, 2.7em);
    text-align: center;
}

p {
    font-family: 'Abhaya Libre', serif;
    font-size: clamp(1.2em, 2vw, 1.5em);
}

display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
row-gap: 2vh;
padding: clamp(2em, 3.2vh, 8em) clamp(3em, 11vw, 20em);
`

export default Description