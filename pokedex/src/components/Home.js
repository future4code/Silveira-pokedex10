import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import { UseRequestData } from "../Hooks/UseRequestData";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000000;
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
    background-color: #FF4500;
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

    const pokemons = UseRequestData('https://pokeapi.co/api/v2/pokemon?limit=30')
    console.log(pokemons && pokemons[0].results)


    return(
        <div>
            <HeaderBonito>
                <button onClick={goPokedex}>Ir Para Pokedex</button>
                <h2>Home</h2>
            </HeaderBonito>
            <ContainerCards>
                {pokemons && pokemons[0].results && pokemons[0].results.map((pokemons)=>{
                    return <Card pokemons={pokemons} />;
                })}
            </ContainerCards>
            <GlobalStyle/>
        </div>
    )
}