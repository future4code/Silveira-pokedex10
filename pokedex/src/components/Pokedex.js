import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { getPokemons } from "../request/requests";
import styled from "styled-components";

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  margin: 10px 500px;
`;

const Body = styled.div`
  min-height: auto;
`;

const Botao = styled.button`
  margin: 10px;
  border-radius: 30%;

  &:hover {
    border-radius: 15%;
    color: blue;
    background-color: yellowgreen;
    transition: linear 0.5s;
    cursor: pointer;
  }
`;

const PokemonItem = styled.div`
  display: flex;
  border: dashed 2px black;
  margin: 20px 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 70%) 0px 8px 16px 0px;
  button {
    max-height: 20px;
  }
`;

export const Pokedex = () => {
  const navigate = useNavigate();
  const { states, setters } = useContext(GlobalContext);
  const { pokemonsPokedex, pokemonsHome } = states;
  const { setPokemons, setPokemonPokedex, setPokemonsHome } = setters;

  const goBack = () => {
    navigate(-1);
  };

  const goToDetails = (id) => {
    navigate(`/Detalhes/${id}`);
  };

  const renderPokemonsList = pokemonsPokedex.map((pokemon) => {
    return (
      <PokemonItem key={pokemon.name}>
        <img
          src={pokemon.sprites.versions["generation-viii"].icons.front_default}
          alt="Pokemon Icone"
        />
        <h4>{pokemon.name.toUpperCase()}</h4>
        <Botao onClick={() => removeFromPokedex(pokemon)}>Remover</Botao>
        <Botao onClick={() => goToDetails(pokemon.name)}>Detalhes</Botao>
      </PokemonItem>
    );
  });

  const removeFromPokedex = (pokemon) => {
    const newPokemonsPokedex = [...pokemonsPokedex];
    const index = pokemonsPokedex.findIndex(
      (item) => item.name === pokemon.name
    );

    newPokemonsPokedex.splice(index, 1);
    setPokemonPokedex(newPokemonsPokedex);

    const newPokemons = [...pokemonsHome, pokemon];
    const orderedPokemons = newPokemons.sort((a, b) => {
      return a.id - b.id;
    });
    setPokemonsHome(orderedPokemons);
  };

  const CleanPokedex = () => {
    setPokemonPokedex([]);
    getPokemons(setPokemons);
  };

  return (
    <>
      <div></div>
      <div>
        <div>
          <Titulo>Pokedex</Titulo>
          <Botao onClick={CleanPokedex}>Limpar Tela</Botao>
        </div>
        <div>
          <div>{renderPokemonsList}</div>
          <Botao onClick={goBack}>Voltar</Botao>
        </div>
      </div>
    </>
  );
};
