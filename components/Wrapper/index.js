import styled from "styled-components";

const Wrapper = styled.main`
width: 100%;
height: fit-content;
padding: 0 0 5vh 0;
background-color: ${props => `${props.bgColor}`};
color: #010101;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: ${props => `${props.rowGap}vh`};
overflow-x: hidden;


p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
    font-size: clamp(1.2em, 1.5vw, 1.4em);
}

.Benefits{
    width: 100vw;
    background-color: #265c4b;
    display: grid;
}  


.Cards {
    display: grid;
    align-items: center;
    justify-items: center;
}

@media (min-width: 822px) and (orientation: landscape) {
    .Benefits {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2.5vw;
    border-top: 35px #265c4b solid;
    }

    .Cards {
    width: 50vw;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 4vh;
    }
}

@media (orientation: portrait) {
    .Benefits {
    grid-template-columns: repeat(1, 1fr);
    }

    .Cards {
    margin: 15vh 0 0 0;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2vh;
    }
}



`


export default Wrapper