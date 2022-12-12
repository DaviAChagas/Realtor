import styled from 'styled-components'
import Image from 'next/legacy/image'

function Base({className, title, image, alt}){
    
    return (
        <section className={className}>
            <Image src={image} alt={alt} width={1200} height={900}/>
            <h2>{title}</h2>
        </section>
    )
}
const Benefit = styled(Base)`
    background: #265c4b;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        color: #FFFFFF;
        font-family: 'Inter', sans-serif;
        font-size: clamp(1.2em, 2vw, 1.5em);
    }

    img {
        border-radius: 20px;
    }


    @media (orientation: portrait) {
        height: 40vh;
        flex-direction: column-reverse;

        img {
        width: clamp(75vw, 80vw, 90vw) !important;
        height: 30vh !important;
    }
} 

    @media (min-width: 822px) and (orientation: landscape) {
        flex-direction: column;
        height: 60vh;
        font-size: clamp(1.5em, 3.5vw, 1.8em);
        
        img {
        
        width: 35vw !important;
        height: 30vw !important;
    }
}


`

    export default Benefit