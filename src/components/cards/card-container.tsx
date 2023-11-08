import styled from "styled-components"
import { Cards } from "./cards"

const CardContainer = styled.section`
    width: 100%;
    margin-top: 3.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

export function Card(){
    return(
        <CardContainer>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </CardContainer>
    )
}