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
  width: 22vw;
  height: 25vw;
  padding: 2vh 2vw;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: flex-end;
  border-radius: 60px;
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


    @media (orientation: portrait){
        width: clamp(19em, 45vw, 45vw);
        height: clamp(19em, 50vh, 50vh);
    }

`

export default Card