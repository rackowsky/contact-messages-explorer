import styled from "styled-components"
import HeartSymbolImg from "../images/heart.png"

export const IndexWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    animation-duration: 1s;
    animation-name: Scaling;
    animation-iteration-count: 1;

    @keyframes Scaling {
        0% {
            transform: scale(0.2);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`
export const FormWrapper = styled.div`
    height: 350px;
    width: 650px;
    backdrop-filter: blur(100px);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
    padding: 40px;
`
export const FooterComponent = styled.div`
    height: 50px;
    width: 300px;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 25px;
`
export const FooterSign = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 900;
`
export const HeartSymbol = styled.div`
    width: 20px;
    height: 20px;
    background-image: url( ${ HeartSymbolImg } );
    background-size: 65%;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    padding: 0 5px 0 5px;
`