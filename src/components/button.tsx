import { gothamBold } from "@/utils/fonts/fonts";
import styled from "styled-components"

const ButtonContainer = styled.button<ButtonProps>`
    padding: 15px;
    width: 500px;
    background-color: ${(props) => props.bgColor};
    font-size: 22px;
    text-transform: uppercase;
    border: ${(props) => props.border ? `1px solid ${props.border}` : 'none'};
    border-radius: 6px;

    &:hover {
        cursor: pointer;
    }
`

interface ButtonProps {
    value?: string;
    bgColor?: string;
    border?: string
}

export function Button({value, bgColor, border}: ButtonProps){
    return(
        <ButtonContainer 
            className={gothamBold.className} 
            bgColor={bgColor} 
            border={border}>
            {value}
        </ButtonContainer>
    )
}