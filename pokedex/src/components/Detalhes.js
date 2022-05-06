import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useRequestData } from "../Hooks/UseRequestData";

const Botao = styled.button`
  border-radius: 50%;
  &:hover {
    color: blue;
    background-color: yellowgreen;
    transition: linear 0.5s;
    cursor: pointer;
  }
`

const CorpoDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 5vh 25vw;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
`

const SessaoDado = styled.div`
  display: flex;
  padding: 15px;
  margin: auto;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 20px;
  text-align: center;
`;

export const Detalhes = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const estadoInicial = {
    stats: [],
    abilities: [],
    moves: [],
    types: [],
    sprites: {},
  };

  const [detalhes] = useRequestData(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    estadoInicial
  );

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
        <h4>{poder.stat.name}:</h4>
        <p>{poder.base_stat}</p>
      </div>
    );
  });

  const habilidadesPokemon = detalhes.abilities.map((habilidade) => {
    return (
      <div>
        <h4> Habilidades do Pokemon: {habilidade.ability.name.toUpperCase()}</h4>
      </div>
    );
  });

  const principaisAtaques = detalhes.moves.slice(0, 3).map((ataque) => {
    return (
      <div>
        <h4> Ataque principal: {ataque.move.name.toUpperCase()} </h4>
      </div>
    );
  });

  const tiposDoPokemon = detalhes.types.map((tipo) => {
    return (
      <div>
        <h4> Tipo do Pokemon: {tipo.type.name.toUpperCase()} </h4>
      </div>
    );
  });

  return (
    <CorpoDetalhes>
      <h1>
        <strong>
          <i>{detalhes.name}</i>
        </strong>
      </h1>
      <SessaoDado>
        <img src={detalhes.sprites.back_default} alt="Pokemon de costas" />
        <img src={detalhes.sprites.front_default} alt="Pokemon de frente" />
      </SessaoDado>
      <SessaoDado>{tiposDoPokemon}</SessaoDado>
      <SessaoDado>{principaisAtaques}</SessaoDado>
      <SessaoDado>{habilidadesPokemon}</SessaoDado>
      <SessaoDado>{poderesPokemon}</SessaoDado>
      <Botao onClick={goBack}>Voltar</Botao>
    </CorpoDetalhes>
  );
};
