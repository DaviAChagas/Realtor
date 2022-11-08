import styled from 'styled-components'
import Image from 'next/legacy/image'

function Base({className, title, image, alt, isRight}){
    
    return (
        <section className={className}>
            <h2>{title}</h2>
            <Image src={image} alt={alt} width={1200} height={900}/>
        </section>
    )
}
const Benefit = styled(Base)`
    background: ${props => props.isRight ? `linear-gradient(90deg, #115e59 0%, #115e59 85%, #FAFAFA 15%, #FAFAFA 100%)` :
      `linear-gradient(90deg, #FAFAFA 0%, #FAFAFA 15%, #115e59 15%, #115e59 100%)`};
    width: 100vw;
    height: 40vh;
    margin: 5vh 0vh 5vh 0vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2vh;

    img {
        width: clamp(75vw, 80vw, 90vw) !important;
        height: 30vh !important;
    }

    h2 {
        color: #fafafa;
        font-family: 'Inter', sans-serif;
        font-size: clamp(1.2em, 2vw, 1.5em);
    }

    @media only screen and (min-width: 822px) {

        background: ${props => props.isRight ? `linear-gradient(90deg, #115e59 0%, #115e59 50%, #FAFAFA 50%, #FAFAFA 100%)` :
      `linear-gradient(90deg, #FAFAFA 0%, #FAFAFA 50%, #115e59 50%, #115e59 100%)`};
        margin: 0;
        height: 50vh;
        flex-direction: ${props => props.isRight ? `row-reverse` : `row`};
        column-gap: 2vw;

        h2 {
        color: #115e59;
        font-size: clamp(1.5em, 3.5vw, 4em);
    }

        img {
        width: 40vw !important;
        height: 45vh !important;
        margin-left: 3vw !important;
    }
    }
`

    export default Benefit