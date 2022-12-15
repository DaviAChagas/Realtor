import styled from 'styled-components'
import Image from 'next/image'
import icons from '../../public/icons'

function Base({className, subjectMatter}) {
    const locality = subjectMatter.replace(/\s/g, '+')
    
         return (
            <button className={className}>
                <a href={`https://wa.me/5512991502105?text=Ol%C3%A1%2C+Jairo%21+Tudo+bem%3F+Vim+conversar+sobre+o+${locality}.`}>
                    <Image src={icons.whatsapp} alt="WPP Logo"/>
                </a>
            </button>
)}

const WhatsappButton = styled(Base)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6vh;
    position: fixed;
    border: none;
    border-radius: 1.8em;
    background-color: #1ad03f;
    bottom: 1vh;
    right: 1vh;
    transition: 300ms;
    z-index: 100;

    :hover{
        background-color: #1ed760;
    }
`

export default WhatsappButton