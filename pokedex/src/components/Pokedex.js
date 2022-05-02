import React from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    box-sizing: border-box;
  }
`

const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 10px;
`
const HeaderBonito = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background-color: red;
    width:100%;
    button{
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        margin: 0px 20px 0px 20px;
        height: 30px;
        align-self: center;
    }
`

export const Pokedex = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return(
        <div>
            <ContainerCards>
                <HeaderBonito>
                    <button onClick={goBack}>Voltar</button>
                    <h2>Pokedex</h2>
                </HeaderBonito>
                </ContainerCards>
            <GlobalStyle/>
        </div>
    )
}