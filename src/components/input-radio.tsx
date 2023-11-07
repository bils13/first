"use client"

import { gothamLight } from "@/utils/fonts/fonts"
import styled from "styled-components"


const RadioContainer = styled.div`
    display: flex;
    align-items: center;

    input {
        height: 20px;
        width: 20px;
        font-weight: bold;
    }

    label {
        margin-left: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text);
    }
`

// const Line = styled.div`
//     border-bottom: 1px solid var(--light-gray);
//     margin-top: 1rem;
//     margin-bottom: 1rem;
// `

interface RadioProps {
    time: string;
    hour: string;
    id: string;
}

export function InputRadio({time, hour, id}: RadioProps) {
    return (
        <RadioContainer>
            <input type="radio" name="hour" id={id} value={id} />
            <label className={gothamLight.className}>
                {time}
                <span>
                {hour}
                </span>
            </label>
            {/* <Line /> */}
        </RadioContainer>
    )
}