import styled from 'styled-components'

const WhatsappButton = styled.button`
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