import styled from "styled-components";

const Localization = styled.section`

h2 {
    color: #343a1a;
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.9em, 3vw, 2.5em);
}

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 2vh;
    padding: 1em 12vw;

    p {
        width: 60%;
    }

    @media (orientation: portrait) {
        p {
            width: 100vw;
            padding: 0 10vw;
        }

    align-items: center;
    row-gap: 0;
}
`

export default Localization