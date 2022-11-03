import styled from "styled-components";
import Image from "next/Image";
import imagesFromTerrazoDiDante from "../../public/images/index"

const Base = ({className}) => (
    <header className={className}>
        <div>
        <h1>Jairo Leite</h1>
        <h2>CORRETOR CREDENCIADO</h2>

        <button>Vamos conversar?</button>
        </div>
        
        <div>
        <Image src={imagesFromTerrazoDiDante.astronauta} alt="Imagem de um astronauta"/>
        </div>
    </header>
)

const Header = styled(Base)`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    font-family: 'Inter', sans-serif;

    div:nth-child(1) {
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 3vw 1vw 3vw 6vw;

        h1 {
            font-weight: 400;
            font-size: clamp(3em, 4vw, 5em);
            margin-bottom: 0;
        }
        h2 {
            font-weight: 900;
            font-size: clamp(2em, 2.6vw, 4em);
            margin-top: 0;
        }

        button {
            background-color: #0f766e;
            transition: 350ms;
            border: none;
            width: fit-content;
            padding: clamp(25px, 2vw, 35px);
            font-size: 1.3em;
            border-radius: 2em;
            cursor: pointer;
            margin: 3vh 3vh 0 0;
        }

        button:hover {
            background-color: #118f85;
        }
    }

    div:nth-child(2) {
        width: 50vw;
        height: 55vw;
        border-radius: 50%;
        margin: -13.75vw -10vw 0 0 ;
        background-color: #0f766e;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 60%;
            width: auto;
            height: auto;
            margin: 6.8vw 5vw 0 0 ;
        }
    }



    @media only screen and (max-width: 768px) {
        height: 65vh;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        

        div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100vw;
        height: 25vh;
        padding: 0 5vw;

        h1 {
            font-size: clamp(2.5em, 12.5vw, 4.8em);
       }

        h2 {
            font-size: clamp(1.2em, 5vw, 2.2em);
        }

        button {
            font-size: 1em;
            width: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: clamp(20px, 3vh, 2.2em);
            margin: auto 0;
        }
    }


        div:nth-child(2) {
        width: 50vh;
        height: 55vh;
        margin: -12.5vh -12.5vh 0 0 ;
        display: flex;

        img {
            max-width: 65%;
            width: auto;
            height: auto;
            margin: 6.25vh 6.25vh 0 0;
        }
    }
    }
`

export default Header