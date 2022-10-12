import styled from 'styled-components'

const Benefit = styled.section`
    background: ${props => props.isRight ? `linear-gradient(90deg, #115e59 0%, #115e59 85%, #FFFFFF 15%, #FFFFFF 100%)` :
      `linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 15%, #115e59 15%, #115e59 100%)`};

    height: 40vh;
    margin: 5vh 0vh 10vh 0vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2vh;

    img {
        width: clamp(75vw, 80vw, 90vw);
        height: 30vh;
    }

    h2 {
        color: #fafafa;
        font-family: 'Inter', sans-serif;
        font-size: clamp(1.2em, 2vw, 1.5em);
    }

    @media only screen and (min-width: 822px) {

        background: ${props => props.isRight ? `linear-gradient(90deg, #115e59 0%, #115e59 50%, #FFFFFF 50%, #FFFFFF 100%)` :
      `linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 50%, #115e59 50%, #115e59 100%)`};
        margin: 0;
        height: 50vh;
        flex-direction: ${props => props.isRight ? `row-reverse` : `row`};
        column-gap: 2vw;

        h2 {
        color: #115e59;
        font-size: clamp(1.5em, 3.5vw, 4em);
    }

        img {
        width: 40vw;
        height: 45vh;
        margin-left: 3vw;
    }
    }
`

    export default Benefit