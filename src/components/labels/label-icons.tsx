import styled from "styled-components"
import { gothamBold, gothamLight } from "@/utils/fonts/fonts"
import Image from "next/image"
import { LabelProps } from "./label"

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    label {
        font-size: 18px;
    }
`

const WrapperIcon = styled.div`
    margin-top: 0.5rem;
    position: relative;
    width: 90px;
    height: 90px;
`
const WrapperLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export function LabelIcon({title, icon}: LabelProps){
    return(
        <LabelWrapper>
            <p className={gothamBold.className}>{title}</p>
            <IconContainer className={gothamLight.className}>
                {icon?.map((icon) => 
                    <WrapperLabel>
                        <WrapperIcon>
                            <Image src={icon.image} alt={icon.text} fill/>
                        </WrapperIcon>
                        <label>{icon.legend}</label>
                    </WrapperLabel>
                )}
            </IconContainer>
        </LabelWrapper>
    )
}