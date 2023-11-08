"use client"

import { gothamBlack, gothamBold, gothamBook, gothamLight } from "@/utils/fonts/fonts";
import Image from "next/image";
import styled from "styled-components";
import RequiredMask from "@/assets/required-mask.png"


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    background-color: var(--light-gray);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 10px var(--light-gray);

    label {
        color: #00AA01;
        font-size: 18px;
        margin-bottom: 1rem;
    }

    p {
        font-size: 30px;
        color: var(--gray);
        margin-bottom: 1rem;
    }
`
const WrapperAddress = styled.div`
    p {
        font-size: 18px;
        color: var(--gray);
    }
`

const Line = styled.div`
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--gray);
    width: 100%;
`
const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`

const WrapperIcon = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
`

const HourContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
`

const WrapperHour = styled.div`
    flex-direction: column;
    align-items: flex-start;
    
    h5 {
        font-size: 24px;
        margin-bottom: 0.25rem;
        color: var(--gray);
    }

    p {
        font-size: 18px;
    }
`

export function Cards(){
    return(
        <CardContainer>
            <label className={gothamBold.className}>Aberto</label>
            <p className={gothamBold.className}>Vicente Linhares</p>
            <WrapperAddress className={gothamLight.className}>
                <p>Rua Tibúrcio Cavalcante, 1885 - Meireles<br />
                Fortaleza, CE</p>
            </WrapperAddress>
            <Line />
            <IconsContainer>
                <WrapperIcon>
                    <Image src={RequiredMask} alt='Uso de máscara obrigatório' fill />
                </WrapperIcon>
                <WrapperIcon>
                    <Image src={RequiredMask} alt='Uso de máscara obrigatório' fill />
                </WrapperIcon>
                <WrapperIcon>
                    <Image src={RequiredMask} alt='Uso de máscara obrigatório' fill />
                </WrapperIcon>
                <WrapperIcon>
                    <Image src={RequiredMask} alt='Uso de máscara obrigatório' fill />
                </WrapperIcon>
            </IconsContainer>
            <HourContainer>
                <WrapperHour>
                    <h5 className={gothamBold.className}>Seg. à Sex.</h5>
                    <p className={gothamLight.className}>06h às 22h</p>
                </WrapperHour>
                <WrapperHour>
                    <h5 className={gothamBold.className}>Sáb.</h5>
                    <p className={gothamLight.className}>09h às 18hh</p>
                </WrapperHour>
                <WrapperHour>
                    <h5 className={gothamBold.className}>Dom.</h5>
                    <p className={gothamLight.className}>Fechada</p>
                </WrapperHour>
            </HourContainer>
        </CardContainer>
    )
}

