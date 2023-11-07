import styled from "styled-components"
import { LabelIcon } from "./label-icons"
import { LabelDetails } from "./label-details"
import { StaticImageData } from "next/image"

const LabelContainer = styled.section`
    margin-top: 3.5rem;
    width: 100%;
    padding: 1.5rem;
    background-color: var(--light-gray);
    display: flex;
    justify-content: space-around;
`
export interface LabelProps {
    key: string,
    title: string,
    icon?: 
        {
            image: StaticImageData,
            text: string,
            legend: string,
        }[]
}

export function Label(){
    return(
        <LabelContainer>
            {LabelDetails.map((label) => (
                <LabelIcon 
                    key={label.key}
                    title={label.title}
                    icon={label.icon}
                />
            ))}
            
            
        </LabelContainer>
    )
}