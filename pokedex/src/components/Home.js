import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    box-sizing: border-box;
  }
`;

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

export const Home = () => {
    const navigate = useNavigate()

    const goPokedex = () => {
        navigate('/Pokedex')
    }

    return(
        <div>
            <HeaderBonito>
                <button onClick={goPokedex}>Ir Para Pokedex</button>
                <h2>Home</h2>
            </HeaderBonito>
            <ContainerCards>
                <Card /><Card /><Card /><Card /><Card /><Card /><Card />
                <Card /><Card /><Card /><Card /><Card /><Card /><Card />
                <Card /><Card /><Card /><Card /><Card /><Card /><Card />               
            </ContainerCards>
            <GlobalStyle/>
        </div>
    )
}