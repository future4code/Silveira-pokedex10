import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { Detalhes } from "./Detalhes";
import { getPokemons } from "../request/requests";
import { PokemonList, PokemonCard } from "./Styles";
import styled from "styled-components";

const Botao = styled.button`
    margin: 10px;
    border-radius: 30%;
    padding: 5px;

  &:hover {
    border-radius: 15%;
    color: blue;
    background-color: yellowgreen;
    transition: linear 0.5s;
    cursor: pointer;
  }
`

const Body = styled.div`
  display: grid;
  grid-area: main;

`;

const BotaoETitulo = styled.div`
    display: grid;
    max-width: 300px;
    justify-self: center;
`

export const Home = () => {
  const navigate = useNavigate();
  const { states, setters } = useContext(GlobalContext);
  const { pokemonsPokedex, pokemonsHome } = states;
  const { setPokemonPokedex, setPokemonsHome } = setters;

  useEffect(() => {
    getPokemons();
  }, []);

  const goToDetails = (id) => {
    navigate(`/Detalhes/${id}`);
  };

  const goPokedex = () => {
    navigate("/Pokedex");
  };

  const addToPokedex = (poke) => {
    const newPokemonsPokedex = [...pokemonsPokedex];
    const newPokemons = [...pokemonsHome];
    const index = pokemonsHome.indexOf(poke);
    const position = pokemonsPokedex.findIndex((item) => {
      return item.name === poke.name;
    });
    if (position === -1) {
      newPokemonsPokedex.push(poke);
      setPokemonPokedex(newPokemonsPokedex);
    }
    if (index > -1) {
      newPokemons.splice(index, 1);
      setPokemonsHome([...newPokemons]);
    }
  };

  const renderPokemons = pokemonsHome.map((pokemon) => {
    return (
      <PokemonCard key={pokemon.name}>
        <p>{pokemon.name}</p>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <div>
          <Botao onClick={() => addToPokedex(pokemon)}>
            Adicionar Pokedex
          </Botao>
          <Botao onClick={() => goToDetails(pokemon.name)}>
            Ir para Detalhes
          </Botao>
        </div>
      </PokemonCard>
    );
  });

  return (
    <>
      <Body>
        <BotaoETitulo>
          <h1>Lista de Pokemons</h1>
          <Botao onClick={goPokedex}> Ir para Pokedex </Botao>
        </BotaoETitulo>
        <PokemonList>{renderPokemons}</PokemonList>
      </Body>
    </>
  );
};
