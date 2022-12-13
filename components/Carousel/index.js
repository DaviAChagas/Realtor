import styled from "styled-components";
import { useState } from "react";
import icons from "../../public/icons";
import Image from 'next/legacy/image'

function Base({className, path, numberOfImages}) {
    const [index, setIndex] = useState(1)

    const addIndex= () => {
    index < numberOfImages ?
    setIndex(index => index + 1):
    setIndex(index => index = 1)
}

    const subtractIndex= () => {
        index > 1 ?
        setIndex(index => index - 1):
        setIndex(index => index = 28)    }

return (
    <div className={className}>

        <Image src={`${path}(${index}).jpeg`} alt="Carousel image"  width="1600" height="1200" />

        <button id="Prev" onClick={subtractIndex}>
            <Image src={icons.arrow}
             alt="Arrow" height="1000" width="1000"/>
        </button>

        <button id="Next" onClick={addIndex}>
             <Image src={icons.arrow}
              alt="Arrow" height="1000" width="1000"/>
        </button>

        <span>{index}/{numberOfImages}</span>

    </div>
)

}

const Carousel = styled(Base) `
    width: 55vw;
    height: 60vh;
    position: relative;

    img {
        width: 100% !important;
        height: 100% !important;
        border-radius: 50px;

        z-index: 10;
    }

    span, button {
       position: absolute;
    }

    span {
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        margin: 0 0 1vw 0;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        font-size: 1.1vw;
        font-weight: 200;
        color: #FAFAFA;
    }
    
    button {
        z-index: 1000;
        top: 50%;
        height: 5vw;
        width: 5vw;
        border: none;
        border-radius: 0.8vw;
        background-color: rgba(38, 92, 75, 0.65);
        transition: 250ms;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        background-color: rgb(69, 168, 137, 0.65);
    }

    #Prev {
        left: 1vw;

        img {
            transform: rotate(180deg);
        }
    }

    #Next {
        right: 1vw;
    }

    @media (orientation: portrait) {
        width: 90vw;
        height: 40vh;

        button {
            width: 8vh;
            height: 8vh;
            border-radius: 1.6vh;
            background-color: rgba(38, 92, 75, 0.5);

            :hover {
                background-color: rgb(69, 168, 137, 0.5);
            }
        }
        
    }

    span {
        font-size: 2.5vh;
    }
`

export default Carousel