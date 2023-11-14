import React, { useContext } from 'react'
import GymContext, { GymProviderProps } from "@/context/results";
import { gothamBold } from "@/utils/fonts/fonts";
import styled from "styled-components"

const ButtonContainer = styled.div<ButtonProps>`
    padding: 15px;
    width: 500px;
    background-color: ${(props) => props.bgColor};
    font-size: 22px;
    text-transform: uppercase;
    border: ${(props) => props.border ? `1px solid ${props.border}` : 'none'};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`

interface ButtonProps {
    value?: string;
    bgColor?: string;
    border?: string;
    onClick?: any;
    
}

export function Button({value, bgColor, border}: ButtonProps){
    const { handleClick } = useContext<GymProviderProps>(GymContext)
    return(
        <ButtonContainer onClick={handleClick}
            className={gothamBold.className} 
            bgColor={bgColor} 
            border={border}>
            {value}
        </ButtonContainer>
    )
}