import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import { useRequestData } from "../Hooks/UseRequestData";

const SessaoDado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: solid 2px black;
    padding: 5px;
    margin: 5px;
    gap: 5px;
`

export const Detalhes = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const estadoInicial = {
    stats: [],
    abilities: [],
    moves: [],
    types: [],
    sprites: {},
  }

  const [detalhes] = useRequestData(`https://pokeapi.co/api/v2/pokemon/${id}`, estadoInicial)

  const goBack = () => {
    navigate(-1);
  };

//   if (!detalhes ou detalhes === undefined) {
//       return (
//           <div>
//               Carregando... (outra opção para a variável estadoInicial para nos proteger quando os dados da API não tiverem chego por erro ou demora)
//           </div>
//       )
//   }

  const poderesPokemon = detalhes.stats.map((poder) => {
    return (
      <div>
        <p>{poder.base_stat}</p>
        <p>{poder.stat.name}</p>
      </div>
    );
  });

  const habilidadesPokemon = detalhes.abilities.map((habilidade) => {
    return (
      <div>
        <p>{habilidade.ability.name}</p>
      </div>
    );
  });

  const principaisAtaques = detalhes.moves.slice(0, 3).map((ataque) => {
    return (
      <div>
        <p> {ataque.move.name} </p>
      </div>
    );
  });

  const tiposDoPokemon = detalhes.types.map((tipo) => {
    return (
      <div>
        <p> {tipo.type.name} </p>
      </div>
    );
  });

  return (
    <div>
      {detalhes.name}
      <SessaoDado>
        <img src={detalhes.sprites.back_default} alt="banana" />
        <img src={detalhes.sprites.front_default} alt="batata" />
      </SessaoDado>
      <SessaoDado>{tiposDoPokemon}</SessaoDado>
      <SessaoDado>{principaisAtaques}</SessaoDado>
      <SessaoDado>{habilidadesPokemon}</SessaoDado>
      <SessaoDado>{poderesPokemon}</SessaoDado>
      <button onClick={goBack}>voltar</button>
    </div>
  );
};
