"use client"

import styled from "styled-components"
import Logo from "@/assets/logo.svg"
import Image from "next/image"
import { gothamBook } from "@/utils/fonts/fonts"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333333;
    padding: 50px;

    p {
        color: white;
    }
`

const WrapperLogo = styled.div`
    position: relative;
    width: 150px;
    height: 100px;
`

export function Footer(){
    return(
        <FooterContainer>
            <WrapperLogo>
                <Image src={Logo} alt="Logo Smart Fit" fill />
            </WrapperLogo>
            <p className={gothamBook.className}>Todos os direitos reservados - 2023</p>
        </FooterContainer>
    )
}