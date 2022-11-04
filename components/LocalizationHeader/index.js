import styled from "styled-components";
import imagesFromTerrazoDiDante from "../../public/images";

const LocalizationHeader = styled.header`
    background-image: ${`url('${imagesFromTerrazoDiDante.img14.src}')`};
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.4);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 100vw;
    background-color: #21202e;

    img {
        width: 25vw !important;
    }

    @media only screen and (min-width: 768px) {
        height: 80vh;

        img {
            width: 12vw !important;
        }
    }
`

export default LocalizationHeader 