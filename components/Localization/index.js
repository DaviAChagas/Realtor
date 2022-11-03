import styled from "styled-components";

const Localization = styled.section`

h2 {
    color: #115E59;
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.9em, 3vw, 2.5em);
}

p {
    font-family: 'Abhaya Libre', serif;
    font-size: clamp(1.2em, 2vw, 1.5em);
}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 2vh;
    padding: 1em clamp(3em, 11vw, 20em);
`

export default Localization