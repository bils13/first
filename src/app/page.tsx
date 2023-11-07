"use client"

import styled from 'styled-components'
import { gothamBold, gothamLight } from '@/utils/fonts/fonts'
import { Form } from '@/components/form/form'
import { Label } from '@/components/labels/label'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 110px 140px;
  
  h1 {
    color: var(--gray);
    font-size: 62px;
  }

  h2 {
    margin-top: 3rem;
    width: 100%;
    font-size: 20px;
    color: var(--gray);
    font-weight: 200;
    letter-spacing: 0.5px;
  }
`

const Line = styled.div`
  border-bottom: 18px solid var(--gray);
  width: 150px;
  margin-top: 30px;
`

export default function Home() {
  return (
  <Main>
    <h1 className={gothamBold.className}>REABERTURA <br />SMART FIT</h1>
    <Line />
    <h2 className={gothamLight.className}>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. 
        Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</h2>
    <Form />
    <Label />
  </Main>
  )
}
