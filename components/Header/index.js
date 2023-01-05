import styled from "styled-components";
import Image from 'next/legacy/image'
import astronaut from "../../public/images/index"

const Base = ({className}) => (
    <header className={className}>
        <div>
            <h1>Jairo Leite</h1>
            <h2>CORRETOR CREDENCIADO</h2>
            <h3>Conquiste o seu novo mundo!</h3>
        </div>
        
        <div>
            <Image src={astronaut.astronauta} 
            alt="Imagem de um astronauta"
            priority
            />
        </div>

        <a href="https://api.whatsapp.com/send?phone=5512991502105&text=Ol%C3%A1%2C%20Jairo!%20Tudo%20bem%3F%20Eu%20gostaria%20de%20conversar%20com%20voc%C3%AA%20sobre%20im%C3%B3veis.">
            Vamos conversar?
        </a>

    </header>
)

const Header = styled(Base)`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    font-family: 'Inter', sans-serif;

    a {
            background-color: #265c4b;
            transition: 350ms;
            border: none;
            width: max-content;
            padding: clamp(25px, 1vw, 35px);
            font-size: 1.3em;
            border-radius: 2em;
            cursor: pointer;
            margin: 3vh 3vh 0 0;
            text-decoration: none;
            color: #FAFAFA;
            position: absolute;
            left: 6vw;
            top: 75vh;
        }

        a:hover {
            background-color: #45a889;
        }

    div:nth-child(1) {
        width: 50vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 3vw 1vw 3vw 6vw;

        h1, h2 {
            font-family: 'Nunito', sans-serif;
            color: #265C4B;
        }

        h1 {
            font-weight: 900;
            font-size: clamp(3em, 4vw, 5em);
            margin-bottom: 0;
        }
        
        h2 {
            font-weight: 600;
            font-size: clamp(2em, 2.6vw, 4em);
            margin-top: 0;
        }

        h3 {
            font-weight: 400;
            font-size: clamp(1.5em, 2vw, 2em);
            margin-top: 0;
            font-family: 'Montserrat', sans-serif;
        }

    }

    div:nth-child(2) {
        width: 50vw;
        height: 100vh;
        margin: 0 -10vw 0 0;
        padding: 10vh 0 0 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        img {
            width: auto !important;
            height: auto !important;
            scale: 0.9;
        }
    }


    @media only screen and (max-width: 768px) and (orientation: portrait) {
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;

        a {
            margin-bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            top: 78vh;
            width: 60vw;
            text-align: center;
        }

        div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 30vh;
        padding: 5vh 5vw;

        h1 {
            font-size: clamp(2.5em, 6vw, 4em);
       }

        h2 {
            font-size: clamp(1.5em, 5vw, 2em);
        }

        h3 {
            font-size: clamp(1em, 5vw, 1.2em);
        }
    }

        div:nth-child(2) {
        width: 50vh;
        height: 50vh;
        display: flex;
        margin: 0;
        padding: 0 0 10vh 0;
        justify-content: center;
        align-items: center;

        img {
            width: auto;
            height: auto;
            scale: 0.68 !important;
        }
    }
    }
`

export default Header