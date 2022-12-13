import styled from "styled-components";
import Link from 'next/link'

const Base = ({name, className}) => (
    <header className={className}>
        <ul>
            <li>
                <Link href = {"/../../"}>Página inicial</Link>
            </li>

            <li>
                <Link href = {"/localidades/" + name}>{name}</Link>
            </li>
        </ul>
    </header>
)

const LocalizationHeader = styled(Base)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 10vh;
    width: 100vw !important;
    padding: 0 10vw;

    ul {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        list-style-type: none;
        column-gap: 5vw;
    }

    li {
        transition: 250ms;
    }

     li:hover {
        color: #45a889;
     }

     li:nth-child(2) {
        text-decoration: underline;
    }

    @media only screen and (min-width: 768px) {
        height: 10vh;
    }
`

export default LocalizationHeader 