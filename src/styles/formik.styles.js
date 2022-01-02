import styled from "styled-components"
import nameSymbol from "../images/name.png"
import messageSymbol from "../images/message.png"
import sendSymbol from "../images/send.png"

export const SymbolForm = styled.div`
    height: 60px;
    width: 10%;
    background-image: url( ${({ isMessage }) => isMessage ? messageSymbol : nameSymbol} );
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({ isMessage }) => isMessage ? '45%' : '37%'};
    margin-left: ${({ isMessage }) => isMessage ? '5px' : '0'};
`
export const Input = styled.input`
    background-color: transparent;
    height: 94%;
    width: 90%;
    border-radius: 0 15px 15px 0;
    font-size: 17px;
    font-weight: 900;
    font-style: italic;
    color: white;
    border: none;
    outline: none;
    margin-left: -5px;

    ::placeholder {
        color: white;
    }
`
export const Textarea = styled.textarea`
    background-color: transparent;
    width: 100%;
    height: 70%;
    resize: none;
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: 900;
    font-style: italic;
    color: white;
    margin: 15px 15px 50px 0;

    ::placeholder {
        color: white;
    }
`
export const InputWrapper = styled.div`
    background-color: #ffffff16;
    backdrop-filter: blur(50px);
    width: 100%;
    height: ${({ isMessage }) => isMessage ? "120px" : "60px"};
    border-radius: 15px;
    margin-top: 15px;
    display: flex;
`
export const Button = styled.button`
    width: 100%;
    height: 60px;
    border-radius: 15px;
    margin-top: 15px;
    background-color: #ffffff16;
    backdrop-filter: blur(50px);
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: 900;
    font-style: italic;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        transition: 0.2s;
        background-color: #ffffff3e;
        cursor: pointer;
        transform: scale(1.025);
    }
`
export const SendSymbol = styled.div`
    background-image: url( ${ sendSymbol } );
    width: 25px;
    height: 25px;
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    display: inline-block;
`
export const P = styled.p`
    display: inline-block;
    margin-left: 5px;
`