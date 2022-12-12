import styled from "styled-components";

const Description = styled.div`
h1 {
    color: #343A1A;
    font-family: 'Inter', sans-serif;
    font-size: clamp(3.5em, 10vw, 4em);
}


display: ${props => `${props.display}`};
justify-content: space-between;
padding: 0 12vw;

@media (orientation: portrait) {
    h1  {
     text-align: center;
    }

     text-align: left;
    flex-direction: column;

    img {
        border-radius: 30px;
    }
}


@media (orientation: landscape) {
    h1{
     text-align: left;
    }

    div {
    width: 40%;
    }

    img {
        width: 65vh !important;
        height: 35vh !important;
        border-radius: 20px;
}
}


`

export default Description