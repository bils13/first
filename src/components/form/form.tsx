"use client"

import Image from "next/image"
import styled from "styled-components"
import Hour from "../../assets/icon-hour.png"
import { gothamBold, gothamLight } from "@/utils/fonts/fonts"
import { InputRadio } from "../input-radio"
import { Button } from "../button"

const FormContainer = styled.form`
    margin-top: 3.5rem;
    border: 3px solid var(--light-gray);
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 5px 2px -2px var(--light-gray);

    h3 {
        font-size: 26px;
        color: var(--text);
        margin-left: 10px;
        margin-top: 2rem;
        font-weight: 100;
    }
`

const IconWrapper = styled.div`
    position: relative;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    p {
        font-size: 16px;
    }
`

const Line = styled.div`
    border-bottom: 1px solid var(--light-gray);
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const ResultContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;

    p {
        span {
            font-size: 22px;
        }
    }
`

const WrapperCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;

`

const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 2rem;
`

export function Form() {
    return(
        <FormContainer>
            <Wrapper>
                <IconWrapper>
                    <Image src={Hour} alt="Icon Hour" fill />
                </IconWrapper>
                <p className={gothamLight.className}>Horário</p>
            </Wrapper>
            <h3 className={gothamLight.className}>Qual período quer treinar?</h3>
            <Line />
            <InputRadio 
                time="Manhã"
                hour="06:00 às 12:00"
                id="manha"
            />
            <InputRadio 
                time="Tarde"
                hour="12:01 às 18:00"
                id="tarde"
            />
            <InputRadio 
                time="Noite"
                hour="18:01 às 23:00"
                id="noite"
            />
            <ResultContainer className={gothamLight.className}>
                <WrapperCheckbox>
                    <input type="checkbox" name="close" />
                    <p>Exibir unidades fechadas</p>
                </WrapperCheckbox>
                <p>Resultados Encontrados: <span className={gothamBold.className}>0</span></p>
            </ResultContainer>
            <WrapperButton>
                <Button 
                    value="Encontrar unidade"
                    bgColor="var(--orange)"/>
                <Button 
                    value="Limpar"
                    bgColor="var(--white)"
                    border="var(--light-gray)"/>
            </WrapperButton>
        </FormContainer>
    )
}