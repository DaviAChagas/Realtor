import styled from "styled-components";
import Link from 'next/link'

const BaseCard = ({className, name, background, city, state}) => (
    <Link href = {"/localidades/" + name} className={className} style={{backgroundImage:`url('${background}')`}}>


        <p>{name}</p>

        <p>{city} - {state}</p>
        
    </Link>
)

const Card = styled(BaseCard)`
  color: #FAFAFA;
  font-weight: bold;
  width: max(720px, 65vw);
  height: 20vh;
  padding: 2vh 4vw;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-position: center;
  justify-content: center;
  border-radius: 1.5em;
  transition: 350ms;

  :hover {
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.5);
    
    p:first-child {
        color: #1db8ac;
    }

  }
    p:first-child {
        text-decoration: underline;
        transition: 350ms;
        font-size: clamp(1.5em, 3vw, 2em);
    }

    
    p {
        font-size: clamp(1.3em, 3vw, 1.6em);
    }

    @media only screen and (max-width: 768px) {
        width: 92vw;
        height: clamp(100px, 25vh, 26vh);
        background-position: left;
    }

`

export default Card