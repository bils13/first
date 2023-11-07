"use client"

import styled from "styled-components"
import Logo from "../../assets/logo.svg"
import Image from "next/image"

const HeaderContainer = styled.header`
    width: 100vw;
    max-width: 100%;
    background-color: var(--black);
    padding: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
`

const Wrapper = styled.div`
    position: relative;
    height: 150px;
    width: 300px;
`

export function Header(){
    return(
        <HeaderContainer>
            <Wrapper>
                <Image src={Logo} alt="Logo SmartFit" fill/>
            </Wrapper>
        </HeaderContainer>
    )
}